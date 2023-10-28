import { Button, TextField, Typography, Box } from "@mui/material"
import { Link } from "react-router-dom"

function Cadastro(){
    return (
        <>
        <Box component="main" height="100vh" display="flex" alignItems="center" justifyContent="center">
            <Box component="section">
                <Typography variant="h3" component="h1" align="center">
                    Cadastro
                </Typography>
                <form>
                <TextField id="Cadastro-email" label="E-mail" variant="outlined" type="email" fullWidth margin="dense" />
                <TextField id="Cadastro-senha" label="Senha" variant="outlined" type="password" fullWidth margin="dense" />
                <Button variant="contained" color="secondary" type="submit" fullWidth sx={ {marginY: '6px'}} size="large">Criar Conta</Button>
                </form>

                <Typography align="center"> 
                    Já possui conta? 
                   <Link to='/'> Faça Login</Link>
                </Typography>
            </Box>
        </Box>
        </>
    )
}

export default Cadastro