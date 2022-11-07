import * as t from 'io-ts';
import { BaseReceipt, ErrorList, LinksObject } from '../../types';
export declare const links: LinksObject;
export interface RequestPaymentReq {
    merchant_id: string;
    amount: number;
    description?: string;
    callback_url: string;
    metadata: {
        mobile?: string;
        email?: string;
    };
}
export interface RequestPaymentRes {
    data: {
        code: 100;
        message: string;
        authority: string;
        fee_type: 'Merchant';
        fee: number;
    } | any[];
    errors: {
        code: number;
        message: string;
        validations: Record<string, string> | any[];
    } | any[];
}
export declare const requestErrors: Record<string, string>;
export interface CallbackParams {
    Authority: string | number;
    Status: 'OK' | 'NOK';
}
export interface VerifyPaymentReq {
    merchant_id: string;
    amount: number;
    authority: string;
}
export interface VerifyPaymentRes {
    data: {
        code: number;
        message: string;
        ref_id: number;
        card_pan: string;
        card_hash: string;
        fee_type: string;
        fee: number;
    } | any[];
    errors: {
        code: number;
        message: string;
        validations: Record<string, string> | any[];
    } | any[];
}
export declare const verifyErrors: ErrorList;
export declare const tConfig: t.IntersectionC<[t.PartialC<{
    sandbox: t.BooleanC;
}>, t.TypeC<{
    merchantId: t.StringC;
}>]>;
export declare type Config = t.TypeOf<typeof tConfig>;
export declare const tRequestOptions: t.IntersectionC<[t.PartialC<{
    mobile: t.StringC;
    email: t.StringC;
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
export declare type Receipt = BaseReceipt<Exclude<VerifyPaymentRes['data'], any[]>>;
