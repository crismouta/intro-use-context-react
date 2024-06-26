import { NavLink } from "react-router-dom"
import './navbar.css'
import { useContext } from "react"
import { CounterContext } from "../../context/counter/CounterContext"

const Navbar = () => {
    const {counter} = useContext(CounterContext)
    return (
        <>
            <nav className="navbar">
                <NavLink className="navLink" to="/">Home</NavLink>
                <NavLink className="navLink" to="/about">About</NavLink>
                <NavLink className="navLink" to="/contact">Contact</NavLink>
                <span>{counter}</span>
            </nav>
            {/* <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav> */}
        </>
    )
}

export default Navbar