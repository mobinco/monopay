import * as t from 'io-ts';
import { BaseReceipt, ErrorList, LinksObject } from '../../types';
export declare const links: LinksObject;
export interface RequestPaymentReq {
    order_id: string;
    amount: number;
    name?: string;
    phone?: string;
    mail?: string;
    desc?: string;
    callback: string;
}
export interface RequestPaymenRes_Successful {
    id: string;
    link: string;
}
export interface RequestPaymentRes_Failed {
    error_code: number;
    error_message: string;
}
export declare type RequestPaymentRes = RequestPaymenRes_Successful | RequestPaymentRes_Failed;
export interface CallbackParams_POST {
    status: number;
    track_id: number;
    id: string;
    order_id: string;
    amount: number;
    card_no: string;
    hashed_card_no: string;
    date: string;
}
export interface CallbackParams_GET {
    status: string;
    track_id: string;
    id: string;
    order_id: string;
}
export declare const callbackErrors: ErrorList;
export interface VerifyPaymentReq {
    id: string;
    order_id: string;
}
export interface VerifyPaymentRes_Successful {
    status: number;
    track_id: number;
    id: string;
    order_id: string;
    amount: number;
    date: string;
    payment: {
        track_id: string;
        amount: number;
        card_no: string;
        hashed_card_no: string;
        date: string;
    };
    verify: {
        date: string;
    };
}
export interface VerifyPaymentRes_Failed {
    error_code: number;
    error_message: string;
}
export declare type VerifyPaymentRes = VerifyPaymentRes_Successful | VerifyPaymentRes_Failed;
export declare const errors: ErrorList;
export declare const tConfig: t.IntersectionC<[t.PartialC<{
    sandbox: t.BooleanC;
}>, t.TypeC<{
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
export declare type Receipt = BaseReceipt<Exclude<VerifyPaymentRes, any[]>>;
