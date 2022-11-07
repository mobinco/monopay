"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tVerifyOptions = exports.tRequestOptions = exports.tConfig = exports.links = void 0;
const t = require("io-ts");
const types_1 = require("../../types");
exports.links = {
    default: {
        REQUEST: 'https://ipg.vandar.io/api/v3/send',
        VERIFICATION: 'https://ipg.vandar.io/api/v3/verify',
        PAYMENT: 'https://ipg.vandar.io/v3/',
    },
};
exports.tConfig = t.intersection([
    t.partial({}),
    t.interface({
        api_key: t.string,
    }),
]);
exports.tRequestOptions = t.intersection([
    t.partial({
        mobile_number: t.string,
        factorNumber: t.string,
        description: t.string,
        valid_card_number: t.string,
        comment: t.string,
    }),
    types_1.tBaseRequestOptions,
]);
exports.tVerifyOptions = t.intersection([
    t.partial({
        status: t.number,
        realAmount: t.number,
        wage: t.string,
        transId: t.number,
        factorNumber: t.string,
        mobile: t.string,
        description: t.string,
        cardNumber: t.string,
        paymentDate: t.string,
        cid: t.string,
        message: t.string,
        errors: t.array(t.string),
    }),
    types_1.tBaseVerifyOptions,
]);
//# sourceMappingURL=api.js.map