"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tVerifyOptions = exports.tRequestOptions = exports.tConfig = exports.links = void 0;
const t = require("io-ts");
const types_1 = require("../../types");
exports.links = {
    default: {
        REQUEST: 'https://pec.shaparak.ir/NewIPGServices/Sale/SaleService.asmx?wsdl',
        VERIFICATION: 'https://pec.shaparak.ir/NewIPGServices/Confirm/ConfirmService.asmx?wsdl',
        PAYMENT: '‫‪https://pec.shaparak.ir/NewIPG/',
    },
};
exports.tConfig = t.interface({
    merchantId: t.string,
});
exports.tRequestOptions = t.intersection([t.partial({}), types_1.tBaseRequestOptions]);
exports.tVerifyOptions = t.intersection([t.interface({}), types_1.tBaseVerifyOptions]);
//# sourceMappingURL=api.js.map