import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { CursoScreen } from "./components/screens/CursosScreen/CursoScreen"
import { EstudiantesScreen } from "./components/screens/EstudiantesScreen/EstudiantesScreen"

export const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/cursos" />} />
          <Route path="/cursos" element={<CursoScreen />} />
          <Route path="/estudiantes" element={<EstudiantesScreen />} />
        </Routes>
      </Router>
    </div>
  )
}

