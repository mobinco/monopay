"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tVerifyOptions = exports.tRequestOptions = exports.tConfig = exports.verifyErrors = exports.callbackErrors = exports.purchaseErrors = exports.tMultiplexingObject = exports.links = void 0;
const t = require("io-ts");
const types_1 = require("../../types");
exports.links = {
    default: {
        REQUEST: 'https://gateway.zibal.ir/v1/request',
        VERIFICATION: 'https://gateway.zibal.ir/v1/verify',
        PAYMENT: 'https://gateway.zibal.ir/start/',
    },
};
exports.tMultiplexingObject = t.interface({
    bankAccount: t.string,
    subMerchantId: t.string,
    walletID: t.string,
    amount: t.number,
    wagePayer: t.boolean,
});
exports.purchaseErrors = {
    '102': 'merchant یافت نشد.',
    '103': 'merchant غیرفعال',
    '104': 'merchant نامعتبر',
    '201': 'قبلا تایید شده.',
    '105': 'amount بایستی بزرگتر از 1,000 ریال باشد.',
    '106': 'callbackUrl نامعتبر می‌باشد. (شروع با http و یا https)',
    '113': 'amount مبلغ تراکنش از سقف میزان تراکنش بیشتر است.',
};
exports.callbackErrors = {
    '-1': 'در انتظار پردخت',
    '-2': 'خطای داخلی',
    '1': 'پرداخت شده - تاییدشده',
    '2': 'پرداخت شده - تاییدنشده',
    '3': 'لغوشده توسط کاربر',
    '4': '‌شماره کارت نامعتبر می‌باشد.',
    '5': '‌موجودی حساب کافی نمی‌باشد.',
    '6': 'رمز واردشده اشتباه می‌باشد.',
    '7': '‌تعداد درخواست‌ها بیش از حد مجاز می‌باشد.',
    '8': '‌تعداد پرداخت اینترنتی روزانه بیش از حد مجاز می‌باشد.',
    '9': 'مبلغ پرداخت اینترنتی روزانه بیش از حد مجاز می‌باشد.',
    '10': '‌صادرکننده‌ی کارت نامعتبر می‌باشد.',
    '11': '‌خطای سوییچ',
    '12': 'کارت قابل دسترسی نمی‌باشد.',
};
exports.verifyErrors = {
    '102': 'merchant یافت نشد.',
    '103': 'merchant غیرفعال',
    '104': 'merchant نامعتبر',
    '201': 'قبلا تایید شده.',
    '105': 'amount بایستی بزرگتر از 1,000 ریال باشد.',
    '202': 'سفارش پرداخت نشده یا ناموفق بوده است. جهت اطلاعات بیشتر جدول وضعیت‌ها را مطالعه کنید.',
    '203': 'trackId نامعتبر می‌باشد.',
};
exports.tConfig = t.intersection([
    t.partial({
        sandbox: t.boolean,
    }),
    t.interface({
        merchantId: t.string,
    }),
]);
exports.tRequestOptions = t.intersection([
    t.partial({
        mobile: t.string,
        orderId: t.string,
        allowedCards: t.array(t.string),
        linkToPay: t.boolean,
        sms: t.boolean,
        percentMode: t.union([t.literal(0), t.literal(1)]),
        feeMode: t.union([t.literal(0), t.literal(1), t.literal(2)]),
        multiplexingInfos: t.array(exports.tMultiplexingObject),
    }),
    types_1.tBaseRequestOptions,
]);
exports.tVerifyOptions = t.intersection([t.partial({}), types_1.tBaseVerifyOptions]);
//# sourceMappingURL=api.js.map