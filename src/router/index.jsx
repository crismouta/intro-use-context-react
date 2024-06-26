import { /* Navigate, */ createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "../layout/Layout";
import Section1 from "../pages-sections/Section1";
import Section2 from "../pages-sections/Section2";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    /* {
                        index: true,
                        element: <Navigate to="/section1" replace />
                    }, */
                    {
                        index: true,
                        path: "/section1",
                        element: <Section1 />
                    },
                    {
                        path: "/section2",
                        element: <Section2 />
                    },
                ]
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
])

