import { IHttpResponse } from "src/app/comun/interfaces/comun.interfaces";

export interface IDetalleEstudianteDetalle{
  nombre: string
  apellido: string
  email: string
  materias: IMateria[];
}

export interface IMateria {
  id: number
  nombre: string
  creditos: number
  nombreProfe: string
}
export interface IMateriaDetalle {
  id: number
  nombre: string
  creditos: number
  nombreProfe: string
  estudiantes?: IEstudiante[]
}
export interface IEstudiante{
    nombre: string,
    apellido: string,
    email: string
}


export interface IAsignarMateriaResponse extends IHttpResponse<string> {}
export interface IDetalleEstudianteDetalleResponse extends IHttpResponse<string> {}
export interface IMateriaResponse extends IHttpResponse<IMateria[]> {}
export interface IMateriaDetalleResponse extends IHttpResponse<IMateriaDetalle> {}