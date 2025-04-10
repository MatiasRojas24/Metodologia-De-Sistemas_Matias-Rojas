import { IEstudiante } from "./IEstudiante";

export interface ICurso {
    id: number,
    nombre: string,
    estudiantes: IEstudiante[]
}