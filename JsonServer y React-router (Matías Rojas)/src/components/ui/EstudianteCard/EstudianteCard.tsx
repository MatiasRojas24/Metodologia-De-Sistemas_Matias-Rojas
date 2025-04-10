import { FC } from "react"
import { IEstudiante } from "../../../types/IEstudiante"
import styles from './EstudianteCard.module.css'

type IEstudianteCard = {
    estudiantes: IEstudiante[]
}

export const EstudianteCard: FC<IEstudianteCard> = ({ estudiantes }) => {
    return (
        <div className={styles.containerEstudiantes}>
            {
                estudiantes.map((estudiante) => (
                    <div className={styles.containerTarjeta} key={estudiante.id}>
                        <h3>Nombre del estudiante: {estudiante.nombre}</h3>
                        <p>Edad del estudiante: {estudiante.edad}</p>
                    </div >
                ))
            }
        </div>
    )
}
