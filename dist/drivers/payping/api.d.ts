import * as t from 'io-ts';
import { BaseReceipt, LinksObject } from '../../types';
export declare const links: LinksObject;
export interface RequestPaymentReq {
    amount: number;
    payerIdentity?: string;
    payerName?: string;
    description?: string;
    returnUrl: string;
    clientRefId?: string;
}
export interface RequestPaymentRes {
    code: string;
}
export interface CallbackParams {
    code: string;
    refid: string;
    clientrefid: string;
    cardnumber: string;
    cardhashpan: string;
}
export interface VerifyPaymentReq {
    refId: string;
    amount: number;
}
export interface VerifyPaymentRes {
    amount: number;
    cardNumber: string;
    cardHashPan: string;
}
export declare const tConfig: t.IntersectionC<[t.PartialC<{}>, t.TypeC<{
    apiKey: t.StringC;
}>]>;
export declare type Config = t.TypeOf<typeof tConfig>;
export declare const tRequestOptions: t.IntersectionC<[t.PartialC<{
    mobile: t.StringC;
    email: t.StringC;
    name: t.StringC;
}>, t.IntersectionC<[t.TypeC<{
    callbackUrl: t.StringC;
    amount: t.NumberC;
}>, t.PartialC<{
    description: t.StringC;
}>]>]>;
export declare type RequestOptions = t.TypeOf<typeof tRequestOptions>;
export declare const tVerifyOptions: t.IntersectionC<[t.TypeC<{}>, t.TypeC<{
    amount: t.NumberC;
}>]>;
export declare type VerifyOptions = t.TypeOf<typeof tVerifyOptions>;
export declare type Receipt = BaseReceipt<VerifyPaymentRes>;
