import  {ReactNode} from "react"
import { Grid, Typography, Divider, MenuList, MenuItem, ListItemText, ListItemIcon, Button, Box, Card, CardContent, CardMedia, Paper } from "@mui/material"
// import IconExploreSelected from "../../assets/imgs/icone_explorar_selecionado.svg"
import IconExplore from "../../assets/imgs/icone_explorar.svg"
// import IconHomeSelected from "../../assets/imgs/icone_pagina_inicial_selecionado.svg"
import IconHome from "../../assets/imgs/icone_pagina_inicial.svg"
// import IconProfileSelected from "../../assets/imgs/icone_perfil_selecionado.svg"
import IconProfile from "../../assets/imgs/icone_perfil.svg"
// import ProfilePicture from "../../assets/imgs/foto_perfil_default.svg"
import MyProfilePicture from "../../assets/imgs/mateus_profile.jpg"
import { Link, useNavigate } from "react-router-dom"
import { grey } from "@mui/material/colors"

interface LayoutProps {
    children: ReactNode
}

function Layout({children} : LayoutProps) {
    const navigate = useNavigate()
    const userData = JSON.parse(localStorage.getItem('user') || '{}')
    const userName = userData.name
    const userNickname = userData.user_name

    return (
        <>
            <Grid container component="main" display="flex" padding="0" spacing={0}  >
                <Grid item xs={2} padding={1} margin={0} borderRight={1} height="100vh" display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                    <Box>
                    <Typography variant="h5" >Growtwitter</Typography>

                    <MenuList>
                        <MenuItem onClick={() => navigate("/")} >
                            <ListItemIcon>
                                <img src={IconHome} alt="home" width="24" height="24" />
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/explorar")}>
                            <ListItemIcon>
                                <img src={IconExplore} alt="explorar" width="24" height="24" />
                            </ListItemIcon>
                            <ListItemText>Explorar</ListItemText>

                        </MenuItem>
                        <MenuItem onClick={() => navigate("/perfil")}>
                            <ListItemIcon >
                                <img src={IconProfile} alt="perfil" width="24" height="24" />
                            </ListItemIcon>
                            <ListItemText>Meu Perfil</ListItemText>
                        </MenuItem>
                        <Divider />
                    </MenuList>

                    <Button variant="contained" color="primary" fullWidth={true} >Tweetar</Button>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} >
                    <Card sx={{ display: 'flex', justifyContent: "center", alignItems:"center"}}>
                    <CardMedia
                            component="img"
                            sx={{ width: 60, height: 60, borderRadius: "50%" }}
                            image= {MyProfilePicture}
                            alt="foto de perfil"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {userName}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    @{userNickname}
                                </Typography>
                            </CardContent>
                        </Box>
                        
                    </Card>
                        <Button size="small">Sair</Button>
                    </Box>


                </Grid>
                <Grid item xs={6} padding={1} margin={0}>
                    {children}
                </Grid>
                

                <Grid item xs={3} color={"green"} padding={1} margin={0} borderLeft={1}>
                    <Paper elevation={6} sx={{backgroundColor: grey[200], padding: 3, marginLeft: 4}}>
                        
                        <Typography variant="h6" marginBottom={2} >O que está acontecendo?</Typography>

                        <Typography variant="subtitle2" >Esportes - Há 45 min</Typography>
                        <Typography variant="body1" marginBottom={1} >Assunto sobre esportes</Typography>

                        <Typography variant="subtitle2" >Assunto do Momento em Brasil</Typography>
                        <Typography variant="body1" marginBottom={1} >Assunto do Momento</Typography>

                        <Typography variant="subtitle2" >Música - Assunto do Momento</Typography>
                        <Typography variant="body1" marginBottom={1} >Assunto sobre Música</Typography>

                        <Typography variant="subtitle2" >Cinema - Assunto do Momento</Typography>
                        <Typography variant="body1" marginBottom={1} >Assunto sobre Filmes e Cinema</Typography>

                        <Link to="/explorar" >
                            <Typography variant="subtitle2" sx={{textDecoration:'none'}} >Mostrar mais</Typography>
                        </Link>

                    </Paper>
                </Grid>
            </Grid>

        </>
    )
}

export default Layout