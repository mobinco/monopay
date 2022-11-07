"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tVerifyOptions = exports.tRequestOptions = exports.tConfig = exports.errors = exports.callbackErrors = exports.links = void 0;
const t = require("io-ts");
const types_1 = require("../../types");
exports.links = {
    default: {
        REQUEST: 'https://api.idpay.ir/v1.1/payment',
        VERIFICATION: 'https://api.idpay.ir/v1.1/payment/verify',
        PAYMENT: '',
    },
};
exports.callbackErrors = {
    '1': 'پرداخت انجام نشده است',
    '2': 'پرداخت ناموفق بوده است',
    '3': 'خطا رخ داده است',
    '4': 'بلوکه شده',
    '5': 'برگشت به پرداخت کننده',
    '6': 'برگشت خورده سیستمی',
    '7': 'انصراف از پرداخت',
    '8': 'به درگاه پرداخت منتقل شد',
    '10': 'در انتظار تایید پرداخت',
    '100': 'پرداخت تایید شده است',
    '101': 'پرداخت قبلا تایید شده است',
    '200': 'به دریافت کننده واریز شد',
};
exports.errors = {
    '11': 'کاربر مسدود شده است.',
    '12': 'API Key یافت نشد.',
    '13': 'درخواست شما از {ip} ارسال شده است. این IP با IP های ثبت شده در وب سرویس همخوانی ندارد.',
    '14': 'وب سرویس شما در حال بررسی است و یا تایید نشده است.',
    '21': 'حساب بانکی متصل به وب سرویس تایید نشده است.',
    '22': 'وب سریس یافت نشد.',
    '23': 'اعتبار سنجی وب سرویس ناموفق بود.',
    '24': 'حساب بانکی مرتبط با این وب سرویس غیر فعال شده است.',
    '31': 'کد تراکنش id نباید خالی باشد.',
    '32': 'شماره سفارش order_id نباید خالی باشد.',
    '33': 'مبلغ amount نباید خالی باشد.',
    '34': 'مبلغ amount باید بیشتر از {min-amount} ریال باشد.',
    '35': 'مبلغ amount باید کمتر از {max-amount} ریال باشد.',
    '36': 'مبلغ amount بیشتر از حد مجاز است.',
    '37': 'آدرس بازگشت callback نباید خالی باشد.',
    '38': 'درخواست شما از آدرس {domain} ارسال شده است. دامنه آدرس بازگشت callback با آدرس ثبت شده در وب سرویس همخوانی ندارد.',
    '41': 'فیلتر وضعیت تراکنش ها می بایست آرایه ای (لیستی) از وضعیت های مجاز در مستندات باشد.',
    '42': 'فیلتر تاریخ پرداخت می بایست آرایه ای شامل المنت های min و max از نوع timestamp باشد.',
    '43': 'فیلتر تاریخ تسویه می بایست آرایه ای شامل المنت های min و max از نوع timestamp باشد.',
    '51': 'تراکنش ایجاد نشد.',
    '52': 'استعلام نتیجه ای نداشت.',
    '53': 'تایید پرداخت امکان پذیر نیست.',
    '54': 'مدت زمان تایید پرداخت سپری شده است.',
};
exports.tConfig = t.intersection([
    t.partial({
        sandbox: t.boolean,
    }),
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