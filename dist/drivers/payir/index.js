"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payir = void 0;
const axios_1 = require("axios");
const driver_1 = require("../../driver");
const exceptions_1 = require("../../exceptions");
const API = require("./api");
class Payir extends driver_1.Driver {
    constructor(config) {
        super(config, API.tConfig);
        this.links = API.links;
        this.requestPayment = async (options) => {
            options = this.getParsedData(options, API.tRequestOptions);
            const { amount, callbackUrl, description, mobile, nationalCode, validCardNumber } = options;
            const response = await axios_1.default.post(this.getLinks().REQUEST, {
                api: this.getApiKey(),
                amount,
                redirect: callbackUrl,
                description,
                mobile,
                nationalCode,
                validCardNumber,
            });
            const { status } = response.data;
            if (status.toString() !== '1') {
                throw new exceptions_1.RequestException(API.errors[status.toString()]);
            }
            response.data = response.data;
            return this.makeRequestInfo(response.data.token, 'GET', this.getLinks().PAYMENT + response.data.token);
        };
        this.verifyPayment = async (_options, params) => {
            const { status, token } = params;
            if (status.toString() !== '1') {
                throw new exceptions_1.PaymentException(API.errors[status.toString()]);
            }
            const response = await axios_1.default.post(this.getLinks().VERIFICATION, {
                api: this.getApiKey(),
                token,
            });
            const verifyStatus = response.data.status;
            if (verifyStatus.toString() !== '1') {
                throw new exceptions_1.VerificationException(API.errors[verifyStatus.toString()]);
            }
            response.data = response.data;
            return {
                raw: response.data,
                transactionId: response.data.transId,
                cardPan: response.data.cardNumber,
            };
        };
    }
    getApiKey() {
        return this.config.sandbox ? 'test' : this.config.apiKey;
    }
}
exports.Payir = Payir;
//# sourceMappingURL=index.js.map