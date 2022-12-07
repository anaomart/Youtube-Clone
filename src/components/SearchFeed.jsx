import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Videos from './Videos';
import { useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchApi';
import { useParams } from 'react-router-dom';
const Feed = () => {
    const [videos, setVideos] =useState([])
    const {searchTerm} = useParams();
    useEffect(() =>   {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
          .then((data) => setVideos(data.items))
        }, [searchTerm]);
    return (
        <Box p={2} sx={{overflowY:'auto'}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:"white"}}>
            Search result for <span style={{color:'#f31504'}}>{searchTerm}</span> videos 
        </Typography>
        <Box p={2} display="flex">
    <Box sx={{ mr: { sm: '100px' } }}/>
      <Videos videos={videos} />
    </Box>
    </Box>
    );
}

export default Feed;
