import * as t from 'io-ts';
import { BaseReceipt, LinksObject } from '../../types';
export declare const links: LinksObject;
export interface RequestPaymentReq {
    api_key: string;
    amount: number;
    callback_url: string;
    mobile_number?: string;
    factorNumber?: string;
    description?: string;
    valid_card_number?: string;
    comment?: string;
}
export interface RequestPaymentRes {
    status: 1 | 0;
    token?: string;
    errors?: string[];
}
export interface CallbackParams {
    token: string;
    payment_status: 'OK' | string;
}
export interface VerifyPaymentReq {
    api_key: string;
    token: string;
}
export interface VerifyPaymentRes {
    status: number;
    amount?: string;
    realAmount?: number;
    wage?: string;
    transId?: number;
    factorNumber?: string;
    mobile?: string;
    description?: string;
    cardNumber?: string;
    paymentDate?: string;
    cid?: null | string;
    message?: string;
    errors?: string[];
}
export declare const tConfig: t.IntersectionC<[t.PartialC<{}>, t.TypeC<{
    api_key: t.StringC;
}>]>;
export declare type Config = t.TypeOf<typeof tConfig>;
export declare const tRequestOptions: t.IntersectionC<[t.PartialC<{
    mobile_number: t.StringC;
    factorNumber: t.StringC;
    description: t.StringC;
    valid_card_number: t.StringC;
    comment: t.StringC;
}>, t.IntersectionC<[t.TypeC<{
    callbackUrl: t.StringC;
    amount: t.NumberC;
}>, t.PartialC<{
    description: t.StringC;
}>]>]>;
export declare type RequestOptions = t.TypeOf<typeof tRequestOptions>;
export declare const tVerifyOptions: t.IntersectionC<[t.PartialC<{
    status: t.NumberC;
    realAmount: t.NumberC;
    wage: t.StringC;
    transId: t.NumberC;
    factorNumber: t.StringC;
    mobile: t.StringC;
    description: t.StringC;
    cardNumber: t.StringC;
    paymentDate: t.StringC;
    cid: t.StringC;
    message: t.StringC;
    errors: t.ArrayC<t.StringC>;
}>, t.TypeC<{
    amount: t.NumberC;
}>]>;
export declare type VerifyOptions = t.TypeOf<typeof tVerifyOptions>;
export declare type Receipt = BaseReceipt<CallbackParams>;
