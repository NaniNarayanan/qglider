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
  FormControl,
  Menu,
  MenuItem,
  Button,
  InputLabel,
  Typography,
  TextField,
  Divider,
  InputAdornment,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// ------ custom import files --------
import "./TableData.css";
import TableCardData from "../../../Constant/Dashboard.json";
import BioDetails from "../../ReuseComponents/Bio/BioDetails";

export default function TableData() {
  const handleChange = (event) => {
    console.log("changed", event.target.value);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12} lg={12}>
          <Box sx={{ padding: "15px 0px" }}>
            <h3>Appointments Today</h3>
          </Box>
        </Grid>
        <Grid item xs={6} md={9} lg={9} xl={9}>
          <BioDetails />          
        </Grid>
        <Grid sx={{textAlign:"right"}} item xs={6} md={3} lg={3} xl={3}>
          <TextField aria-label="Search" type="text" size='small' placeholder="Search" sx={{backgroundColor:"#EFEFEF", borderRadius:"50px",
          '&:hover': {
              borderColor: '#fff',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fff',
            },
            '&:focus': {
              borderColor: '#fff',
            },
          }}
          InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                  <SearchOutlinedIcon sx={{color:"#757575"}}/>
                  </InputAdornment>
              ),
              }}
          />
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
                  {TableCardData.tableRowHead.map((RowHeadData, index) => (
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
                {TableCardData.tableRowCellData.map((RowCellData, index) => (
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
                            width : "105px"
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
                        sx={{ boxShadow: "none" }}
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem
                          sx={{ color: "#1A71FF" }}
                          onClick={handleClose}
                        >
                          Open
                        </MenuItem>
                        <Divider
                          sx={{
                            marginTop: "4px",
                            marginBottom: "4px",
                          }}
                        />
                        <MenuItem
                          sx={{ color: "#22B175" }}
                          onClick={handleClose}
                        >
                          Check-Out
                        </MenuItem>
                        <Divider
                          sx={{
                            marginTop: "4px",
                            marginBottom: "4px",
                          }}
                        />
                        <MenuItem
                          sx={{ color: "#DA7314" }}
                          onClick={handleClose}
                        >
                          In Que
                        </MenuItem>
                        <Divider
                          sx={{
                            marginTop: "4px",
                            marginBottom: "4px",
                          }}
                        />
                        <MenuItem
                          sx={{ color: "#BC123E" }}
                          onClick={handleClose}
                        >
                          Not Arrived
                        </MenuItem>
                        <Divider
                          sx={{
                            marginTop: "4px",
                            marginBottom: "4px",
                          }}
                        />
                        <MenuItem
                          sx={{ color: "#243665" }}
                          onClick={handleClose}
                        >
                          Booked
                        </MenuItem>
                      </Menu>
                    </Box>
                      ):"")}

                    </TableCell>
                  </TableRow>
                ))}
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
