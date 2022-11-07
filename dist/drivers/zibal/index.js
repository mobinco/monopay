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
exports.Zibal = void 0;
const axios_1 = require("axios");
const driver_1 = require("../../driver");
const exceptions_1 = require("../../exceptions");
const API = require("./api");
class Zibal extends driver_1.Driver {
    constructor(config) {
        super(config, API.tConfig);
        this.links = API.links;
        this.requestPayment = async (options) => {
            options = this.getParsedData(options, API.tRequestOptions);
            const { amount } = options, otherOptions = __rest(options, ["amount"]);
            const response = await axios_1.default.post(this.getLinks().REQUEST, Object.assign({ merchant: this.getMerchantId(), amount: amount }, otherOptions));
            const { result, trackId } = response.data;
            if (result !== 100) {
                throw new exceptions_1.RequestException(API.purchaseErrors[result.toString()]);
            }
            return this.makeRequestInfo(trackId, 'GET', this.getLinks().PAYMENT + trackId);
        };
        this.verifyPayment = async (_options, params) => {
            const { status, success, trackId } = params;
            if (success.toString() === '0') {
                throw new exceptions_1.PaymentException(API.callbackErrors[status]);
            }
            const response = await axios_1.default.post(this.getLinks().VERIFICATION, {
                merchant: this.getMerchantId(),
                trackId: +trackId,
            });
            const { result } = response.data;
            if (result !== 100) {
                throw new exceptions_1.VerificationException(API.verifyErrors[result.toString()]);
            }
            return {
                raw: response.data,
                transactionId: response.data.refNumber,
                cardPan: response.data.cardNumber,
            };
        };
    }
    getMerchantId() {
        return this.config.sandbox ? 'zibal' : this.config.merchantId;
    }
}
exports.Zibal = Zibal;
//# sourceMappingURL=index.js.map