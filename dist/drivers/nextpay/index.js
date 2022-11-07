"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextPay = void 0;
const axios_1 = require("axios");
const driver_1 = require("../../driver");
const exceptions_1 = require("../../exceptions");
const API = require("./api");
class NextPay extends driver_1.Driver {
    constructor(config) {
        super(config, API.tConfig);
        this.links = API.links;
        this.requestPayment = async (options) => {
            options = this.getParsedData(options, API.tRequestOptions);
            const { amount, callbackUrl, mobile, customFields } = options;
            const response = await axios_1.default.post(this.getLinks().REQUEST, {
                api_key: this.config.apiKey,
                amount: amount * 10,
                callback_uri: callbackUrl,
                customer_phone: mobile ? +mobile : undefined,
                order_id: this.generateUuid(),
                custom_json_fields: customFields,
            });
            const { code, trans_id } = response.data;
            if (code.toString() !== '0') {
                throw new exceptions_1.RequestException(API.errors[code.toString()]);
            }
            return this.makeRequestInfo(trans_id, 'GET', this.getLinks().PAYMENT + trans_id);
        };
        this.verifyPayment = async (_options, params) => {
            const { amount, trans_id } = params;
            if (!trans_id) {
                throw new exceptions_1.PaymentException('تراکنش توسط کاربر لغو شد.');
            }
            const response = await axios_1.default.post(this.getLinks().VERIFICATION, {
                amount: +amount * 10,
                trans_id,
                api_key: this.config.apiKey,
            });
            const { Shaparak_Ref_Id, code, card_holder } = response.data;
            if (code.toString() !== '0') {
                throw new exceptions_1.VerificationException(API.errors[code.toString()]);
            }
            return {
                raw: response.data,
                transactionId: Shaparak_Ref_Id,
                cardPan: card_holder,
            };
        };
    }
}
exports.NextPay = NextPay;
//# sourceMappingURL=index.js.map