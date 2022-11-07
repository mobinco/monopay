import * as t from 'io-ts';
import { BaseReceipt, ErrorList, LinksObject } from '../../types';
export declare const links: LinksObject;
export interface RequestPaymentReq {
    MerchantId: string;
    TerminalId: string;
    Amount: number;
    OrderId: number;
    LocalDateTime: string;
    ReturnUrl: string;
    SignData: string;
    AdditionalData?: string;
    MultiplexingData?: MultiplexingObject;
    UserId?: number;
    ApplicationName?: string;
}
export interface RequestPaymentRes {
    ResCode: number;
    Token: string;
    Description: string;
}
export declare const tMultiplexingRow: t.TypeC<{
    IbanNumber: t.NumberC;
    Value: t.NumberC;
}>;
export declare type MultiplexingRow = t.TypeOf<typeof tMultiplexingRow>;
export declare const tMultiplexingObject: t.TypeC<{
    Type: t.UnionC<[t.LiteralC<"Percentage">, t.LiteralC<"Amount">]>;
    MultiplexingRows: t.ArrayC<t.TypeC<{
        IbanNumber: t.NumberC;
        Value: t.NumberC;
    }>>;
}>;
export declare type MultiplexingObject = t.TypeOf<typeof tMultiplexingObject>;
export interface CallbackParams {
    OrderId: number | string;
    HashedCardNo: string;
    PrimaryAccNo: string;
    SwitchResCode: string | number;
    ResCode: 0 | -1;
    Token: string;
}
export interface VerifyPaymentReq {
    Token: string;
    SignData: string;
}
export interface VerifyPaymentRes {
    ResCode: 0 | -1;
    Amount: number;
    Description: string;
    RetrivalRefNo: string;
    SystemTraceNo: string;
    OrderId: number;
}
export declare const requestErrors: ErrorList;
export declare const verifyErrors: ErrorList;
export declare const tConfig: t.TypeC<{
    merchantId: t.StringC;
    terminalId: t.StringC;
    terminalKey: t.StringC;
}>;
export declare type Config = t.TypeOf<typeof tConfig>;
export declare const tRequestOptions: t.IntersectionC<[t.IntersectionC<[t.TypeC<{
    callbackUrl: t.StringC;
    amount: t.NumberC;
}>, t.PartialC<{
    description: t.StringC;
}>]>, t.PartialC<{
    mobile: t.StringC;
    multiplexingData: t.TypeC<{
        Type: t.UnionC<[t.LiteralC<"Percentage">, t.LiteralC<"Amount">]>;
        MultiplexingRows: t.ArrayC<t.TypeC<{
            IbanNumber: t.NumberC;
            Value: t.NumberC;
        }>>;
    }>;
    appName: t.StringC;
}>]>;
export declare type RequestOptions = t.TypeOf<typeof tRequestOptions>;
export declare const tVerifyOptions: t.IntersectionC<[t.TypeC<{}>, t.TypeC<{
    amount: t.NumberC;
}>]>;
export declare type VerifyOptions = t.TypeOf<typeof tVerifyOptions>;
export declare type Receipt = BaseReceipt<CallbackParams>;
