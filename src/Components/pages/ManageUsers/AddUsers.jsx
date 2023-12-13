import { Box, Breadcrumbs, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Menu, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import './addusers.css'
import BioDetails from '../../ReuseComponents/Bio/BioDetails';
import { CheckBox } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../ReuseComponents/BreadCrumbs/BreadCrumbs';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AddUsers() {

    const [selectedValue, setSelectedValue] = useState('');

    const [ formData, setFormData ] = useState({
        fullName:"",
        userType:[],
        email:"",
        city:"",
        name:"",
        check:"",
        mobileNumber:"",
        doctor:"",
        state:"",
        address:"",
    })

    // const handleChange = (event) => {
    //     setSelectedValue(event.target.value);
    //   };

      const onChangeUserType = (event) => {
        setFormData({ ...formData, userType: Array.isArray(event.target.value) ? event.target.value : [event.target.value] });
      };
      const onChangeCity = (event) => {
        setFormData({ ...formData, city: event.target.value });
      };
      const onChangeState = (event) => {
        setFormData({ ...formData, state: event.target.value });
      };
    
      const onChangeValue = (event) => {
        const {name, value} = event.target;
        setFormData({ ...formData, [name]:value });
      }

      const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
      }

  return (
    <div>
        <BreadCrumbs crumbs={['Dashboard', 'Manage Users', 'Add Users']} paths={['/dashboard', '/manageusers', '/manageusers/addusers']} selected={(crumb) => console.log("hello",crumb)} />
        <Grid container spacing={0}>
            <Grid item xs={12} md={12} lg={12}>
                <Box sx={{ padding: "15px 0px" }}>
                    <h3>Appointments Today</h3>
                </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12}>
                <BioDetails />          
            </Grid>
        </Grid>
        <Box sx={{padding:"20px 40px"}}>
            <Box><Typography sx={{fontSize:"23px", fontWeight:"400"}}>User Information</Typography></Box>
            <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={4} mt={0}>                  
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <FormControl fullWidth sx={{gap:"40px 5px"}}>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
                                    <FormLabel htmlFor="fullName"  sx={{ fontSize: "14px", fontWeight: "400", color: "#000000", flex:1 }}>
                                    Full Name
                                    </FormLabel>
                                    <TextField id="fullName" name='fullName' value={formData.fullName} variant="outlined" size="small" sx={{width:"80%"}} onChange={onChangeValue}/>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <FormLabel htmlFor="userType"  sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>User Type</FormLabel>
                                    <Select
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        id="userType"
                                        sx={{ width: '80%' }}
                                        value={formData.userType}
                                        name='userType'
                                        onChange={onChangeUserType}
                                        multiple  
                                        MenuProps={{
                                            sx: {
                                              "&.MuiMenuItem-root": {
                                                backgroundColor: "pink"
                                              }
                                            }
                                          }}
                                        >
                                        <MenuItem value='admin' ><Checkbox checked={formData.userType.includes('admin')} />Admin</MenuItem><Divider/>
                                        <MenuItem value='doctor' ><Checkbox checked={formData.userType.includes('doctor')} />Doctor</MenuItem><Divider/>
                                        <MenuItem value='nurse' ><Checkbox checked={formData.userType.includes('nurse')} />Nurse</MenuItem>
                                    </Select>                                 
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <FormLabel htmlFor="email"  sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>
                                    Email Address
                                    </FormLabel>
                                    <TextField id="email" variant="outlined" size="small" sx={{width:"80%"}} name='email' value={formData.email} onChange={onChangeValue}/>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <FormLabel htmlFor="city"  sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>City</FormLabel>
                                    <Select
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        id="city"
                                        value={formData.city}
                                        name='city'
                                        onChange={onChangeCity}
                                        sx={{ width: '80%' }}
                                        >
                                        <MenuItem value='coimbatore'>Coimbatore</MenuItem>
                                        <MenuItem value='chennai'>Chennai</MenuItem>
                                        <MenuItem value='trichy'>Trichy</MenuItem>
                                    </Select>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <FormLabel htmlFor="userName"  sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>
                                    User Name
                                    </FormLabel>
                                    <TextField id="userName" variant="outlined" size="small" sx={{width:"80%"}} name='name' value={formData.name} onChange={onChangeValue}/>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <FormLabel htmlFor="password"  sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>
                                    Password
                                    </FormLabel>
                                    <TextField id="password" variant="outlined" size="small" sx={{width:"80%"}} name='check' value={formData.check} onChange={onChangeValue}/>
                                </Box>
                            </FormControl>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <FormControl fullWidth sx={{gap:"40px 5px"}}>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <FormLabel htmlFor="mobileNumber"  sx={{ fontSize: "14px", fontWeight: "400", color: "#000000", flex:1 }}>
                                    Mobile Numnber
                                    </FormLabel>
                                    <TextField id="mobileNumber" variant="outlined" size="small" sx={{width:"80%"}} name='mobileNumber' value={formData.mobileNumber} onChange={onChangeValue}/>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <FormLabel htmlFor="selectDoctor"  sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>Doctor</FormLabel>
                                    <Select
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        id="selectDoctor"
                                        name='doctor'
                                        value={formData.doctor}
                                        onChange={onChangeValue}
                                        sx={{ width: '80%' }}
                                        >
                                        <MenuItem value='Nayana'>Nayana</MenuItem>
                                        <MenuItem value='Joe'>Joe</MenuItem>
                                        <MenuItem value='Kim'>Kim</MenuItem>
                                    </Select>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <FormLabel htmlFor="state"  sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>State</FormLabel>
                                    <Select
                                        size='small'
                                        labelId="demo-simple-select-label"
                                        id="state"
                                        name='state'
                                        value={formData.state}
                                        onChange={onChangeState}
                                        sx={{ width: '80%' }}
                                        >
                                        <MenuItem value='tamilnadu'>Tamil Nadu</MenuItem>
                                        <MenuItem value='kerala'>Kerala</MenuItem>
                                        <MenuItem value='karnataka'>Karanataka</MenuItem>
                                    </Select>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <FormLabel htmlFor="address"  sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>
                                    Address
                                    </FormLabel>
                                    <TextField id="address" variant="outlined" size="large"  sx={{width:"80%"}} name='address' value={formData.address} onChange={onChangeValue}/>                                </Box>
                            </FormControl>
                        </Grid>                
             </Grid>
             <Box mt={8}><Typography sx={{fontSize:"23px", fontWeight:"400"}}>Access Permissions</Typography></Box>
             <Grid item xl={12} lg={12} md={12} xs={12} sm={12}>
                <FormGroup aria-label="position" row>
                <FormControlLabel value="dashboard" control={<Checkbox />} label="Dashboard" labelPlacement="end" />
                <FormControlLabel value="manageappointments" control={<Checkbox />} label="Manage Appointments" labelPlacement="end" />
                <FormControlLabel value="manageusers" control={<Checkbox />} label="Manage Users" labelPlacement="end" />
                <FormControlLabel value="settings" control={<Checkbox />} label="Settings" labelPlacement="end" />
                </FormGroup>
             </Grid>
             <Box display={'flex'} alignItems={'center'} >
                <Button type="submit"   sx={{ mt: 3, mb: 2, mr: 2, backgroundColor:"#D13C3C" , color:"#FFFFFF", border:"1px solid #FFF", borderRadius:"50px", height:"40px", 
                '&:hover': { background:'#D13C3C' }, width:"154px"
                }} >
                    Cancel
                </Button>
                <Button type="submit"   sx={{ mt: 3, mb: 2, backgroundColor:"#41BA8F" , color:"#FFFFFF", border:"1px solid #FFF", borderRadius:"50px", height:"40px", 
                '&:hover': { background:'#41BA8F' }, width:"154px"
                }}>
                    Confirm
                </Button>
            </Box>
            </Box>
        </Box>

    </div>
  )
}
