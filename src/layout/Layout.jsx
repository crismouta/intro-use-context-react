import { Outlet as Pages } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import './layout.css'
import Footer from "../components/footer/Footer"
import UserProvider from "../context/user/UserProvider"
import CounterProvider from "../context/counter/CounterProvider"

const Layout = () => {
    return (
        <>
            <UserProvider>
                <CounterProvider>
                    <Navbar />
                    <main>
                        <Pages />
                    </main>
                    <Footer />
                </CounterProvider>
            </UserProvider>
        </>
    )
}

export default Layout