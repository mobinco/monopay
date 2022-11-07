import * as t from 'io-ts';
import { BaseReceipt, ErrorList, LinksObject } from '../../types';
export declare const links: LinksObject;
export interface RequestPaymentReq {
    api: string;
    amount: number;
    redirect: string;
    mobile?: string;
    factorNumber?: string;
    description?: string;
    validCardNumber?: string;
    nationalCode?: string;
}
export interface RequestPaymentRes_Success {
    status: number;
    token: string;
}
export interface RequestPaymentRes_Failed {
    status: number;
    errorCode: string;
    errorMessage: string;
}
export declare type RequestPaymentRes = RequestPaymentRes_Success | RequestPaymentRes_Failed;
export interface CallbackParams {
    status: string | number;
    token: string;
}
export interface VerifyPaymentReq {
    api: string;
    token: string;
}
export interface VerifyPaymentRes_Success {
    status: number;
    amount: string;
    transId: string;
    factorNumber: string;
    mobile: string;
    description: string;
    cardNumber: string;
    message: string;
}
export interface VerifyPaymentRes_Failed {
    status: number;
    errorCode: string;
    errorMessage: string;
}
export declare type VerifyPaymentRes = VerifyPaymentRes_Success | VerifyPaymentRes_Failed;
export declare const errors: ErrorList;
export declare const tConfig: t.IntersectionC<[t.PartialC<{
    sandbox: t.BooleanC;
}>, t.TypeC<{
    apiKey: t.StringC;
}>]>;
export declare type Config = t.TypeOf<typeof tConfig>;
export declare const tRequestOptions: t.IntersectionC<[t.PartialC<{
    mobile: t.StringC;
    nationalCode: t.StringC;
    validCardNumber: t.StringC;
}>, t.IntersectionC<[t.TypeC<{
    callbackUrl: t.StringC;
    amount: t.NumberC;
}>, t.PartialC<{
    description: t.StringC;
}>]>]>;
export declare type RequestOptions = t.TypeOf<typeof tRequestOptions>;
export declare const tVerifyOptions: t.IntersectionC<[t.PartialC<{}>, t.TypeC<{
    amount: t.NumberC;
}>]>;
export declare type VerifyOptions = t.TypeOf<typeof tVerifyOptions>;
export declare type Receipt = BaseReceipt<VerifyPaymentRes>;
