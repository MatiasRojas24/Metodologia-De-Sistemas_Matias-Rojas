import { Header } from "../ui/Header/Header"
import { ListTareas } from "../ui/ListTareas/ListTareas"

export const TareasScreen = () => {
    return (
        <div style={{ height: "100vh", overflow: "hidden" }}>
            <Header />
            <ListTareas />
        </div>
    )
}
