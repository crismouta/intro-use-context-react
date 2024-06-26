import { useContext } from "react";
import { CounterContext } from "../context/counter/CounterContext";

const About = () => {
    const {decrement} = useContext(CounterContext)
    return (
        <>
            <h1>About page</h1>
            <button onClick={decrement}>Decrementar</button>
        </>
    )
}

export default About;