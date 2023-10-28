import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate()
    const userLogged = localStorage.getItem('token')

    useEffect(() => {
        if (!userLogged) navigate('/')
    })
    
    return (
        <>
            <h1>Home</h1>
        </>
    )
}

export default Home