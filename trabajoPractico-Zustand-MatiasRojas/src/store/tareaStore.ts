import { create } from "zustand";
import { ITarea } from "../types/ITarea";

interface ITareaStore {
    tareas: ITarea[]
    tareaActiva: ITarea | null
    setTareaActiva: (tareaActiva: ITarea | null) => void
    setArrayTareas: (arrayDeTareas: ITarea[]) => void
    agregarNuevaTarea: (nuevaTarea: ITarea) => void
    editarUnaTarea: (tareaActualizada: ITarea) => void
    eliminarUnaTarea: (idTarea: string) => void
}
export const tareaStore = create<ITareaStore>((set) => ({
    tareas: [],
    tareaActiva: null,

    // funciones modificadoras para el array
    //  agregar array de tareas
    setArrayTareas: (arrayDeTareasIn) => set(() => ({ tareas: arrayDeTareasIn })),
    //  agregar tarea al array
    agregarNuevaTarea: (nuevaTareaIn) => set((state) => ({ tareas: [...state.tareas, nuevaTareaIn] })),
    //  editar una tarea del array
    editarUnaTarea: (tareaEditadaIn) => set((state) => {
        const arregloTarea = state.tareas.map((tarea) => tarea.id === tareaEditadaIn.id ? { ...tarea, ...tareaEditadaIn } : tarea)
        return { tareas: arregloTarea }
    }),
    //  eliminar una tarea del array
    eliminarUnaTarea: (idTareaIn) => set((state) => {
        const arregloTarea = state.tareas.filter((tarea) => tarea.id !== idTareaIn)
        return { tareas: arregloTarea }
    }),
    //  setear la tarea activa
    setTareaActiva: (tareaActivaIn) => set(() => ({ tareaActiva: tareaActivaIn }))
}))