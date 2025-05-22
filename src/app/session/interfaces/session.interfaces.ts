import { IHttpResponse } from "src/app/comun/interfaces/comun.interfaces";

export interface ILoginRequest {
    username: string;
    password: string;

}
export interface ISignupRequest {
    nombre: string;
    apellido: string;
    email: string;
    contraseña: string;
}
export interface ILogin{
    token: string;
    idEstudiante: number;
}
export interface ILoginResponse extends IHttpResponse<ILogin> {}
export interface ISignupResponse extends IHttpResponse<string> {}