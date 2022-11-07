export declare class PaymentInfo {
    readonly referenceId: string | number;
    readonly method: 'GET' | 'POST';
    readonly url: string;
    readonly params: Record<string, any>;
    constructor(referenceId: string | number, method: 'GET' | 'POST', url: string, params?: Record<string, any>);
    getScript(): string;
}
