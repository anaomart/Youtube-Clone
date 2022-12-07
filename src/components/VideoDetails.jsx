import { CheckCircle } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchApi';
import Videos from './Videos';

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [ videos , setVideos] = useState(null);
  const {id} = useParams();
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))  
  
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  
  },[id])


  if(!videoDetail?.snippet) return "loading...";
  const {snippet : {title , channelId , channelTitle}, statistics:{viewCount, likeCount}} = videoDetail;
  

  return (
    <Box minHeight="95vh">
        <Stack direction={{xs:'column',md:'row'}}>
          <Box flex={1} >
          <Box sx={{ width: "100%", position: "sticky",top:'1px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
              <Typography color='white' variant='h5' fontWeight='bold' p={2}>
                {title}
              </Typography>
              <Typography>
                <Stack direction='row' justifyContent='space-between' sx={{
                  color: 'white'
                }} py={1} px={2}>
                  <Link to={`/channel/${channelId}`}>
                      <Typography color='white' variant={{sm:'subtitle1', md:'h6'}}>
                        {channelTitle}
                        <CheckCircle sx={{fontSize:'12px' , color:'gray' , ml: '5px'}}/>
                      </Typography>
                  </Link>
                  <Stack direction='row' gap='20px' alignItems='center'>
                    <Typography variant='body1' sx={{opacity: 0.7}}>
                      {parseInt(viewCount).toLocaleString()} views
                    </Typography>
                    <Typography variant='body1' sx={{opacity: 0.7}}>
                      {parseInt(likeCount).toLocaleString()} Likes
                    </Typography>
                  </Stack>
                </Stack>
              </Typography>
          </Box>
          </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
        </Stack>
    </Box>
  );
}

export default VideoDetails;
