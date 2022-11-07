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
exports.Vandar = void 0;
const axios_1 = require("axios");
const driver_1 = require("../../driver");
const exceptions_1 = require("../../exceptions");
const API = require("./api");
class Vandar extends driver_1.Driver {
    constructor(config) {
        super(config, API.tConfig);
        this.links = API.links;
        this.requestPayment = async (options) => {
            options = this.getParsedData(options, API.tRequestOptions);
            const { amount, callbackUrl } = options, otherOptions = __rest(options, ["amount", "callbackUrl"]);
            const { api_key } = this.config;
            const response = await axios_1.default.post(this.getLinks().REQUEST, Object.assign({ api_key, amount: amount, callback_url: callbackUrl }, otherOptions), {
                validateStatus: () => true,
            });
            const { errors, token } = response.data;
            if (errors === null || errors === void 0 ? void 0 : errors.length) {
                throw new exceptions_1.RequestException(errors.join('\n'));
            }
            return this.makeRequestInfo(token, 'GET', this.getLinks().PAYMENT + response.data.token);
        };
        this.verifyPayment = async (options, params) => {
            options = this.getParsedData(options, API.tVerifyOptions);
            const { token, payment_status } = params;
            const { api_key } = this.config;
            if (payment_status !== 'OK') {
                throw new exceptions_1.PaymentException();
            }
            const response = await axios_1.default.post(this.getLinks().VERIFICATION, {
                api_key,
                token,
            }, {
                validateStatus: () => true,
            });
            const { errors, transId, cardNumber } = response.data;
            if (errors === null || errors === void 0 ? void 0 : errors.length) {
                throw new exceptions_1.VerificationException(errors.join('\n'));
            }
            return {
                transactionId: transId,
                cardPan: cardNumber,
                raw: {
                    token,
                    payment_status,
                },
            };
        };
    }
    getLinks() {
        return this.links.default;
    }
}
exports.Vandar = Vandar;
//# sourceMappingURL=index.js.map