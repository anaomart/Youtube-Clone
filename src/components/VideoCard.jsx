import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import {  CheckCircle } from '@mui/icons-material'
import {  demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'
export default function VideoCard({ video: { id: videoId, snippet } ,playlist}) {

    let GetDate = (da) => {
        da = new Date(da);
        if (new Date().getFullYear() === da.getFullYear()) {
            return (new Date().getMonth()) -   (da.getMonth()) ?
            `${ (new Date().getMonth()) -   (da.getMonth())} Months ago`:
            `${Math.abs((new Date().getDay()) -   (da.getDay()))} Days ago`;
        } else {
            return `${Math.abs(new Date().getFullYear() - da.getFullYear())} Years ago`
        }
    }
    return (
        <Card sx={{width:{xs:'90vw', sm:'385px',md:"320px"} ,boxShadow:'none' , borderRadius:0}}>
            <Link to={videoId ? `/video/${videoId.videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width:{xs:'90vw', sm:'385px',md:"320px"}, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px', }}>
                <Link to={videoId ? `/video/${videoId.videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color="#fff">
                        {snippet?.title?.slice(0,60) || demoVideoTitle}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                        {snippet?.channelTitle.slice(0,60) || demoChannelTitle}
                        <CheckCircle sx={{fontSize:12 , color:'gray', ml:'5px'}} />
                    </Typography>
                </Link>
                <Typography variant='subtitle3' fontWeight='bold' color='gray'>
                    {GetDate(snippet.publishedAt)}
                </Typography>
            </CardContent>
        </Card>
    )
}
