"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadConfigException = exports.VerificationException = exports.PaymentException = exports.RequestException = exports.BasePaymentException = void 0;
class BasePaymentException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, BasePaymentException.prototype);
    }
}
exports.BasePaymentException = BasePaymentException;
class RequestException extends BasePaymentException {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, RequestException.prototype);
    }
}
exports.RequestException = RequestException;
class PaymentException extends BasePaymentException {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, PaymentException.prototype);
    }
}
exports.PaymentException = PaymentException;
class VerificationException extends BasePaymentException {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, VerificationException.prototype);
    }
}
exports.VerificationException = VerificationException;
class BadConfigException extends BasePaymentException {
    constructor(errors) {
        super(errors.join(',\n'));
        Object.setPrototypeOf(this, BadConfigException.prototype);
    }
}
exports.BadConfigException = BadConfigException;
//# sourceMappingURL=exceptions.js.map