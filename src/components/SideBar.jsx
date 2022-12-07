import React from 'react'
import { Stack} from '@mui/material';
 import {categories} from '../utils/constants'
export default function SideBar({setSelectedCategory , selectedCategory}) {
return (
    <Stack direction='row'
    sx={{
        overflowY:'auto',
        height:{sx:'auto', md:'95%'},
        flexDirection:{md:'column'}
    }}>
    {categories.map((category,index)=> (
        <button className='category-btn'
            key={index}
            onClick={()=>setSelectedCategory(category.name)}
            style={{
                background:category.name === selectedCategory && '#fc1503',
                color:'white'
            }}
        >
        <span style={{color:category.name === selectedCategory ? 'white':'red' , marginRight:'15px'}}>{category.icon}</span>
        <span style={{opacity:category.name === selectedCategory ?'1' : '0.8'}}>{category.name}</span>
        </button>
       
    ))}

    </Stack>
)
}
