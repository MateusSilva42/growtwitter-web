import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Layout from "./Layout"

function Home(){
    const navigate = useNavigate()
    const userLogged = localStorage.getItem('token')

    useEffect(() => {
        if (!userLogged) navigate('/login')
    })
    
    return (
        <>
        <Layout>
            <div>
                <h1>Explorar</h1>
            </div>
        </Layout>
        </>
    )
}

export default Home