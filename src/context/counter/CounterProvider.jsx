import { CounterContext } from "./CounterContext"
import useCounter from "../../customHooks/useCounter"

const CounterProvider = ({children}) => {
    const {counter, increment, decrement, reset} = useCounter()
    return (
        <CounterContext.Provider value={{counter, increment, decrement, reset}}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider