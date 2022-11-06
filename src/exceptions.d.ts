export declare class BasePaymentException extends Error {
    constructor(message?: string);
}
export declare class RequestException extends BasePaymentException {
    constructor(message?: string);
}
export declare class PaymentException extends BasePaymentException {
    constructor(message?: string);
}
export declare class VerificationException extends BasePaymentException {
    constructor(message?: string);
}
export declare class BadConfigException extends BasePaymentException {
    constructor(errors: string[]);
}
