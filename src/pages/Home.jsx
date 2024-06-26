import { Outlet as Sections } from "react-router-dom";
import SectionNavbar from "../components/navbar/SectionNavbar";
import CommonContent from "../pages-sections/CommonContent";
import { useContext } from "react";
import { CounterContext } from "../context/counter/CounterContext";


const Home = () => {
    const { increment } = useContext(CounterContext)
    return (
        <>
            <h1>Soy la Home page</h1>
            <button onClick={increment}>Incrementar</button>
            <article>

                <SectionNavbar />
                <CommonContent />
                <Sections />

            </article>
        </>
    )
}

export default Home;