import * as t from 'io-ts';
import { BaseReceipt, ErrorList, LinksObject } from '../../types';
export declare const links: LinksObject;
export interface RequestPaymentReq {
    terminalId: number;
    userName: string;
    userPassword: string;
    orderId: number;
    amount: number;
    localDate: string;
    localTime: string;
    additionalData: string;
    callBackUrl: string;
    payerId: number;
}
export declare type RequestPaymentRes = string;
export interface CallbackParams {
    RefId: string;
    ResCode: string;
    saleOrderId: number;
    SaleReferenceId: number;
    CardHolderPan: string;
}
export interface VerifyPaymentReq {
    terminalId: number;
    userName: string;
    userPassword: string;
    orderId: number;
    saleOrderId: number;
    saleReferenceId: number;
}
export declare type VerifyPaymentRes = string;
export declare const errors: ErrorList;
export declare const tConfig: t.TypeC<{
    terminalId: t.NumberC;
    username: t.StringC;
    password: t.StringC;
}>;
export declare type Config = t.TypeOf<typeof tConfig>;
export declare const tRequestOptions: t.IntersectionC<[t.PartialC<{
    payerId: t.NumberC;
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
export declare type Receipt = BaseReceipt<CallbackParams>;
