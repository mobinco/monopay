"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tBaseVerifyOptions = exports.tBaseRequestOptions = void 0;
const t = require("io-ts");
exports.tBaseRequestOptions = t.intersection([
    t.interface({
        callbackUrl: t.string,
        amount: t.number,
    }),
    t.partial({
        description: t.string,
    }),
]);
exports.tBaseVerifyOptions = t.interface({
    amount: t.number,
});
//# sourceMappingURL=types.js.map