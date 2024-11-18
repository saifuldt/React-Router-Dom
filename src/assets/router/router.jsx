import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import About from "../page/About";
import Contact from "../page/Contact";
import Home from './../page/Home';
import SignUp from "../page/SignUp";
import Login from "../page/Login";


const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/sign-up",
            element: <SignUp />,
        },
    ]
}])


export default router