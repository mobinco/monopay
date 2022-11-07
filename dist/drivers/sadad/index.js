"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sadad = void 0;
const axios_1 = require("axios");
const CryptoJS = require("crypto-js");
const driver_1 = require("../../driver");
const exceptions_1 = require("../../exceptions");
const API = require("./api");
class Sadad extends driver_1.Driver {
    constructor(config) {
        super(config, API.tConfig);
        this.links = API.links;
        this.requestPayment = async (options) => {
            options = this.getParsedData(options, API.tRequestOptions);
            const { amount, callbackUrl, mobile, multiplexingData, appName } = options;
            const { merchantId, terminalId, terminalKey } = this.config;
            const orderId = this.generateId();
            const response = await axios_1.default.post(this.getLinks().REQUEST, {
                Amount: amount,
                LocalDateTime: new Date().toISOString(),
                MerchantId: merchantId,
                TerminalId: terminalId,
                OrderId: orderId,
                ReturnUrl: callbackUrl,
                ApplicationName: appName,
                SignData: signData(`${terminalId};${orderId};${amount}`, terminalKey),
                MultiplexingData: multiplexingData,
                UserId: mobile ? +mobile : undefined,
            });
            if (response.data.ResCode !== 0) {
                throw new exceptions_1.RequestException(API.requestErrors[response.data.ResCode.toString()]);
            }
            return this.makeRequestInfo(response.data.Token, 'GET', this.getLinks().PAYMENT, {
                Token: response.data.Token,
            });
        };
        this.verifyPayment = async (_options, params) => {
            const { HashedCardNo, ResCode, Token } = params;
            const { terminalKey } = this.config;
            if (ResCode !== 0) {
                throw new exceptions_1.PaymentException('تراکنش توسط کاربر لغو شد.');
            }
            const response = await axios_1.default.post(this.getLinks().VERIFICATION, {
                SignData: signData(Token, terminalKey),
                Token,
            });
            const { ResCode: verificationResCode, SystemTraceNo } = response.data;
            if (verificationResCode !== 0) {
                throw new exceptions_1.VerificationException(API.verifyErrors[verificationResCode.toString()]);
            }
            return {
                transactionId: SystemTraceNo,
                cardPan: HashedCardNo,
                raw: params,
            };
        };
    }
}
exports.Sadad = Sadad;
const signData = (message, key) => {
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
};
//# sourceMappingURL=index.js.map