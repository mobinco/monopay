import * as t from 'io-ts';
import { PaymentInfo } from './payment-info';
import { BaseReceipt, LinksObject } from './types';
export declare abstract class Driver<Config = any> {
    protected configCodec: any;
    protected config: Config;
    constructor(config: Config, configCodec: any);
    setConfig(config: Config): void;
    protected abstract links: LinksObject;
    protected linkStrategy: string;
    protected setLinkStrategy(strategy: string): void;
    protected getLinks(): {
        REQUEST: string;
        VERIFICATION: string;
        PAYMENT: string;
    };
    abstract requestPayment: (requestOptions: any) => Promise<PaymentInfo>;
    abstract verifyPayment: (verifyOptions: any, requestParams: any) => Promise<BaseReceipt>;
    protected makeRequestInfo: (referenceId: ConstructorParameters<typeof PaymentInfo>[0], method: ConstructorParameters<typeof PaymentInfo>[1], url: ConstructorParameters<typeof PaymentInfo>[2], params?: ConstructorParameters<typeof PaymentInfo>[3]) => PaymentInfo;
    protected generateUuid(): string;
    protected generateId(): number;
    protected getParsedData: <TData = any, O = TData, I = unknown>(rawData: I, codec: t.Type<TData, O, I>) => TData;
}
