import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react"
import { tareaStore } from "../../../store/tareaStore"
import styles from "./Modal.module.css"
import { ITarea } from "../../../types/ITarea"
import { useTareas } from "../../../hooks/useTareas"

type IModal = {
    handleCloseModal: VoidFunction
}
const initialState: ITarea = {
    titulo: "",
    descripcion: "",
    fechaLimite: ""
}

export const Modal: FC<IModal> = ({ handleCloseModal }) => {
    const tareaActiva = tareaStore((state) => state.tareaActiva)
    const setTareaActiva = tareaStore((state) => state.setTareaActiva)
    const { crearTarea, putTareaEditar } = useTareas()
    const [formValues, setFormValues] = useState<ITarea>(initialState)
    useEffect(() => {
        if (tareaActiva) setFormValues(tareaActiva)
    }, [])
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormValues((prev) => ({ ...prev, [`${name}`]: value }))
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (tareaActiva) {
            putTareaEditar(formValues)
        } else {
            crearTarea({ ...formValues, id: new Date().toDateString() })
        }
        handleCloseModal()
        setTareaActiva(null)
    }
    const handleCancelSubmit = () => {
        handleCloseModal()
        setTareaActiva(null)
    }
    return (
        <div className={styles.containerPrincipalModal}>
            <div className={styles.contentPopUP}>
                <div>
                    <h3 style={{ fontSize: "24px" }}>{tareaActiva ? "Editar Tarea" : "Crear Tarea"}</h3>
                </div>
                <form onSubmit={handleSubmit} className={styles.formContent}>
                    <div>
                        <input value={formValues.titulo} onChange={handleChange} placeholder="Ingrese un título" type="text" required autoComplete="off" name="titulo" />
                        <textarea value={formValues.descripcion} onChange={handleChange} placeholder="Ingrese la descripción" required name="descripcion" />
                        <input value={formValues.fechaLimite} onChange={handleChange} type="date" required autoComplete="off" name="fechaLimite" />
                    </div>
                    <div className={styles.buttonCard}>
                        <button className={styles.botonCancelar} onClick={handleCancelSubmit}>Cancelar</button>
                        <button className={styles.botonSubmit} type="submit">{tareaActiva ? "Editar tarea" : "Crear tarea"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
