import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAsignarMateriaResponse, IDetalleEstudianteDetalleResponse, IMateriaDetalleResponse, IMateriaResponse } from '../interfaces/core.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  baseUrl = environment.api_url;

  constructor(private _http: HttpClient) { }
  asignarMateria(idMateria: number, idEstudiante: number): Observable<IAsignarMateriaResponse>{
      return this._http.post<IAsignarMateriaResponse>(`${this.baseUrl}Estudiante/AsignarMateria/${idMateria}/idEstudiante/${idEstudiante}`,{});
  }
  desasignarMateria(idMateria: number, idEstudiante: number): Observable<IAsignarMateriaResponse>{
      return this._http.delete<IAsignarMateriaResponse>(`${this.baseUrl}Estudiante/DesasignarMateria/${idMateria}/idEstudiante/${idEstudiante}`,{});
  }
  detalleEstudiante(idEstudiante: number): Observable<IDetalleEstudianteDetalleResponse>{
    return this._http.post<IDetalleEstudianteDetalleResponse>(`${this.baseUrl}Estudiante/Detalle/${idEstudiante}`,{});
  }
  obtenerMaterias(): Observable<IMateriaResponse>{
    return this._http.get<IMateriaResponse>(`${this.baseUrl}Materia/ObtenerMaterias`);
  }
  obtenerMateriaDetalle(idMateria: number): Observable<IMateriaDetalleResponse>{
    return this._http.get<IMateriaDetalleResponse>(`${this.baseUrl}Materia/ObtenerDetalleMaterias/${idMateria}`);
  }
}
