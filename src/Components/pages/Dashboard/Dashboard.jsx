import React from "react";
import {Box,Typography,Grid,Card,CardContent} from "@mui/material";

// ------ custom file -------
import DashBoardCardData from '../../../Constant/Dashboard.json'
import Header from "../../ReuseComponents/Header/Header";


import "./Dashboard.css";
import TableData from "./TableData";

export default function Dashboard() {
  return (
    <Box>
      <Header />
      <Grid container spacing={2}>
        {DashBoardCardData.RequestCards.map((requestData, index) => (
          <Grid item sm={6} md={3} lg={3} xs={6}>
            <Card sx={{width:{xs:"100%",sm:"100%",md:"100%",lg:"100%", xl:"100%"},backgroundColor:requestData.backgroundColor}} >
              <CardContent style={{ padding: "16px" }}>
                <Grid container>
                  <Grid item md={12} lg={12}>
                    <Box sx={{color:"#EAEAEA"}}>
                      <h2>{requestData.RequestTotal}</h2>
                      <Typography
                        style={{ fontSize: "12px"}}
                      >
                        {requestData.RequestType}
                      </Typography>
                    </Box>
                  </Grid>
                  {/* <Grid className="fitCenter" item md={3} lg={3}>
                    <Box className="roundShape"></Box>
                  </Grid> */}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br></br>
      <Box>
        <TableData />
      </Box>
    </Box>
  );
}
