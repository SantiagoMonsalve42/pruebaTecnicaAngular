import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILoginRequest, ILoginResponse, ISignupRequest, ISignupResponse } from '../interfaces/session.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl: string = environment.api_url;
  constructor(private _http: HttpClient) { }
  login(request: ILoginRequest): Observable<ILoginResponse>{
    return this._http.post<ILoginResponse>(`${this.baseUrl}Sesion/Login`,request);
  }
  registro(request: ISignupRequest): Observable<ISignupResponse>{
    return this._http.post<ISignupResponse>(`${this.baseUrl}Sesion/Registro`,request);
  }
  setToken(token :string): void{
    sessionStorage.setItem("token",token);
  }
  static getToken(): string | null{
    return sessionStorage.getItem("token");
  }
  setIdEstudiante(token :number): void{
    sessionStorage.setItem("idEstudiante",token.toString());
  }
  static getIdEstudiante(): number | null{
    return Number.parseInt(sessionStorage.getItem("idEstudiante")??"0");
  }
}
