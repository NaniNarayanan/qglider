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
  Button,
  Avatar,
  Breadcrumbs,
} from "@mui/material";


// ------ custom import files --------
import "../../pages/ManageUsers/manageusers.css";
import TableCardData from "../../../Constant/Dashboard.json";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BioDetails from "../../ReuseComponents/Bio/BioDetails";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../ReuseComponents/BreadCrumbs/BreadCrumbs";

export default function ManageUsers() {


  return (
    <Box>
      <BreadCrumbs crumbs={['Dashboard', 'Manage Users',]} paths={['/dashboard', '/manageusers']} selected={(crumb) => console.log("hello",crumb)} />
        <Grid container spacing={0} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Grid item xs={6} md={9} lg={9} xl={9} >
                <Box sx={{ display: {xs:"none", sm:"none", md:"block", lg:"block", xl:"block"}}}><BioDetails/></Box> 
                <Box sx={{ padding: "15px 0px", display: {xs:"block", sm:"block", md:"none", lg:"none", xl:"none"} }}>
                <h3>Manage User</h3>
                </Box>       
              </Grid>
              <Grid sx={{textAlign:"right"}} item xs={6} md={3} lg={3} xl={3}>
                  <Grid>
                    <Button component={Link} to="/manageusers/addusers" sx={{backgroundColor:"#243665", color:'#fff', textTransform:"none", borderRadius:"50px", padding:"3px 10px",'&:hover': { background:'#243665' }}}>
                    {/* <AddOutlinedIcon sx={{ color: "#fff", fontSize:"18px" }} /> */}
                      <span style={{display:"flex"}}><AddOutlinedIcon sx={{ color: "#fff", fontSize:"18px" }} /></span> Add User
                    </Button>
                  </Grid>
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
                        {TableCardData.tableRowHead3.map((RowHeadData, index) => (
                          <TableCell
                            style={{
                              color: "#676666",
                              fontSize: "14px",
                              padding: "10px",
                              backgroundColor: "#EEF0FA",
                              justifyContent:"center"
                            }}
                            key={TableCardData.tableRowCellData.TblHead}
                          >
                            {RowHeadData.TblHead}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {TableCardData.tableUsersRowCellData.map(
                        (RowCellData, index) => (
                          <TableRow>
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
                              <Box sx={{display:"flex",justifyContent:"left",}} >
                                <Button  size="small" sx={{minWidth:"auto"}}>
                                <Avatar sx={{width:"25px", height:"25px", backgroundColor:"#1A71FF"}}><VisibilityOutlinedIcon sx={{ color: "#fff", fontSize:"18px" }} /></Avatar>
                                </Button>
                                <Button size="small" sx={{minWidth:"auto"}} >
                                <Avatar sx={{width:"25px", height:"25px", backgroundColor:"#E77B18"}}><EditIcon sx={{ color: "#fff", fontSize:"18px" }} /></Avatar>
                                </Button>
                                <Button size="small" sx={{minWidth:"auto"}}>
                                <Avatar sx={{width:"25px", height:"25px", backgroundColor:"#BC123E"}}><DeleteOutlinedIcon sx={{ color: "#fff", fontSize:"18px" }} /></Avatar>
                                </Button>
                              </Box>

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
  );
}
