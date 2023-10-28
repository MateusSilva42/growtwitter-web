import { Grid, Typography, Divider, MenuList, MenuItem, ListItemText, ListItemIcon, Button, Box } from "@mui/material"
// import IconExploreSelected from "../../assets/imgs/icone_explorar_selecionado.svg"
import IconExplore from "../../assets/imgs/icone_explorar.svg"
// import IconHomeSelected from "../../assets/imgs/icone_pagina_inicial_selecionado.svg"
import IconHome from "../../assets/imgs/icone_pagina_inicial.svg"
// import IconProfileSelected from "../../assets/imgs/icone_perfil_selecionado.svg"
import IconProfile from "../../assets/imgs/icone_perfil.svg"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Layout() {
    const navigate = useNavigate()
    const userLogged = localStorage.getItem('token')

    useEffect(() => {
        if (!userLogged) navigate('/login')
    })

    return (
        <>
            <Grid container component="main" display="flex" padding="0" spacing={0}  >
                <Grid item xs={2} padding={1} margin={0} borderRight={1} height="100vh">
                    <Typography variant="h5" >Growtwitter</Typography>

                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <img src={IconHome} alt="home" width="24" height="24" />
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <img src={IconExplore} alt="explorar" width="24" height="24" />
                            </ListItemIcon>
                            <ListItemText>Explorar</ListItemText>

                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <img src={IconProfile} alt="perfil" width="24" height="24" />
                            </ListItemIcon>
                            <ListItemText>Meu Perfil</ListItemText>
                        </MenuItem>
                        <Divider />
                    </MenuList>

                    <Button variant="contained" color="primary" fullWidth={true} >Tweetar</Button>

                    <Box>

                    </Box>


                </Grid>
                <Grid item xs={6} color={"blue"} padding={1} margin={0}>
                    <Typography variant="h5" >Conteudo</Typography>
                </Grid>
                <Grid item xs={3} color={"green"} padding={1} margin={0}>
                    <Typography variant="h5" >Aside/footer</Typography>
                </Grid>
            </Grid>

        </>
    )
}

export default Layout