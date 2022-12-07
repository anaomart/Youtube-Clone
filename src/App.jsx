import {BrowserRouter , Routes , Route} from 'react-router-dom';
import {Box, Typography} from '@mui/material'
import {Navbar, Feed , VideoDetails, ChannelDetails, SearchFeed} from './components/index'
const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{backgroundColor:'#000'}}>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Feed/>}/>
                <Route path='/video/:id' element={<VideoDetails/>}/>
                <Route path='/channel/:id' element={<ChannelDetails/>}/>
                <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
            </Routes>
            <Typography className='copyright' variant='body2' 
                sx={{ mt: 1.5,pb:1, color:'#fff' ,textAlign:"center" , width:'100%'}}
                >Copyright© 2022 Omar  Ashraf</Typography>
            </Box>
        </BrowserRouter>
    );
}

export default App;
