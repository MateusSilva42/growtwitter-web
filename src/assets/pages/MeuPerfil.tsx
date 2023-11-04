import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Layout from "./Layout"
import { Avatar, Box, Divider, Grid, Typography, CircularProgress, Alert } from "@mui/material"
import DefaultPicture from "../../assets/imgs/default_profile.png"
import { grey } from "@mui/material/colors"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ScrollableContainer from "../components/ScrollableContainer"
import apiBase from "../../../axiosConfig"


function Home(){
    const navigate = useNavigate()
    const userLogged = localStorage.getItem('token')
    const [tweets, setTweets] = useState([])
    const [likeCounts, setLikeCounts] = useState<{ [tweetId: string]: number }>({});
    const [isLiked, setIsLiked] = useState< {[tweetId: string] : boolean}> ({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        if (!userLogged) {
            navigate('/login')
        } else {
            setLoading(true);
            getTweets()
        }

    }, [userLogged])

    useEffect(() => {
        const initialLikeCounts: { [tweetId: string]: number } = {};
        const initialIsLiked: {[tweetId: string] : boolean} = {}

        tweets.forEach((tweet: any) => {
            initialLikeCounts[tweet.id] = tweet.likes.length;
            initialIsLiked[tweet.id] = tweet.likes.length > 0;
        });

        setLikeCounts(initialLikeCounts);
        setIsLiked(initialIsLiked);
    }, [tweets])

    const getTweets = async () => {
        try{
            const userData = JSON.parse(localStorage.getItem('user') || '{}')
            const userId = userData.id  
            const response = await apiBase.get(`/tweets/${userId}`)
            
            setTweets(response.data.data)
            console.log('tweets',response.data.data);
            setLoading(false);
           
        }catch(error){
            console.log(error)
            setError(true)
            setLoading(false);
        }
    }

    const getLikes = async (tweetId: String) => {
        try{
            const response = await apiBase.get(`/likes/${tweetId}`)
            console.log('likes',response.data.data);

        }catch(error){
            console.log(error)
        }
    }

    const like = async (tweetId: String) => {
        try{
            const userData = JSON.parse(localStorage.getItem('user') || '{}')
            const userId = userData.id
            
            const data = {
                user_id: userId
            }
    
            const response = await apiBase.post(`/likes/${tweetId}`, data)

            if(response.status === 201){
                const updatedLikeCount = await getLikes(tweetId);
                
                console.log('updatedLikeCount',updatedLikeCount);

                setLikeCounts((prevLikeCounts) => ({
                    ...prevLikeCounts,
                    [tweetId as string]: response.data.data? prevLikeCounts[tweetId as string] + 1 : prevLikeCounts[tweetId as string] - 1,
                    
                  }));

                setIsLiked((prevIsLiked) => ({
                    ...prevIsLiked,
                    [tweetId as string]: response.data.data? true : false,
                    
                  }));
            }
        }catch(error){
            console.log(error)
        }
       
    }
    
    return (
        <>
        <Layout getTweets = {getTweets}>
                <Typography variant="h4">Meu Perfil</Typography>
                
                {/* <Box sx={{ height: "calc(100vh - 150px)", overflowY: "auto" }} > */}
                {loading ? (
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'80vh'}>
                    <CircularProgress color="primary" />
                    </Box>
                ) : error ? (
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'80vh'}>
                    <Alert severity="error">Erro ao carregar os tweets</Alert>
                    </Box>
                ) : (
                    <ScrollableContainer>
                    <Box sx={{padding: 3, borderTop: 1 , marginTop: 1}}>

                            { tweets? (
                            tweets.map((tweet: any) => (
                                <Grid container margin={2}>
                                <Grid xs={1}>
                                    <Avatar sx={{width: 70, height: 70}} alt="Nome do User" src={DefaultPicture}/>
                                </Grid>
                                <Grid xs={10} sx={{marginLeft:3}}>
                                    <Box display={"flex"} alignItems='center'>
                                    <Typography variant="h6">{tweet.author.name}</Typography>
                                    <Typography variant="subtitle2" color={grey[400]} sx={{marginLeft:1}}>@{tweet.author.user_name}</Typography>
                                    </Box>
                                    <Typography variant="body1" >{tweet.content}</Typography>
                                    <Box display={"flex"} sx={{marginTop:1, marginBottom: 2}}>
                                        <ChatBubbleOutlineOutlinedIcon sx={{marginRight:1}}/>
                                        <Typography variant="subtitle2" color={grey[400]}>0</Typography>
                                        <FavoriteBorderOutlinedIcon sx={{marginLeft:2, marginRight:1, cursor: 'pointer', color: isLiked[tweet.id]? 'red': 'black'}} onClick={() => like(tweet.id)} />
                                        <Typography variant="subtitle2" color={grey[400]}>{likeCounts[tweet.id]}</Typography>
                                    </Box>
                                <Divider />

                                </Grid>
                            </Grid>)
                            ))
                            : (<Typography variant="h5">Não há tweets para exibir</Typography>
                            )}
                        
                    </Box>
                    </ScrollableContainer>
                ) }
                
                {/* </Box> */}
                
        </Layout>
        </>
    )
}

export default Home