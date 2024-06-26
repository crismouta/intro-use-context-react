import { NavLink } from "react-router-dom"
import './navbar.css'

const SectionNavbar = () => {
    return (
        <>
            <nav>
                <NavLink className="navLink" to="/section1">Section 1</NavLink>
                <NavLink className="navLink" to="/section2">Section 2</NavLink>
            </nav>
        </>
    )
}

export default SectionNavbar