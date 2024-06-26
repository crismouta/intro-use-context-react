import { useContext } from "react"
import ComponentSections from "../components/pages-sections/ComponentSections"
import { UserContext } from "../context/user/UserContext"
import { CounterContext } from "../context/counter/CounterContext";


const CommonContent = () => {
    const user = useContext(UserContext);
    const {counter} = useContext(CounterContext);
    return (
        <>
            <h3>Hola {user}, Soy el contenido Comun en sesiones</h3>
            <p>{counter}</p>
            <ComponentSections/>
        </>
    )
}

export default CommonContent