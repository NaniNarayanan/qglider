import React from 'react'
import {Box, Button, Grid} from "@mui/material";

//  ------custom file -------
 import './Header.css'

export default function Header() {
  return (
      <Box>
        <Grid container spacing={0} sx={{padding:"10px 0px"}}>
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <Box><h3 style={{margin:"0px"}}>Hello,<span style={{color:"#243665",fontWeight:"bold",fontSize:"26px"}} > Dr. John Doe!</span></h3></Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <Box sx={{textAlign:"right"}}>
              <Button className='btn'>10<span>21-Nov-2023 Appointments</span></Button>
              <Button className='btn'>06<span>21-Nov-2023 Appointments</span></Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
  )
}
