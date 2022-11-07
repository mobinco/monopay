import * as t from 'io-ts';
import { BaseReceipt, LinksObject } from '../../types';
export declare const links: LinksObject;
export interface RequestPaymentReq {
    LoginAccount: string;
    Amount: number;
    OrderId: number;
    CallBackUrl: string;
    AdditionalData: string;
}
export interface RequestPaymentRes {
    Token?: number | string;
    Status: number;
}
export interface CallbackParams {
    Token: number | string;
    status: number | string;
    OrderId: number | string;
    TerminalNo: number | string;
    RRN: number | string;
    HashCardNumber: string;
    Amount: number;
}
export interface VerifyPaymentReq {
    LoginAccount: string;
    Token: number | string;
}
export interface VerifyPaymentRes {
    Status: number | string;
    RRN: number;
    CardNumberMasked: string;
    Token: number | string;
}
export declare type ReversalPaymentReq = VerifyPaymentReq;
export interface ReversalPaymentRes {
    Status: string;
    Token: number | string;
}
export declare const tConfig: t.TypeC<{
    merchantId: t.StringC;
}>;
export declare type Config = t.TypeOf<typeof tConfig>;
export declare const tRequestOptions: t.IntersectionC<[t.PartialC<{}>, t.IntersectionC<[t.TypeC<{
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
