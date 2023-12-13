import React from "react";
import BioDetails from "../../ReuseComponents/Bio/BioDetails";
import { Grid, Box,FormControl , FormControlLabel, RadioGroup, Radio,
  MenuItem,Select,InputLabel , FormGroup, Checkbox, Card, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './setting.css'
import BreadCrumbs from "../../ReuseComponents/BreadCrumbs/BreadCrumbs";

export default function SettingPage() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box>
      <BreadCrumbs crumbs={['Dashboard', 'Settings',]} paths={['/dashboard', '/settings']} selected={(crumb) => console.log("hello",crumb)} />
      <Grid container spacing={2} >
        <Grid item xs={6} sm={6} md={6} lg={9} xl={9}>
          <BioDetails />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3} xl={3}></Grid>
      </Grid>
      <Box component='form'>
      <Grid container mt={0} spacing={2}>
        <Grid item xs={12} sm={12} md={3} lg={5} xl={7} sx={{display:"flex", alignItems:"center"}}>
        <h3>Settings</h3>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={7} xl={5} sx={{display:"flex", alignItems:"center"}}>
          <Box display={{ xs: 'column', sm: 'column', md: 'flex' }} alignItems={'center'} gap={2}>      
            <FormControl>
              <RadioGroup row aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" 
                sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
                <FormControlLabel labelPlacement="end" value="female" control={<Radio />} label="Default Settings" />
                <FormControlLabel labelPlacement="end" value="male" control={<Radio />} label="Specific Settings" />
              </RadioGroup>
            </FormControl>
            <Box sx={{ marginLeft:{xs:"22px", sm:"22px"}}}>
              <FormControl sx={{m:1,minWidth:100}}>
                <InputLabel id="demo-simple-select-helper-label">From</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={""}
                  label="From"
                  size="small"
                  fullWidth
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              
              </FormControl>    
              <FormControl sx={{m:1,minWidth:100}}>
              <InputLabel id="demo-simple-select-helper-label">To</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={""}
                  label="To"
                  fullWidth
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} >
          <Grid item  xs={12} sm={12} md={12} lg={8} xl={7}>
              <Box sx={{backgroundColor:"#EEF0FA"  , padding:"30px 20px"}}> 
                <h3>Availability</h3>
                <Grid container >
                  <Grid item xs={12} sm={12} md={2} lg={2} xl={2} >
                     <FormGroup className="labelgroup" sx={{ display: "flex", flexDirection: { xs: "row", sm: "row", md: "column", lg: "column", xl: "column" } }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Mon" />
                        <FormControlLabel control={<Checkbox />} label="Tue" />
                        <FormControlLabel control={<Checkbox />} label="Wed" />
                        <FormControlLabel control={<Checkbox />} label="Thu" />
                        <FormControlLabel control={<Checkbox />} label="Fri" />
                        <FormControlLabel control={<Checkbox />} label="Sat" />
                        <FormControlLabel control={<Checkbox />} label="Sun" />
                      </FormGroup>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                      <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center", gap:2, }}>
                          <Box>
                            <FormControlLabel
                              value="morning"
                              control={<Checkbox />}
                              label="Morning"
                              labelPlacement="start"
                            />
                          </Box>
                          <Box sx={{display:"flex" , alignItems:"center", gap:2}}>
                            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                              <Typography >Duration</Typography>
                            </Box>
                            <Box>
                              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                                <DemoContainer  components={['TimePicker']}>
                                  <TimePicker slotProps={{ textField: { size: 'small' } }} label="From"/>
                                </DemoContainer>
                              </LocalizationProvider>
                            </Box>
                            <Box>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <DemoContainer components={['TimePicker']}>
                                    <TimePicker slotProps={{ textField: { size: 'small' } }} label="To" />
                                  </DemoContainer>
                                </LocalizationProvider>
                            </Box>
                          </Box>
                      </Box>
                      <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center", gap:2, }}>
                          <Box>
                            <FormControlLabel
                              value="evening"
                              control={<Checkbox />}
                              label="Evening"
                              labelPlacement="start"
                            />
                          </Box>
                          <Box sx={{display:"flex" , alignItems:"center", gap:2}}>
                            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                              <Typography >Duration</Typography>
                            </Box>
                            <Box>
                              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                                <DemoContainer  components={['TimePicker']}>
                                  <TimePicker slotProps={{ textField: { size: 'small' } }} label="From"/>
                                </DemoContainer>
                              </LocalizationProvider>
                            </Box>
                            <Box>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <DemoContainer components={['TimePicker']}>
                                    <TimePicker slotProps={{ textField: { size: 'small' } }} label="To" />
                                  </DemoContainer>
                                </LocalizationProvider>
                            </Box>
                          </Box>
                      </Box>
                      <Box sx={{marginTop:"50px"}}>
                        <h3>
                        Slot Duration
                        </h3>
                        <Box sx={{display:"flex" , alignItems:"center"}}>
                          <Box>Slot duration</Box>
                          <Box>
                              <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                  value={"10:00"}
                                  displayEmpty
                                  inputProps={{ 'aria-label': 'Without label' }}
                                  size="small"
                                >
                                  <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={"10:00"}>10:00</MenuItem>
                                  <MenuItem value={20}>Twenty</MenuItem>
                                  <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                              </FormControl>
                              
                          </Box>
                          <Box>Mins</Box>
                        
                        </Box>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                          <Box sx={{padding:"5px 20px 5px 0px", alignItems:"center",display:"flex"}}>
                            <label htmlFor="outlined-basic">Morning slots</label>
                            <TextField size="small" sx={{width:"50px",margin:"0px 0px 0px 10px"}} id="morningSlot"  variant="outlined" />
                          </Box>
                          <Box sx={{alignItems:"center",display:"flex"}}>
                          <label htmlFor="outlined-basic">Evening slots</label>
                            <TextField size="small" sx={{width:"50px", margin:"0px 0px 0px 10px"}} id="eveningSlot"  variant="outlined" />
                          </Box>
                        </Box>
                      </Box>            
                  </Grid>
          </Grid>
             </Box>
          </Grid>
          <Grid item  xs={12} sm={12} md={12} lg={4} xl={5}>
          <Box sx={{backgroundColor:"#EEF0FA" , height:"100%", padding:"30px 20px"}}>
            <h3>Token Generation</h3>
            <Box>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel labelPlacement="end" value="female" control={<Radio />} label="Sequential Number (1, 2, 3…)" />
                <FormControlLabel labelPlacement="end" value="male" control={<Radio />} label="Random Number (2 digits)" />
              </RadioGroup>
            </FormControl>
            </Box>
          </Box>          
          </Grid>
      </Grid>
      <Grid container mt={2}>
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12}>
            <Box sx={{backgroundColor:"#EEF0FA"  , padding:"30px 20px"}}>
              <h3>Notifications</h3>
                <h4 style={{marginTop:"15px"}}>Cancellation</h4>
                <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                  <Grid item xl={6} lg={6} md={6} xs={8} sm={8} mt={3}>
                    <Typography sx={{fontSize:"15px", fontWeight:"400"}}>Inform patients about cancellation through SMS or Whatsapp </Typography>
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} xs={4} sm={4}>
                    <Box >
                      <FormControl sx={{width:"100px"}}>
                        {/* <InputLabel variant="outlined" id="demo-simple-select-label">YES</InputLabel> */}
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          // label="Age"
                          variant="outlined"
                          onChange={handleChange}
                          size="small"
                        >
                          <MenuItem value={10}>Yes</MenuItem>
                          <MenuItem value={20}>No</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
              <Box mt={2}>
                <h4>Delay or Advance Consultation</h4>
                <Typography sx={{fontSize:"15px", fontWeight:"400", marginTop:"5px"}}>Inform patients about the time adjustment through SMS or Whatsapp </Typography>
              </Box>
              <Box mt={2} >
                <h4>Change of Appointment Slot Notifications</h4>
                <Typography sx={{fontSize:"15px", fontWeight:"400", marginTop:"5px"}}>Inform patients about the change of appointment slot through SMS or Whatsapp</Typography>
              </Box>
            </Box>
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} xs={6} sm={6}>
                <Button type="submit"   sx={{ mt: 3, mb: 2, backgroundColor:"#41BA8F" , color:"#FFFFFF", border:"1px solid #FFF", borderRadius:"50px", height:"40px", 
                '&:hover': { background:'#41BA8F' }, width:"154px"
                }}>
                    Save
                </Button>
      </Grid>
      </Box>
    </Box>
  );
}
