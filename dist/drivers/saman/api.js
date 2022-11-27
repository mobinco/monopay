"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tVerifyOptions = exports.tRequestOptions = exports.tConfig = exports.callbackErrors = exports.purchaseErrors = exports.links = void 0;
const t = require("io-ts");
const types_1 = require("../../types");
exports.links = {
    default: {
        REQUEST: 'https://sep.shaparak.ir/MobilePG/MobilePayment',
        VERIFICATION: 'https://sep.shaparak.ir/payments/referencepayment.asmx/verifyTransaction',   // 'https://sep.shaparak.ir/Payments/ReferencePayment.asmx?WSDL', // https://verify.sep.ir/Payments/ReferencePayment.asmx  
        PAYMENT: 'https://sep.shaparak.ir/MobilePG/MobilePayment',
    },
};
exports.purchaseErrors = {
    '-1': 'خطای در پردازش اطالعات ارسالی. )مشکل در یکی از ورودیها و ناموفق بودن فراخوانی متد برگشت تراکنش(',
    '-3': 'ورودیها حاوی کارکترهای غیرمجاز میباشند.',
    '-4': 'Failed Authentication Merchant (کلمه عبور یا کد فروشنده اشتباه است(',
    '-6': 'تراکنش قبلاً برگشت داده شده است.',
    '-7': 'رسید دیجیتالی تهی است.',
    '-8': 'طول ورودی ها بیشتر از حد مجاز است.',
    '-9': 'وجود کارکترهای غیرمجاز در مبلغ برگشتی.',
    '-10': 'رسید دیجیتالی به صورت Base64 نیست )حاوی کارکترهای غیرمجاز است(.',
    '-11': 'طول ورودیها کمتر از حد مجاز است.',
    '-12': 'مبلغ برگشتی منفی است.',
    '-13': 'مبلغ برگشتی برای برگشت جزئی بیش از مبلغ برگشت نخوردهی رسید دیجیتالی است.',
    '-14': 'چنین تراکنشی تعریف نشده است.',
    '-15': 'مبلغ برگشتی به صورت اعشاری داده شده است.',
    '-16': 'خطای داخلی سیستم',
    '-17': 'برگشت زدن جزیی تراکنش مجاز نمی باشد.',
    '-18': 'IP Address فروشنده نا معتبر است',
    '8': 'IP Address فروشنده نا معتبر است',
};
exports.callbackErrors = {
    '1': 'کاربر انصراف داده است',
    '2': 'پرداخت با موفقیت انجام شد',
    '3': 'پرداخت انجام نشد.',
    '4': 'کاربر در بازه زمانی تعیین شده پاسخی ارسال نکرده است.',
    '5': 'پارامترهای ارسالی نامعتبر است.',
    '8': 'آدرس سرور پذیرنده نامعتبر است )در پرداخت های بر پایه توکن(',
    '10': 'توکن ارسال شده یافت نشد.',
    '11': 'با این شماره ترمینال فقط تراکنش های توکنی قابل پرداخت هستند.',
    '12': 'شماره ترمینال ارسال شده یافت نشد.',
    '-111': 'اطلاعات ارسالی صحیح نیست.'
};
exports.tConfig = t.interface({
    merchantId: t.string,
});
exports.tRequestOptions = t.intersection([
    t.partial({
        mobile: t.string,
        wage: t.number,
    }),
    types_1.tBaseRequestOptions,
]);
exports.tVerifyOptions = t.intersection([t.interface({}), types_1.tBaseVerifyOptions]);
//# sourceMappingURL=api.js.map