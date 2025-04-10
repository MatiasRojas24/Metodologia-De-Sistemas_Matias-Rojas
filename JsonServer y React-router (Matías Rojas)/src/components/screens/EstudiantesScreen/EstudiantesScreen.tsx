import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getCurso } from '../../../http/api';
import { ICurso } from '../../../types/ICurso';
import { IEstudiante } from '../../../types/IEstudiante';
import { EstudianteCard } from '../../ui/EstudianteCard/EstudianteCard';

export const EstudiantesScreen = () => {
    const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([])
    const [curso, setCurso] = useState<ICurso>()
    const [searchParams] = useSearchParams();
    const cursoId = Number(searchParams.get("curso"))

    const handleGetEstudiantes = async () => {
        const cursos: ICurso[] = await getCurso();
        const cursoEncontrado = cursos.find((curso) => curso.id == cursoId);
        setCurso(cursoEncontrado);
        setEstudiantes(cursoEncontrado!.estudiantes);
    }
    useEffect(() => {
        handleGetEstudiantes()
    }, [])
    return (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2> Estudiantes del curso: {curso?.nombre}</h2>
            {estudiantes.length > 0 ? (
                <EstudianteCard estudiantes={estudiantes} />
            ) : (
                <h3>No hay estudiantes en este curso.</h3>
            )}
        </div>
    )
}
