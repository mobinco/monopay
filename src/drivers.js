"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentDriver = exports.Zibal = exports.Zarinpal = exports.Vandar = exports.Saman = exports.Sadad = exports.PayPing = exports.Payir = exports.Parsian = exports.NextPay = exports.IdPay = exports.Behpardakht = void 0;
const behpardakht_1 = require("./drivers/behpardakht");
const idpay_1 = require("./drivers/idpay");
const nextpay_1 = require("./drivers/nextpay");
const parsian_1 = require("./drivers/parsian");
const payir_1 = require("./drivers/payir");
const payping_1 = require("./drivers/payping");
const sadad_1 = require("./drivers/sadad");
const saman_1 = require("./drivers/saman");
const vandar_1 = require("./drivers/vandar");
const zarinpal_1 = require("./drivers/zarinpal");
const zibal_1 = require("./drivers/zibal");
var behpardakht_2 = require("./drivers/behpardakht");
Object.defineProperty(exports, "Behpardakht", { enumerable: true, get: function () { return behpardakht_2.Behpardakht; } });
var idpay_2 = require("./drivers/idpay");
Object.defineProperty(exports, "IdPay", { enumerable: true, get: function () { return idpay_2.IdPay; } });
var nextpay_2 = require("./drivers/nextpay");
Object.defineProperty(exports, "NextPay", { enumerable: true, get: function () { return nextpay_2.NextPay; } });
var parsian_2 = require("./drivers/parsian");
Object.defineProperty(exports, "Parsian", { enumerable: true, get: function () { return parsian_2.Parsian; } });
var payir_2 = require("./drivers/payir");
Object.defineProperty(exports, "Payir", { enumerable: true, get: function () { return payir_2.Payir; } });
var payping_2 = require("./drivers/payping");
Object.defineProperty(exports, "PayPing", { enumerable: true, get: function () { return payping_2.PayPing; } });
var sadad_2 = require("./drivers/sadad");
Object.defineProperty(exports, "Sadad", { enumerable: true, get: function () { return sadad_2.Sadad; } });
var saman_2 = require("./drivers/saman");
Object.defineProperty(exports, "Saman", { enumerable: true, get: function () { return saman_2.Saman; } });
var vandar_2 = require("./drivers/vandar");
Object.defineProperty(exports, "Vandar", { enumerable: true, get: function () { return vandar_2.Vandar; } });
var zarinpal_2 = require("./drivers/zarinpal");
Object.defineProperty(exports, "Zarinpal", { enumerable: true, get: function () { return zarinpal_2.Zarinpal; } });
var zibal_2 = require("./drivers/zibal");
Object.defineProperty(exports, "Zibal", { enumerable: true, get: function () { return zibal_2.Zibal; } });
const drivers = {
    behpardakht: behpardakht_1.Behpardakht,
    idpay: idpay_1.IdPay,
    nextpay: nextpay_1.NextPay,
    payir: payir_1.Payir,
    parsian: parsian_1.Parsian,
    payping: payping_1.PayPing,
    sadad: sadad_1.Sadad,
    saman: saman_1.Saman,
    vandar: vandar_1.Vandar,
    zarinpal: zarinpal_1.Zarinpal,
    zibal: zibal_1.Zibal,
};
const getPaymentDriver = (driverName, config) => {
    if (!drivers[driverName]) {
        throw Error(`This driver is not supported, supported drivers: ${Object.keys(drivers).join(', ')}`);
    }
    const driver = drivers[driverName];
    return new driver(config);
};
exports.getPaymentDriver = getPaymentDriver;
//# sourceMappingURL=drivers.js.map