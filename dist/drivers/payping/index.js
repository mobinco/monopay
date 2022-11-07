"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPing = void 0;
const axios_1 = require("axios");
const driver_1 = require("../../driver");
const exceptions_1 = require("../../exceptions");
const API = require("./api");
class PayPing extends driver_1.Driver {
    constructor(config) {
        super(config, API.tConfig);
        this.links = API.links;
        this.requestPayment = async (options) => {
            options = this.getParsedData(options, API.tRequestOptions);
            const { amount, callbackUrl, mobile, email, name, description } = options;
            let response;
            try {
                response = await axios_1.default.post(this.getLinks().REQUEST, {
                    amount: amount * 10,
                    returnUrl: callbackUrl,
                    description,
                    payerIdentity: mobile || email,
                    payerName: name,
                });
            }
            catch (error) {
                throw new exceptions_1.RequestException(this.statusToMessage(error.response.status));
            }
            const { code } = response.data;
            return this.makeRequestInfo(code, 'GET', this.getLinks().PAYMENT + code);
        };
        this.verifyPayment = async (options, params) => {
            const { code, refid } = params;
            const { amount } = options;
            let response;
            try {
                response = await axios_1.default.post(this.getLinks().VERIFICATION, {
                    amount: amount * 10,
                    refId: code,
                });
            }
            catch (error) {
                throw new exceptions_1.VerificationException(this.statusToMessage(error.response.status));
            }
            const { cardNumber } = response.data;
            return {
                raw: response.data,
                transactionId: refid,
                cardPan: cardNumber,
            };
        };
    }
    statusToMessage(status = 500) {
        const map = {
            '400': 'مشکلی در اطلاعات ارسالی وجود دارد.',
            '401': 'شما به این آیتم دسترسی ندارید.',
            '403': 'دسترسی شما غیر مجاز است.',
            '404': 'یافت نشد.',
            '500': 'مشکلی از طرف درگاه پرداخت رخ داده.',
            '502': 'سرور پراکسی با خطا مواجه شده است.',
            '503': 'سرور درگاه پرداخت در حال حاضر پاسخ‌گو نیست.',
        };
        return map[status.toString() || '500'];
    }
}
exports.PayPing = PayPing;
//# sourceMappingURL=index.js.map