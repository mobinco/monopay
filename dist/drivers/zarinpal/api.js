"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tVerifyOptions = exports.tRequestOptions = exports.tConfig = exports.verifyErrors = exports.requestErrors = exports.links = void 0;
const t = require("io-ts");
const types_1 = require("../../types");
exports.links = {
    default: {
        REQUEST: 'https://api.zarinpal.com/pg/v4/payment/request.json',
        VERIFICATION: 'https://api.zarinpal.com/pg/v4/payment/verify.json',
        PAYMENT: 'https://www.zarinpal.com/pg/StartPay/',
    },
    sandbox: {
        REQUEST: 'https://sandbox.zarinpal.com/pg/v4/payment/request.json',
        VERIFICATION: 'https://sandbox.zarinpal.com/pg/v4/payment/verify.json',
        PAYMENT: 'https://sandbox.zarinpal.com/pg/StartPay/',
    },
};
exports.requestErrors = {
    '-9': 'خطای اعتبار سنجی',
    '-10': 'ای پی و يا مرچنت كد پذيرنده صحيح نيست.',
    '-11': 'مرچنت کد فعال نیست لطفا با تیم پشتیبانی ما تماس بگیرید.',
    '-12': 'تلاش بیش از حد در یک بازه زمانی کوتاه.',
    '-15': 'ترمینال شما به حالت تعلیق در آمده با تیم پشتیبانی تماس بگیرید.',
    '-16': 'سطح تاييد پذيرنده پايين تر از سطح نقره اي است.',
};
exports.verifyErrors = {
    '-50': 'مبلغ پرداخت شده با مقدار مبلغ در تایید شده متفاوت است.',
    '-51': 'پرداخت ناموفق',
    '-52': 'خطای غیر منتظره با پشتیبانی تماس بگیرید.',
    '-53': 'اتوریتی برای این مرچنت کد نیست.',
    '-54': 'اتوریتی نامعتبر است.',
    '101': 'تراکنش قبلا یک بار تایید شده است.',
};
exports.tConfig = t.intersection([
    t.partial({
        sandbox: t.boolean,
    }),
    t.interface({
        merchantId: t.string,
    }),
]);
exports.tRequestOptions = t.intersection([t.partial({ mobile: t.string, email: t.string }), types_1.tBaseRequestOptions]);
exports.tVerifyOptions = t.intersection([t.interface({}), types_1.tBaseVerifyOptions]);
//# sourceMappingURL=api.js.map