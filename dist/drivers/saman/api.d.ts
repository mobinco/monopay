import * as t from 'io-ts';
import { BaseReceipt, ErrorList, LinksObject } from '../../types';
export declare const links: LinksObject;
export interface RequestPaymentReq {
    Amount: number;
    TerminalId: string;
    RedirectURL: string;
    Action?: 'token';
    Wage?: number;
    AffectiveAmount?: number;
    ResNum?: string;
    CellNumber?: string;
}
export interface RequestPaymentRes {
    status: 1 | -1;
    errorCode?: number;
    errorDesc?: string;
    token?: string;
}
export interface CallbackParams {
    MID: string;
    State: string;
    Status: string;
    RRN: string;
    RefNum: string;
    ResNum: string;
    TerminalId: string;
    TraceNo: string;
    Amount: string;
    Wage?: string;
    SecurePan: string;
}
export declare const purchaseErrors: ErrorList;
export declare const callbackErrors: ErrorList;
export declare type VerifyPaymentRes = number;
export declare const tConfig: t.TypeC<{
    merchantId: t.StringC;
}>;
export declare type Config = t.TypeOf<typeof tConfig>;
export declare const tRequestOptions: t.IntersectionC<[t.PartialC<{
    mobile: t.StringC;
    wage: t.NumberC;
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
