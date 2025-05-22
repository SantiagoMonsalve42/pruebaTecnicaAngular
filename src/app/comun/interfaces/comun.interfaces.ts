export interface IHttpResponse<T> {
    error: string;
    data: T;
    status: boolean;
}