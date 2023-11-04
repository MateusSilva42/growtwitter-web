import { Button, TextField, Typography, Box, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import LoginCard from "../components/LoginCard"
import LoginContainer from "../components/LoginContainer"
import React, { useEffect, useState } from "react"
import apiBase from "../../../axiosConfig.ts"
import { useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userLogged = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(()=> {
        if (userLogged) navigate('/')
    })

    const handleLogin = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            event.preventDefault()

            const data = {
                email: email,
                password: password
            }

            const logged = await apiBase.post('/users/login', data)

            console.log(`Seja bem vindo ${email}`);
            console.log(logged.data);

            localStorage.setItem('token', logged.data.token)
            localStorage.setItem('user', JSON.stringify(logged.data.user))
            navigate('/')
            
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <Box component="main" height="100vh" display="flex" alignItems="center" justifyContent="center">
                <LoginContainer>

                    <Grid container component="section" display="flex" alignItems="center" justifyContent="center" padding="0"  >
                        <Grid item xs={6} color={"white"} padding="0">
                            <LoginCard>
                                <Typography variant="h4" margin="0px 5px" padding="10px" >
                                    Growtwitter
                                </Typography>
                                <Typography variant="subtitle2" margin="0px 5px" padding="10px">
                                    Trabalho final do bloco intermediário
                                </Typography>
                                <Typography variant="body1" margin="0px 5px" padding="10px">
                                    O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único. Seja parte desta comunidade que valoriza a liberdade de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.
                                </Typography>
                            </LoginCard>
                        </Grid>
                        <Grid item xs={6} component="div">
                            <LoginCard backgroundColor="#fff">
                                <Typography variant="h5" component="h1" align="center" color='#1d9bf0'>
                                    Entrar no Growtwitter
                                </Typography>
                                <form>

                                    <TextField
                                        id="login-email"
                                        label="E-mail"
                                        variant="outlined"
                                        type="e-mail"
                                        fullWidth
                                        margin="dense"
                                        onChange={(e) => setEmail(e.target.value)} />

                                    <TextField
                                        id="login-senha"
                                        label="Senha"
                                        variant="outlined"
                                        type="password"
                                        fullWidth
                                        margin="dense"
                                        onChange={(e) => setPassword(e.target.value)} />

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        fullWidth
                                        sx={{ marginY: '6px' }}
                                        size="large"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            handleLogin(event)
                                        }}>
                                        Entrar
                                    </Button>
                                </form>

                                <Typography align="center">
                                    Não possui conta?
                                    <Link to='/cadastro'> Cadastre-se</Link>
                                </Typography>
                            </LoginCard>
                        </Grid>
                    </Grid>
                </LoginContainer>

            </Box>
        </>
    )
}

export default Login