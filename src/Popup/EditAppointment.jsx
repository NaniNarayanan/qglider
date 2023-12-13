import React from 'react';
import { Backdrop, Box, Button, FormControl, FormLabel, Grid, MenuItem, Modal,
    Paper, TextField, Typography, Select ,FormControlLabel ,
    RadioGroup ,Radio  } from '@mui/material'

export default function EditAppointment({open, onClose}) {
  return (
    <>
        <Modal aria-labelledby="modal-title" aria-describedby="modal-description" open={open} onClose={onClose}>
            <Backdrop open={open} sx={{zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "rgba(0, 0, 0, 0.5)",}}>
                <Paper sx={{ width:"650px" , borderRadius:"10px"}}>
                    <Grid  sx={{borderRadius:"15px"}} container>
                        <Grid item xs={12} sx={{backgroundColor:"#EEF0FA" , borderRadius:"10px"}}>
                            <Box sx={{padding:"20px 30px"}}>
                                <Typography sx={{fontSize:"18px", fontWeight:"600", color:"#243665"}}>Edit an Appointment</Typography>
                            </Box>
                        </Grid>
                        <hr/>
                        <Grid item md={12} xs={12} sm={12} sx={{padding:"0% 5% 5%"}} >
                        <Box component="form" noValidate>
                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={12}>
                                <FormControl>
                                    <Box display={'flex'}>
                                        <Box sx={{mt:"10px"}}> <FormLabel sx={{color:"#000000", fontSize:"14px", fontWeight:"400"}} lab id="demo-radio-buttons-group-label">Consultation Type</FormLabel> </Box>
                                        <Box sx={{margin:"0px 0px 0px 30px"}}>
                                            <RadioGroup
                                              row
                                              aria-labelledby="demo-radio-buttons-group-label"
                                              defaultValue="Normal"
                                              name="radio-buttons-group"
                                            >
                                              <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
                                              <FormControlLabel value="Emergency" control={<Radio />} label="Emergency" />
                                            </RadioGroup>
                                        </Box>
                                    </Box>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                <FormControl fullWidth>
                                    <Box display={'flex'}>
                                        <Box>
                                            <FormLabel htmlFor="availableSlot" sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>
                                                Select Open Slot
                                             </FormLabel>
                                        </Box>
                                        <Box sx={{margin:"0px 0px 0px 30px"}}>
                                            {/* <TextField id="availableSlot" variant="outlined" size="small" sx={{ width: '50%' }}/> */}
                                            <FormControl>
                                                <Select
                                                size='small'
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={"10:30 - 10:45 AM"}
                                                sx={{ width: '300%' }}
                                                >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <FormControl fullWidth>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <FormLabel htmlFor="patientName" required sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>
                                        Patient Name
                                        </FormLabel>
                                        <TextField id="patientName" variant="outlined" size="small" sx={{ width: '80%' }}/>
                                    </Box>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <FormControl fullWidth>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <FormLabel htmlFor="patientName" required sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>
                                        Mobile Number
                                        </FormLabel>
                                        <TextField id="patientName" variant="outlined" size="small" sx={{ width: '80%' }}/>
                                    </Box>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <FormControl fullWidth>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <FormLabel htmlFor="patientName" required sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>
                                        Mobile Type
                                        </FormLabel>
                                        <Select id="patientName" variant="outlined" size="small" sx={{ width: '80%' }}>
                                            <MenuItem value="">Select Mobile Type</MenuItem>
                                            <MenuItem value="male">Mobile Ios</MenuItem>
                                            <MenuItem value="female">Mobile Android</MenuItem>
                                            <MenuItem value="other">Telephone</MenuItem>
                                        </Select>
                                    </Box>
                                    </FormControl>                                    
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <FormControl fullWidth>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <FormLabel htmlFor="patientName" required sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>
                                        Payment Mode
                                        </FormLabel>
                                        <Select id="patientName" variant="outlined" size="small" sx={{ width: '80%' }}>
                                            <MenuItem value="">Select Mode of payment</MenuItem>
                                            <MenuItem value="male">Cash Payment</MenuItem>
                                            <MenuItem value="female">UPI Payment</MenuItem>
                                            <MenuItem value="other">Debit/Credit Card Payment</MenuItem>
                                        </Select>
                                    </Box>
                                    </FormControl>
                                </Grid>  
                                <Grid item xs={12} sm={12}>
                                    <FormControl fullWidth>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                        <FormLabel htmlFor="patientName" required sx={{ fontSize: "14px", fontWeight: "400", color: "#000000" }}>
                                        Visiting Status
                                        </FormLabel>
                                        <Select id="patientName" variant="outlined" size="small" sx={{ width: '80%' }}>
                                            <MenuItem value="">Select visiting Status</MenuItem>
                                            <MenuItem value="male">Open</MenuItem>
                                            <MenuItem value="female">In Que</MenuItem>
                                            <MenuItem value="other">Not Arrived</MenuItem>
                                        </Select>
                                        </Box>
                                    </FormControl>
                                </Grid>    
                                </Grid>

                            <Box>
                                <Box display={'flex'} alignItems={'center'} >
                                    <Button type="submit"   sx={{ mt: 3, mb: 2, mr: 2, backgroundColor:"#D13C3C" , color:"#FFFFFF", border:"1px solid #FFF", borderRadius:"50px", height:"40px", 
                                    '&:hover': { background:'#D13C3C' }, width:"154px"
                                    }}  onClick={onClose}>
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
                        </Grid>
                    </Grid>
                </Paper>
            </Backdrop>
        </Modal>
    </>
  )
}
