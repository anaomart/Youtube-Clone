import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
export default function Videos({ videos , direction }) {
    if(!videos) return 'loading...'
    return (
        <Stack direction={direction  || 'row'}  flexWrap='wrap' justifyContent='start' gap={2}>
            {
                videos.map((item, index) =>
                (<Box key={index}>
                    
                    {item.id.videoId && <VideoCard video={item} /> }
                   {item.id.channelId && <ChannelCard channelDetail={item}/>}
                    {/* { item.id.playlistId && <VideoCard video={item} playlist='true'/>} */}
                </Box>)
                )
            }

        </Stack>
    )
}
