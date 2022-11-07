import { Driver } from '../../driver';
import * as API from './api';
export declare class IdPay extends Driver<API.Config> {
    constructor(config: API.Config);
    protected links: import("../../types").LinksObject;
    requestPayment: (options: API.RequestOptions) => Promise<import("../../payment-info").PaymentInfo>;
    verifyPayment: (_options: API.VerifyOptions, params: API.CallbackParams_GET | API.CallbackParams_POST) => Promise<API.Receipt>;
    protected getHeaders(): {
        'X-SANDBOX': string;
        'X-API-KEY': string;
    };
}
