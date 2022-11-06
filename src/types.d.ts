import * as t from 'io-ts';
export declare const tBaseRequestOptions: t.IntersectionC<[t.TypeC<{
    callbackUrl: t.StringC;
    amount: t.NumberC;
}>, t.PartialC<{
    description: t.StringC;
}>]>;
export declare type BaseRequestOptions = t.TypeOf<typeof tBaseRequestOptions>;
export declare const tBaseVerifyOptions: t.TypeC<{
    amount: t.NumberC;
}>;
export declare type BaseVerifyOptions = t.Type<typeof tBaseVerifyOptions>;
export interface BaseReceipt<RawReceipt = any> {
    transactionId: string | number;
    cardPan?: string;
    raw: RawReceipt;
}
export interface PaymentInfo {
    method: 'GET' | 'POST';
    url: string;
    params: Record<string, any>;
}
export declare type ErrorList = Record<string, string>;
export declare type LinksObject = Record<string, {
    REQUEST: string;
    VERIFICATION: string;
    PAYMENT: string;
}>;
