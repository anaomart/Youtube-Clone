import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Videos from './Videos';
import { useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchApi';
const Search = () => {
    const [videos, setVideos] =useState([])

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${}`)
          .then((data) => setVideos(data.items))
        }, []);
    return (
        <Box p={2} sx={{overflowY:'auto'}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:"white"}}>
        </Typography>
        <Videos videos={videos}/>
    </Box>
    );
}

export default Search;
