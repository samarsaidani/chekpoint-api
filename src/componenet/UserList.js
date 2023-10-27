 import axios from "axios"
import { useEffect, useState } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const UserList =()=>{
    const [user,setUser]=useState([])
    console.log(user)
    useEffect(()=>(
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUser(res.data))
        .catch((err)=>console.log(err))
    ),[])
   
    return (
        <div >
            {
                user.map((item,key)=>{
                    return(
                        <div key={key}>
          <Card sx={{ maxWidth: 345}} style={{background:"pink"}}>
      <CardMedia/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.email}
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
                            </div>
                    )
                })
            }
            

        </div>
    )

}


export default UserList

