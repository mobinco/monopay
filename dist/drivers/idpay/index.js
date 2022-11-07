"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdPay = void 0;
const axios_1 = require("axios");
const driver_1 = require("../../driver");
const exceptions_1 = require("../../exceptions");
const API = require("./api");
class IdPay extends driver_1.Driver {
    constructor(config) {
        super(config, API.tConfig);
        this.links = API.links;
        this.requestPayment = async (options) => {
            options = this.getParsedData(options, API.tRequestOptions);
            const { amount, callbackUrl, mobile, email, description, name } = options;
            const response = await axios_1.default.post(this.getLinks().REQUEST, {
                amount: amount,
                callback: callbackUrl,
                mail: email,
                phone: mobile,
                order_id: this.generateUuid(),
                name,
                desc: description,
            }, {
                headers: this.getHeaders(),
            });
            if ('error_message' in response.data) {
                const error = response.data;
                throw new exceptions_1.RequestException(API.errors[error.error_code.toString()]);
            }
            return this.makeRequestInfo(response.data.id, 'GET', response.data.link);
        };
        this.verifyPayment = async (_options, params) => {
            const { id, order_id, status } = params;
            if (status.toString() !== '200') {
                throw new exceptions_1.PaymentException(API.callbackErrors[status.toString()]);
            }
            const response = await axios_1.default.post(this.getLinks().VERIFICATION, {
                order_id,
                id,
            }, {
                headers: this.getHeaders(),
            });
            if ('error_message' in response.data) {
                throw new exceptions_1.VerificationException(API.callbackErrors[response.data.error_code.toString()]);
            }
            return {
                transactionId: response.data.track_id,
                cardPan: response.data.payment.card_no,
                raw: response.data,
            };
        };
    }
    getHeaders() {
        return {
            'X-SANDBOX': this.config.sandbox ? '1' : '0',
            'X-API-KEY': this.config.apiKey,
        };
    }
}
exports.IdPay = IdPay;
//# sourceMappingURL=index.js.map