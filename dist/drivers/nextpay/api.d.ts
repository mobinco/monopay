import * as t from 'io-ts';
import { BaseReceipt, ErrorList, LinksObject } from '../../types';
export declare const links: LinksObject;
export interface RequestPaymentReq {
    api_key: string;
    order_id: string;
    amount: number;
    callback_uri: string;
    currency?: 'IRT' | 'IRR';
    customer_phone?: number;
    custom_json_fields?: Record<string, string>;
    auto_verify?: string;
    allowed_card?: string;
}
export interface RequestPaymentRes {
    code: number;
    trans_id: string;
}
export interface CallbackParams {
    trans_id: string;
    order_id: string;
    amount: number | string;
}
export interface VerifyPaymentReq {
    api_key: string;
    trans_id: string;
    amount: number;
}
export interface VerifyPaymentRes {
    code: string | number;
    amount: number;
    order_id: string;
    card_holder: string;
    customer_phone?: number;
    Shaparak_Ref_Id: string;
    custom: Record<string, string>;
}
export interface RefundPaymentReq extends VerifyPaymentReq {
    refund_request: 'yes_money_back';
}
export declare type RefundPaymentRes = Omit<VerifyPaymentRes, 'Shaparak_Ref_Id'>;
export declare const errors: ErrorList;
export declare const tConfig: t.IntersectionC<[t.PartialC<{}>, t.TypeC<{
    apiKey: t.StringC;
}>]>;
export declare type Config = t.TypeOf<typeof tConfig>;
export declare const tRequestOptions: t.IntersectionC<[t.PartialC<{
    mobile: t.StringC;
    customFields: t.RecordC<t.StringC, t.StringC>;
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
