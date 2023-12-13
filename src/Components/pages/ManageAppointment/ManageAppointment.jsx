import React, { useState } from "react";
import {
  Box,
  Grid,
  Table,
  TablePagination,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  TableBody,
  Menu,
  MenuItem,
  Button,
  Divider,
  Avatar,
  TextField,
  Breadcrumbs,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// ------ custom import files --------
import "./manageappointment.css";
import TableCardData from "../../../Constant/Dashboard.json";
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import RunningWithErrorsOutlinedIcon from '@mui/icons-material/RunningWithErrorsOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CancelAppointment from "../../../Popup/CancelAppointment";
import BioDetails from "../../ReuseComponents/Bio/BioDetails";
import TimeAdjustment from "../../../Popup/TimeAdjustment";
import EditAppointment from "../../../Popup/EditAppointment";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../ReuseComponents/BreadCrumbs/BreadCrumbs";


export default function ManageAppointment() {

  const [ cancelModalOpen, setCancelModalOpen ] = useState(false);
  const [ timeModalOpen, setTimeModalOpen ] = useState(false);
  const [ editModalOpen, setEditModalOpen ] = useState(false);

  const ClickBreadCrumbs = (event) => {
    event.preventDefault();
  };

  const handleCancelModalOpen = () =>{
    setCancelModalOpen(true);
  };

  const handleCancelModalClose = () =>{
    setCancelModalOpen(false);
  }

  const handleTimeModalOpen = () =>{
    setTimeModalOpen(true);
  };

  const handleTimeModalclose = () =>{
    setTimeModalOpen(false);
  }

  const handleEditModalOpen = () =>{
    setEditModalOpen(true);
  };

  const handleEditModalclose = () =>{
    setEditModalOpen(false);
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Box>

      <BreadCrumbs crumbs={['Dashboard', 'Manage Appointment',]} paths={['/dashboard', '/manageappointments']} selected={(crumb) => console.log("hello",crumb)} />

      <Grid container spacing={0} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} >
              <Box sx={{ display: {xs:"none", sm:"none", md:"block", lg:"block", xl:"block"}}}><BioDetails/></Box> 
              <Box sx={{ padding: "15px 0px", display: {xs:"block", sm:"block", md:"none", lg:"none", xl:"none"} }}>
              <h3>Manage Appointments</h3>
              </Box>       
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{textAlign:"right", display:"flex"}}>
              <Button className="flx" sx={{color:"#000"}} onClick={handleCancelModalOpen}>
                  <Box>
                    <Avatar sx={{width:"25px", height:"25px", backgroundColor:"#BC123E"}}><DoNotDisturbAltIcon sx={{ color: "#fff", fontSize:"18px" }} /></Avatar>
                  </Box>
                  <Box className="center-image-txt">Cancel Appointments</Box>
              </Button>
              <Button className="flx" sx={{color:"#000"}} onClick={handleTimeModalOpen}>
                  <Box>
                    <Avatar sx={{width:"25px", height:"25px", backgroundColor:"#2C73EB"}}><RunningWithErrorsOutlinedIcon sx={{ color: "#fff", fontSize:"18px" }} /></Avatar>
                  </Box>
                  <Box className="center-image-txt">Time Adjustment</Box>
              </Button>
            </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item sm={12} md={12} lg={12}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table
                  style={{ borderSpacing: "0px 3px" }}
                  stickyHeader
                  aria-label="sticky table"
                >
                  <TableHead>
                    <TableRow>
                      {TableCardData.tableRowHead2.map((RowHeadData, index) => (
                        <TableCell
                          style={{
                            color: "#676666",
                            fontSize: "14px",
                            padding: "10px",
                            width:RowHeadData.width,
                            backgroundColor: "#EEF0FA",
                          }}
                          key={TableCardData.tableRowCellData.TblHead}
                        >
                          {RowHeadData.TblHead}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {TableCardData.tableRowCellData.map(
                      (RowCellData, index) => (
                        <TableRow>
                          <TableCell className="RowCellData" key={index + 1}>
                            {index + 1}
                          </TableCell>
                          <TableCell
                            className="RowCellData"
                            key={RowCellData.TblData1}
                          >
                            {RowCellData.TblData1}
                          </TableCell>
                          <TableCell
                            className="RowCellData"
                            key={RowCellData.TblData2}
                          >
                            {RowCellData.TblData2}
                          </TableCell>
                          <TableCell
                            className="RowCellData"
                            key={RowCellData.TblData3}
                          >
                            {RowCellData.TblData3}
                          </TableCell>
                          <TableCell
                            className="RowCellData"
                            key={RowCellData.TblData4}
                          >
                            {RowCellData.TblData4}
                          </TableCell>
                          <TableCell
                            className="RowCellData"
                            key={RowCellData.TblData5}
                          >
                            {RowCellData.TblData5}
                          </TableCell>
                          <TableCell
                            className="RowCellData"
                            key={RowCellData.TblData6}
                          >
                            {(RowCellData.TblData6 ? (
                            <Box>
                              <Button
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                                sx={{ padding: "0px" }}
                              >
                                <Box
                                  sx={{
                                    color: RowCellData.color,
                                    textAlign:"left",
                                    width: "105px",
                                  }}
                                >
                                  {RowCellData.TblData6}
                                </Box>
                                <Box
                                  sx={{
                                    position: "relative",
                                    top: "3px",
                                    color: "black",
                                  }}
                                >
                                  <KeyboardArrowDownIcon />
                                </Box>
                              </Button>
                              <Menu
                                sx={{boxShadow:"none"}}
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                  "aria-labelledby": "basic-button",
                                }}
                                
                              >
                                <MenuItem sx={{color:"#1A71FF"}} onClick={handleClose}>Open</MenuItem>
                                <Divider  sx={{marginTop:"4px" , marginBottom:"4px"}} />
                                <MenuItem sx={{color:"#22B175"}} onClick={handleClose}>Check-Out</MenuItem>
                                <Divider  sx={{marginTop:"4px" , marginBottom:"4px"}} />
                                <MenuItem sx={{color:"#DA7314"}} onClick={handleClose}>In Que</MenuItem>
                                <Divider  sx={{marginTop:"4px" , marginBottom:"4px"}} />
                                <MenuItem sx={{color:"#BC123E"}}onClick={handleClose}>Not Arrived</MenuItem>
                                <Divider  sx={{marginTop:"4px" , marginBottom:"4px"}} />
                                <MenuItem sx={{color:"#243665"}}onClick={handleClose}>Booked</MenuItem>
                              </Menu>
                            </Box>
                            ):
                            <Box>
                            <TextField  size="small"></TextField>
                            </Box>
                            )}

                          </TableCell>
                          <TableCell
                            className="RowCellData"
                            key={RowCellData.TblData6}
                          >
                            {( RowCellData.TblData6 ? (
                            <Box display={'flex'}>
                              <Button size="small" sx={{minWidth:"auto"}} onClick={handleEditModalOpen}>
                              <Avatar sx={{width:"25px", height:"25px", backgroundColor:"#E77B18"}}><EditIcon sx={{ color: "#fff", fontSize:"18px" }} /></Avatar>
                              </Button>
                              <Button size="small" sx={{minWidth:"auto"}}>
                              <Avatar sx={{width:"25px", height:"25px", backgroundColor:"#BC123E"}}><DeleteOutlinedIcon sx={{ color: "#fff", fontSize:"18px" }} /></Avatar>
                              </Button>
                            </Box>
                            ):<Button sx={{background:"#243665", color:"#FFFFFF", padding:"0px 15px", borderRadius:"20px"}}>select</Button>
                            )}

                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={TableCardData.tableRowCellData.length}
                rowsPerPage={10}
                page={0}
              />
            </Grid>
          </Grid>
      </Box>



    <CancelAppointment
      open={cancelModalOpen}
      onClose={handleCancelModalClose}
    />
    <TimeAdjustment
      open ={timeModalOpen}
      onClose={handleTimeModalclose}
    />
    <EditAppointment
      open ={editModalOpen}
      onClose={handleEditModalclose}
    />
    </>
  );
}
