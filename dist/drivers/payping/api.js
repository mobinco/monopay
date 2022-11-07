"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tVerifyOptions = exports.tRequestOptions = exports.tConfig = exports.links = void 0;
const t = require("io-ts");
const types_1 = require("../../types");
exports.links = {
    default: {
        REQUEST: 'https://api.payping.ir/v2/pay',
        VERIFICATION: 'https://api.payping.ir/v2/pay/verify',
        PAYMENT: 'https://api.payping.ir/v2/pay/gotoipg/',
    },
};
exports.tConfig = t.intersection([
    t.partial({}),
    t.interface({
        apiKey: t.string,
    }),
]);
exports.tRequestOptions = t.intersection([
    t.partial({
        mobile: t.string,
        email: t.string,
        name: t.string,
    }),
    types_1.tBaseRequestOptions,
]);
exports.tVerifyOptions = t.intersection([t.interface({}), types_1.tBaseVerifyOptions]);
//# sourceMappingURL=api.js.map