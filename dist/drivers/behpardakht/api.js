"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tVerifyOptions = exports.tRequestOptions = exports.tConfig = exports.errors = exports.links = void 0;
const t = require("io-ts");
const types_1 = require("../../types");
exports.links = {
    default: {
        REQUEST: 'https://bpm.shaparak.ir/pgwchannel/services/pgw?wsdl',
        VERIFICATION: 'https://bpm.shaparak.ir/pgwchannel/services/pgw?wsdl',
        PAYMENT: 'https://bpm.shaparak.ir/pgwchannel/startpay.mellat',
    },
};
exports.errors = {
    '11': 'است نامعتبر كارت شماره',
    '12': 'نيست كافي موجودي',
    '13': 'است نادرست رمز',
    '14': 'است مجاز حد از بيش رمز كردن وارد دفعات تعداد',
    '15': 'است نامعتبر كارت',
    '16': 'است مجاز حد از بيش وجه برداشت دفعات',
    '17': 'است شده منصرف تراكنش انجام از كاربر',
    '18': 'است گذشته كارت انقضاي تاريخ',
    '19': 'است مجاز حد از بيش وجه برداشت مبلغ',
    '111': 'است نامعتبر كارت كننده صادر',
    '112': 'كارت كننده صادر سوييچ خطاي',
    '113': 'نشد دريافت كارت كننده صادر از پاسخي',
    '114': 'نيست تراكنش اين انجام به مجاز كارت دارنده',
    '21': 'است نامعتبر پذيرنده',
    '23': 'است داده رخ امنيتي خطاي',
    '24': 'است نامعتبر پذيرنده كاربري اطلاعات',
    '25': 'است نامعتبر مبلغ',
    '31': 'است نامعتبر پاسخ',
    '32': 'باشد نمي صحيح شده وارد اطلاعات فرمت',
    '33': 'است نامعتبر حساب',
    '34': 'سيستمي خطاي',
    '35': 'است نامعتبر تاريخ',
    '41': 'است تكراري درخواست شماره',
    '42': 'نشد يافت Sale تراكنش',
    '43': 'است شده داده Verify درخواست قبلا',
    '44': 'نشد يافت Verfiy درخواست',
    '45': 'است شده Settle تراكنش',
    '46': 'است نشده Settle تراكنش',
    '47': 'نشد يافت Settle تراكنش',
    '48': 'است شده Reverse تراكنش',
    '49': 'نشد يافت Refund تراكنش',
    '412': 'است نادرست قبض شناسه',
    '413': 'است نادرست پرداخت شناسه',
    '414': 'است نامعتبر قبض كننده صادر سازمان',
    '415': 'است رسيده پايان به كاري جلسه زمان',
    '416': 'اطلاعات ثبت در خطا',
    '417': 'است نامعتبر كننده پرداخت شناسه',
    '418': 'مشتري اطلاعات تعريف در اشكال',
    '419': 'است گذشته مجاز حد از اطلاعات ورود دفعات تعداد',
    '421': 'است نامعتبر IP',
    '51': 'است تكراري تراكنش',
    '54': 'نيست موجود مرجع تراكنش',
    '55': 'است نامعتبر تراكنش',
    '61': 'واريز در خطا',
};
exports.tConfig = t.interface({
    terminalId: t.number,
    username: t.string,
    password: t.string,
});
exports.tRequestOptions = t.intersection([
    t.partial({
        payerId: t.number,
    }),
    types_1.tBaseRequestOptions,
]);
exports.tVerifyOptions = t.intersection([t.interface({}), types_1.tBaseVerifyOptions]);
//# sourceMappingURL=api.js.map