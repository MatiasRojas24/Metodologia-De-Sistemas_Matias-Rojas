import { FC } from 'react'
import styles from './CursoCard.module.css'
import { ICurso } from '../../../types/ICurso'
import { useNavigate } from 'react-router-dom'

type ICursoCard = {
    cursos: ICurso[]
}
export const CursoCard: FC<ICursoCard> = ({ cursos }) => {
    const navigate = useNavigate()
    const handleNavigate = (curso: ICurso) => {
        navigate(`/estudiantes?curso=${curso.id}`)
    }
    return (
        <div className={styles.containerCursos}>
            {cursos.map((curso) => (
                <div key={curso.id} className={styles.containerTarjeta} onClick={() => { handleNavigate(curso) }}>
                    <h3>{curso.nombre}</h3>
                </div>
            ))}
        </div>
    )
}
