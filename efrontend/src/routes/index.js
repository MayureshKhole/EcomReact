import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Login from "../pages/Login"
import Logo from "../components/Logo"
import Home from "../pages/Home"
import Forgotpass from "../pages/Forgotpass"
import SignUp from "../pages/SignUp"

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <Forgotpass/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
        ]
    }
])

export default router