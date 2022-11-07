"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Behpardakht = void 0;
const soap = require("soap");
const driver_1 = require("../../driver");
const exceptions_1 = require("../../exceptions");
const API = require("./api");
class Behpardakht extends driver_1.Driver {
    constructor(config) {
        super(config, API.tConfig);
        this.links = API.links;
        this.requestPayment = async (options) => {
            options = this.getParsedData(options, API.tRequestOptions);
            const { amount, callbackUrl, description, payerId } = options;
            const { terminalId, username, password } = this.config;
            const client = await soap.createClientAsync(this.getLinks().REQUEST);
            const requestFields = {
                terminalId,
                userName: username,
                userPassword: password,
                amount,
                callBackUrl: callbackUrl,
                orderId: this.generateId(),
                localDate: this.dateFormat(),
                localTime: this.timeFormat(),
                payerId: payerId || 0,
                additionalData: description || '',
            };
            const response = client.bpPayRequest(requestFields);
            const splittedResponse = response.split(', ');
            const ResCode = splittedResponse[0];
            const RefId = splittedResponse[1];
            if (ResCode.toString() !== '0') {
                throw new exceptions_1.RequestException(API.errors[response[0]]);
            }
            return this.makeRequestInfo(RefId, 'POST', this.getLinks().PAYMENT, {
                RefId,
            });
        };
        this.verifyPayment = async (_options, params) => {
            const { RefId, ResCode, saleOrderId, SaleReferenceId, CardHolderPan } = params;
            const { terminalId, username, password } = this.config;
            if (ResCode !== '0') {
                throw new exceptions_1.PaymentException(API.errors[ResCode]);
            }
            const soapClient = await soap.createClientAsync(this.getLinks().VERIFICATION);
            const requestFields = {
                terminalId,
                userName: username,
                userPassword: password,
                orderId: saleOrderId,
                saleOrderId: saleOrderId,
                saleReferenceId: SaleReferenceId,
            };
            const verifyResponse = soapClient.bpVerifyRequest(requestFields);
            if (verifyResponse.toString() !== '0') {
                if (verifyResponse.toString() !== '43') {
                    soapClient.bpReversalRequest(requestFields);
                }
                throw new exceptions_1.VerificationException(API.errors[verifyResponse]);
            }
            const settleResponse = soapClient.bpSettleRequest(requestFields);
            if (settleResponse.toString() !== '0') {
                if (settleResponse.toString() !== '45' && settleResponse.toString() !== '48') {
                    soapClient.bpReversalRequest(requestFields);
                }
                throw new exceptions_1.VerificationException(API.errors[verifyResponse]);
            }
            return {
                transactionId: RefId,
                cardPan: CardHolderPan,
                raw: params,
            };
        };
    }
    dateFormat(date = new Date()) {
        const yyyy = date.getFullYear();
        const mm = date.getMonth() + 1;
        const dd = date.getDate();
        return yyyy.toString() + mm.toString() + dd.toString();
    }
    timeFormat(date = new Date()) {
        const hh = date.getHours();
        const mm = date.getMonth();
        const ss = date.getSeconds();
        return hh.toString() + mm.toString() + ss.toString();
    }
}
exports.Behpardakht = Behpardakht;
//# sourceMappingURL=index.js.map