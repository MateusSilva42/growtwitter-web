import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Layout from "./Layout"
import { Avatar, Box, Grid, Typography } from "@mui/material"
import ScrollableContainer from "../components/ScrollableContainer"
import MyProfilePicture from "../../assets/imgs/mateus_profile.jpg"
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { grey } from "@mui/material/colors"

function Home(){
    const navigate = useNavigate()
    const userLogged = localStorage.getItem('token')

    useEffect(() => {
        if (!userLogged) navigate('/login')
    })
    
    return (
        <>
        <Layout>
                <Typography variant="h4">Meu Perfil</Typography>
                
                {/* <Box sx={{ height: "calc(100vh - 150px)", overflowY: "auto" }} > */}
                <ScrollableContainer>
                    <Box sx={{padding: 3, borderTop: 1 , marginTop: 1}}>
                            <Grid container margin={2}>
                                <Grid xs={1}>
                                    <Avatar sx={{width: 70, height: 70}} alt="Nome do User" src={MyProfilePicture}/>
                                </Grid>
                                <Grid xs={10} sx={{marginLeft:3}}>
                                    <Box display={"flex"} alignItems='center'>
                                    <Typography variant="h6">Nome da pessoa</Typography>
                                    <Typography variant="subtitle2" color={grey[400]} sx={{marginLeft:1}}>@nomedapessoa</Typography>
                                    </Box>
                                    <Typography variant="body1" >Hello, this is a nice content and xablau! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere repudiandae tempora tempore asperiores, animi iusto alias voluptas beatae molestias voluptates reiciendis dignissimos inventore magnam ratione, veniam suscipit in dolorem consequatur dicta at!</Typography>
                                    <Box>
                                        <Typography variant="subtitle2" color={grey[400]}>10:00 - 10/10/2021</Typography>
                                    </Box>
                                    <Box display={"flex"}>
                                        <ChatBubbleOutlineOutlinedIcon sx={{marginRight:1}}/>
                                        <Typography variant="subtitle2" color={grey[400]}>0</Typography>
                                        <FavoriteBorderOutlinedIcon sx={{marginLeft:2, marginRight:1}}/>
                                        <Typography variant="subtitle2" color={grey[400]}>2</Typography>
                                    </Box>
                                </Grid>

                            </Grid>
                            
                           
                       
                    </Box>
                    </ScrollableContainer>
                {/* </Box> */}
                
        </Layout>
        </>
    )
}

export default Home