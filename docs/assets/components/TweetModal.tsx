import * as React from 'react';
import { CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, TextField, Box } from "@mui/material"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import apiBase from '../../../axiosConfig';

interface TweetModalProps {
    getTweets?: () => Promise<void>;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs({ getTweets }: TweetModalProps) {
    const userData = JSON.parse(localStorage.getItem('user') || '{}')
    const userId = userData.id
    const [tweetContent, setTweetContent] = useState('')
    const [loading, setLoading] = useState(false)


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const sendTweet = () => {
        setLoading(true)
        console.log('loading', loading);
        
        try {
            const data: any = {
                content: tweetContent,
                author_id: userId
            }

            const response = apiBase.post('/tweets', data)

            console.log('tweet', response)
            if (getTweets) {
                getTweets()
            }
            
            setTimeout(() => {
                setLoading(false)
                setOpen(false)
            }, 2000)
            
        }
        catch (error) {
            console.log(error)
            setTimeout(() => {
            setLoading(false)
                setOpen(false)
            }, 2000)
            setOpen(false)

        }
    }

    return (
        <React.Fragment>
            {loading ? (
                <Box display='flex' justifyContent='center' alignItems='center' height='80vh' width='80vw'>
                    <CircularProgress color='primary' />
                </Box>
            ) : (
                <Box>
                    <Button variant="contained" color="primary" fullWidth={true} onClick={handleClickOpen} >Tweetar</Button>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <DialogTitle sx={{ m: 0, p: 2, width: 500 }} id="customized-dialog-title">
                            Tweetar
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent dividers>

                            <TextField
                                autoFocus
                                multiline
                                rows={4}
                                margin="dense"

                                id="name"
                                label="O que está acontecendo?"
                                type="text"
                                fullWidth
                                onChange={(e) => setTweetContent(e.target.value)}
                            />


                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose} color='error'  >
                                Cancelar
                            </Button>
                            <Button autoFocus onClick={sendTweet} variant='contained' color='primary'>
                                Tweetar
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </Box>
            )}


        </React.Fragment>
    );
}
