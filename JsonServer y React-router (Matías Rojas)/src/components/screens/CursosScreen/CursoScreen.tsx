import { useEffect, useState } from "react"
import { ICurso } from "../../../types/ICurso"
import { getCurso } from "../../../http/api"
import { CursoCard } from "../../ui/CursoCard/CursoCard"


export const CursoScreen = () => {
    const [cursos, setCursos] = useState<ICurso[]>([])
    const handleGetCursos = async () => {
        const res = await getCurso()
        setCursos(res)
    }
    useEffect(() => {
        handleGetCursos()
    }, [])
    return (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2>Lista de cursos</h2>
            {cursos.length > 0 ? <CursoCard cursos={cursos} /> : <h3>No hay cursos</h3>}
        </div>
    )
}
