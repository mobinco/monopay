"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Saman = void 0;
const axios_1 = require("axios");
const soap = require("soap");
const jsdom = require("jsdom");
const driver_1 = require("../../driver");
const exceptions_1 = require("../../exceptions");
const API = require("./api");
class Saman extends driver_1.Driver {
    constructor(config) {
        super(config, API.tConfig);
        this.links = API.links;
        this.requestPayment = async (options) => {
            options = this.getParsedData(options, API.tRequestOptions);
            const { amount, callbackUrl, mobile, wage, resNum } = options;
            const { merchantId } = this.config;
            const response = await axios_1.default.post(this.getLinks().REQUEST, {
                Amount: amount,
                RedirectURL: callbackUrl,
                CellNumber: mobile,
                TerminalId: merchantId,
                ResNum: resNum || this.generateId(),
                Action: 'token',
                Wage: wage,
            });
            //console.log(response);
            if (response.data.status !== 1 && response.data.errorCode !== undefined) {
                return API.purchaseErrors[response.data.errorCode.toString()];
                //throw new exceptions_1.RequestException(API.purchaseErrors[response.data.errorCode.toString()]);
            }
            if (!response.data.token) {
                return response.data;
                //throw new exceptions_1.RequestException();
            }
            return this.makeRequestInfo(response.data.token, 'POST', this.getLinks().PAYMENT, {
                Token: response.data.token,
                GetMethod: true,
            });
        };
        this.verifyPayment = async (_options, params) => {
            const { RefNum: referenceId, TraceNo: transactionId, Status: status } = params;
            const { merchantId } = this.config;
            if (!referenceId) {
                return API.callbackErrors[status.toString()];
                //throw new exceptions_1.PaymentException(API.purchaseErrors[status.toString()]);
            }

            /* Soap not working
            const soapClient = await soap.createClientAsync(this.getLinks().VERIFICATION);
            const response = await soapClient.verifyTransactionAsync({
                String_1: referenceId,
                String_2: merchantId
            });
            const responseStatus = response[0]?.result?.$value;
            */
            
            const response = await axios_1.default.post(this.getLinks().VERIFICATION, new URLSearchParams({
                String_1: referenceId,
                String_2: merchantId
            }), {
				headers: { 
					"Content-Type": "application/x-www-form-urlencoded"
				}
			});
			
			const xmlDom = new jsdom.JSDOM(response.data);
			const responseStatus = xmlDom.window.document.querySelector("double").textContent;
			
            if (responseStatus < 0) {
                return API.callbackErrors[responseStatus];
                //throw new exceptions_1.VerificationException(API.purchaseErrors[responseStatus]);
            }
            return {
                amount: responseStatus,
                transactionId: transactionId,
                cardPan: params.SecurePan,
                raw: params,
            };
        };
    }
}
exports.Saman = Saman;
//# sourceMappingURL=index.js.map