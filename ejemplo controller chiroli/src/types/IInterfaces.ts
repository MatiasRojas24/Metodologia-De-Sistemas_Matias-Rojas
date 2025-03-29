// Interfaz que representa una lista de proyectos
export interface IProyectoList {
  proyectos: IProyecto[]; // Un array que contiene múltiples proyectos
}

// Interfaz que representa un proyecto individual
export interface IProyecto {
  id: string; // Identificador único del proyecto
  nombre: string; // Nombre del proyecto
  descripcion: string; // Descripción del proyecto
  fechaInicio: string; // Fecha de inicio del proyecto en formato "YYYY-MM-DD"
  fechaFin: string; // Fecha de finalización del proyecto en formato "YYYY-MM-DD"
  miembros: IMiembro[]; // Lista de miembros involucrados en el proyecto
}

// Interfaz que representa a un miembro dentro de un proyecto
export interface IMiembro {
  id: string; // Identificador único del miembro
  nombre: string; // Nombre del miembro
  rol: string; // Rol que desempeña dentro del proyecto (ej: Desarrollador, Diseñador, etc.)
}
