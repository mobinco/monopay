import { Driver } from '../../driver';
import * as API from './api';
export declare class Zarinpal extends Driver<API.Config> {
    constructor(config: API.Config);
    protected links: import("../../types").LinksObject;
    requestPayment: (options: API.RequestOptions) => Promise<import("../../payment-info").PaymentInfo>;
    verifyPayment: (options: API.VerifyOptions, params: API.CallbackParams) => Promise<API.Receipt>;
    protected getLinks(): {
        REQUEST: string;
        VERIFICATION: string;
        PAYMENT: string;
    };
}
