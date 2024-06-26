import { useContext } from "react";
import { CounterContext } from "../context/counter/CounterContext";

const Contact = () => {
    const {reset} = useContext(CounterContext)
    return (
        <>
            <h1>Contact page</h1>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default Contact;