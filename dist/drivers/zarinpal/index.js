"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zarinpal = void 0;
const axios_1 = require("axios");
const driver_1 = require("../../driver");
const exceptions_1 = require("../../exceptions");
const API = require("./api");
class Zarinpal extends driver_1.Driver {
    constructor(config) {
        super(config, API.tConfig);
        this.links = API.links;
        this.requestPayment = async (options) => {
            options = this.getParsedData(options, API.tRequestOptions);
            const { amount, callbackUrl, mobile, email } = options, otherOptions = __rest(options, ["amount", "callbackUrl", "mobile", "email"]);
            const { merchantId } = this.config;
            const response = await axios_1.default.post(this.getLinks().REQUEST, Object.assign({ merchant_id: merchantId, amount: amount, callback_url: callbackUrl, metadata: { email, mobile } }, otherOptions));
            const { data, errors } = response.data;
            if (!Array.isArray(data) && !!data) {
                return this.makeRequestInfo(data.authority, 'GET', this.getLinks().PAYMENT + data.authority);
            }
            if (!Array.isArray(errors)) {
                const { code } = errors;
                throw new exceptions_1.RequestException(API.requestErrors[code.toString()]);
            }
            throw new exceptions_1.RequestException();
        };
        this.verifyPayment = async (options, params) => {
            options = this.getParsedData(options, API.tVerifyOptions);
            const { Authority: authority, Status: status } = params;
            const { amount } = options;
            const { merchantId } = this.config;
            if (status !== 'OK') {
                throw new exceptions_1.PaymentException();
            }
            const response = await axios_1.default.post(this.getLinks().VERIFICATION, {
                authority: authority.toString(),
                merchant_id: merchantId,
                amount: amount,
            }, {});
            const { data, errors } = response.data;
            if (!Array.isArray(data)) {
                return {
                    transactionId: data.ref_id,
                    cardPan: data.card_pan,
                    raw: data,
                };
            }
            if (!Array.isArray(errors)) {
                const { code } = errors;
                throw new exceptions_1.VerificationException(API.verifyErrors[code.toString()]);
            }
            throw new exceptions_1.VerificationException();
        };
    }
    getLinks() {
        return this.config.sandbox ? this.links.sandbox : this.links.default;
    }
}
exports.Zarinpal = Zarinpal;
//# sourceMappingURL=index.js.map