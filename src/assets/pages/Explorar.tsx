import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Layout from "./Layout"
import { Box, Divider, Typography } from "@mui/material"

function Home(){
    const navigate = useNavigate()
    const userLogged = localStorage.getItem('token')

    useEffect(() => {
        if (!userLogged) navigate('/login')
    })
    
    return (
        <>
        <Layout>
            <Typography variant="h4" sx={{marginBottom: 2}}>Explorar</Typography>
            <Divider sx={{marginBottom:3}} />

            <Box marginLeft={3}>
                <Typography variant="subtitle2" >Esportes - Há 45 min</Typography>
                <Typography variant="body1" marginBottom={1} sx={{marginBottom: 3}} >Assunto sobre esportes</Typography>

                <Typography variant="subtitle2" >Assunto do Momento em Brasil</Typography>
                <Typography variant="body1" marginBottom={1} sx={{marginBottom: 3}} >Assunto do Momento</Typography>

                <Typography variant="subtitle2" >Música - Assunto do Momento</Typography>
                <Typography variant="body1" marginBottom={1} sx={{marginBottom: 3}}>Assunto sobre Música</Typography>

                <Typography variant="subtitle2" >Cinema - Assunto do Momento</Typography>
                <Typography variant="body1" marginBottom={1} sx={{marginBottom: 3}}>Assunto sobre Filmes e Cinema</Typography>

                <Typography variant="subtitle2" >Entretenimento - Assunto do Momento</Typography>
                <Typography variant="body1" marginBottom={1} sx={{marginBottom: 3}}>Assunto sobre Entretenimento</Typography>

                <Typography variant="subtitle2" >Assunto do momento em Porto Alegre</Typography>
                <Typography variant="body1" marginBottom={1} sx={{marginBottom: 3}}>Assunto do momento em Porto Alegre</Typography>

                <Typography variant="subtitle2" >Daphne - Assunto do Momento</Typography>
                <Typography variant="body1" marginBottom={1} sx={{marginBottom: 3}}>Assunto sobre Daphne</Typography>
            </Box>
        </Layout>
        </>
    )
}

export default Home