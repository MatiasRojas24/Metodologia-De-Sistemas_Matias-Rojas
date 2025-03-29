import {
  createProyectoController,
  deleteProyectoController,
  getProyectosController,
  updateProyectoController,
} from "./data/proyectoController";

const App = () => {
  // Función para obtener todos los proyectos y mostrarlos en la consola
  const getAllProyects = async () => {
    const respuesta = await getProyectosController();
    console.log(respuesta);
  };

  // Función para crear un nuevo proyecto con datos de ejemplo
  const createNewProject = async () => {
    try {
      await createProyectoController({
        id: "2",
        nombre: "Proyecto Nuevo",
        descripcion: "Este es un proyecto de ejemplo para el curso.",
        fechaInicio: "2025-01-01",
        fechaFin: "2025-06-30",
        miembros: [],
      });
    } catch (error) {
      console.error("Error al crear el proyecto", error);
    }
  };

  // Función para actualizar un proyecto existente con un nuevo nombre y miembro
  const updatedProject = async () => {
    try {
      await updateProyectoController({
        id: "2",
        nombre: "Proyecto Nuevo editado",
        descripcion: "Este es un proyecto de ejemplo para el curso.",
        fechaInicio: "2025-01-01",
        fechaFin: "2025-06-30",
        miembros: [
          {
            id: "2",
            nombre: "Ana Gómez",
            rol: "Diseñadora",
          },
        ],
      });
    } catch (error) {
      console.error("Error al actualizar el proyecto", error);
    }
  };

  // Función para eliminar un proyecto por su ID
  const deleteProject = async () => {
    try {
      await deleteProyectoController("2");
    } catch (error) {
      console.error("Error al eliminar el proyecto", error);
    }
  };

  return (
    <div>
      {/* Título */}
      <div>
        <h2>Proyectos</h2>
      </div>

      {/* Botón para obtener todos los proyectos */}
      <button onClick={getAllProyects}>Traer proyectos</button>

      {/* Botón para crear un nuevo proyecto */}
      <button onClick={createNewProject}>Crear un proyecto nuevo</button>

      {/* Botón para actualizar un proyecto existente */}
      <button onClick={updatedProject}>Actualizar un proyecto</button>

      {/* Botón para eliminar un proyecto */}
      <button onClick={deleteProject}>Eliminar un proyecto</button>
    </div>
  );
};

export default App;
