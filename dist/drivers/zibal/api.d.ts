import * as t from 'io-ts';
import { BaseReceipt, ErrorList, LinksObject } from '../../types';
export declare const links: LinksObject;
export declare const tMultiplexingObject: t.TypeC<{
    bankAccount: t.StringC;
    subMerchantId: t.StringC;
    walletID: t.StringC;
    amount: t.NumberC;
    wagePayer: t.BooleanC;
}>;
export declare type MultiplexingObject = t.TypeOf<typeof tMultiplexingObject>;
export interface RequestPaymentReq {
    merchant: string;
    amount: number;
    callbackUrl: string;
    description?: string;
    orderId?: string;
    mobile?: string;
    allowedCards?: string[];
    linkToPay?: boolean;
    sms?: boolean;
    percentMode?: 0 | 1;
    feeMode?: 0 | 1 | 2;
    multiplexingInfos?: MultiplexingObject[];
}
export interface RequestPaymentRes {
    trackId: number;
    result: number;
    payLink?: string;
    message: string;
}
export declare const purchaseErrors: ErrorList;
export interface CallbackParams {
    success: '0' | '1';
    trackId: string;
    orderId?: string;
    status: '-1' | '-2' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
}
export declare const callbackErrors: ErrorList;
export interface VerifyPaymentReq {
    merchant: string;
    trackId: number;
}
export interface VerifyPaymentRes {
    paidAt: string;
    cardNumber: string;
    status: number;
    amount: number;
    refNumber: number;
    description: string;
    orderId: string;
    result: number;
    message: string;
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
    orderId: t.StringC;
    allowedCards: t.ArrayC<t.StringC>;
    linkToPay: t.BooleanC;
    sms: t.BooleanC;
    percentMode: t.UnionC<[t.LiteralC<0>, t.LiteralC<1>]>;
    feeMode: t.UnionC<[t.LiteralC<0>, t.LiteralC<1>, t.LiteralC<2>]>;
    multiplexingInfos: t.ArrayC<t.TypeC<{
        bankAccount: t.StringC;
        subMerchantId: t.StringC;
        walletID: t.StringC;
        amount: t.NumberC;
        wagePayer: t.BooleanC;
    }>>;
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
