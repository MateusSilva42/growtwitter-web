import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Explorar from "../pages/Explorar";
import MeuPerfil from "../pages/MeuPerfil";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/cadastro",
        element: <Cadastro />,
    },
    {
        path: '/explorar',
        element: <Explorar />,
    },
    {
        path: '/perfil',
        element: <MeuPerfil />,
    },
    {
        path: '*',
        element: <h1>ERROR 404</h1>,
    },
    
])

function RoutesApp() {
    return (
        <RouterProvider router={router} />
    )
}

export default RoutesApp