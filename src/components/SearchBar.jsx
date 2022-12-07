import { useState } from "react"
import {useNavigate} from 'react-router-dom' ;
import {Paper , IconButton} from '@mui/material';
import {Search} from '@mui/icons-material'
export default function SearchBar() {
  const navigate = useNavigate();

      const [searchTerm, setSearchTerm]= useState()
      const handelSubmit =(e)=> {
        e.preventDefault();
        if(searchTerm) {
          navigate(`/search/${searchTerm}`)
          setSearchTerm('')
        }
      }
  return (
    <div>
    <Paper component='form'
        onSubmit={handelSubmit}
        sx={{
            borderRadius: 20 ,
            border: '1px solid #e3e3e3e3',
            pl:2,
            boxShadow:'none',
            mr:{sm:5}
        }}
        >
        <input className='search-bar'
            placeholder="Search..."
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
        <IconButton type='submit' sx={{p:'10px', color:'red', }}>
            <Search/>
        </IconButton>
    </Paper>

    </div> 
  )
}
