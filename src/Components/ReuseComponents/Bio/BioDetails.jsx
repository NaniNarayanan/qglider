import React from "react";
import { Box, Grid } from "@mui/material";

// ---- custom Files ------
import "./biodetails.css";

// ------ custom icons and images ------

import Calender from "../../../Assets/dashboard/calender.svg";
import Hospital from "../../../Assets/dashboard/hospital.svg";
import Doctor from "../../../Assets/dashboard/doctor.svg";

export default function BioDetails() {
  return (
    <>
      <Grid container spacing={'auto'} >
        <Grid item xs={12} lg={12} md={12} sx={{display:{xs:"block",lg:"flex", md:"flex"}, justifyContent:{lg:"space-between", md:"space-between"}}}>
          <Grid className="flx" item xs={12} md={12} lg={12}>
            <Box>
              <img src={Calender} alt={"Calender.logo"} />
            </Box>
            <Box className="center-image-txt"> 05-Oct-2023 | 10:30AM</Box>
          </Grid>
          <Grid className="flx" xs={12} md={12} lg={12}>
            <Box>
              <img src={Hospital} alt={"Calender.logo"} />
            </Box>
            <Box className="center-image-txt"> Rajiv Gandhi Government General Hospital</Box>
          </Grid>
          <Grid className="flx" xs={12} md={12} lg={12}>
            <Box>
              <img src={Doctor} alt={"Calender.logo"} />
            </Box>
            <Box className="center-image-txt"> Dr.Kim</Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
