import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchApi';
const Feed = () => {
    const [selectedCategory , setSelectedCategory] = useState('New');
    const [videos, setVideos] =useState([])

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
          .then((data) => setVideos(data.items))
        }, [selectedCategory]);
    return (
        <Stack sx={{
            flexDirection: { sx: 'column', md: 'row' }
        }}>
            <Box
                sx={{
                    height: { sx: 'auto', md: '92vh' },
                    borderRight: "1px solid #3d3d3d",
                    px:{sx:0, md:2}
                }} >
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                
            </Box>
            <Box p={2} sx={{overflowY:'auto'}}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:"white"}}>
                    {selectedCategory } <span style={{color:'#f31504'}}>videos</span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
        </Stack>
    );
}

export default Feed;
