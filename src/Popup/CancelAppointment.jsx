import { Backdrop, Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Modal, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


export default function CancelAppointment({open, onClose}) {

    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

  return (
    <>  
        <Modal aria-labelledby="modal-title" aria-describedby="modal-description" open={open} onClose={onClose} >
            <Backdrop open={open} sx={{zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "rgba(0, 0, 0, 0.5)",}}>
                <Paper sx={{ maxWidth:{xl:"100%", lg:"100%", md:"80%", sm:"80%", xs:"80%"}, borderRadius:"10px"}}>
                    <Grid sx={{borderRadius:"10px"}} container>
                        <Grid item xs={12} sx={{backgroundColor:"#EEF0FA", borderRadius:"10px"}}>
                            <Box sx={{padding:"20px 30px"}}>
                                <Typography sx={{fontSize:"18px", fontWeight:"600", color:"#243665"}}>Cancel Appointment</Typography>
                            </Box>
                        </Grid>
                        <Grid container sx={{padding:"15px 0px 15px 0px"}}>
                            <Grid item xl={12} lg={12} md={12} xs={12} sm={12}>
                                <Grid container sx={{padding:"0px 30px"}}>
                                    <Grid item xl={4} lg={4} md={4} xs={4} sm={4} sx={{borderRight:"1px solid #000000", paddingRight:"10px"}}>
                                        <Box>
                                        <Stack direction="column"  spacing={2}>
                                                <Grid display={'flex'}  alignItems={'center'} gap={4}>
                                                    <FormLabel>From</FormLabel>
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                            <TimePicker
                                                            slotProps={{ textField: { size: 'small', } }}
                                                            value={value}
                                                            onChange={(newValue) => setValue(newValue)}
                                                            />
                                                        </DemoContainer>
                                                    </LocalizationProvider>
                                                </Grid>
                                                <Grid display={'flex'}  alignItems={'center'} gap={6.5}>
                                                    <FormLabel>To</FormLabel>
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                            <TimePicker
                                                            slotProps={{ textField: { size: 'small', } }}
                                                            value={value}
                                                            onChange={(newValue) => setValue(newValue)}
                                                            />
                                                        </DemoContainer>
                                                    </LocalizationProvider>
                                                </Grid>                                                
                                            </Stack>
                                        </Box>
                                    </Grid>
                                    <Grid item xl={7} lg={7} md={7} xs={7} sm={7} sx={{padding:"0px 0px 0px 30px"}}>
                                        <Box>
                                            <Grid display={'flex'} alignItems={'center'} gap={2}>
                                                <FormLabel sx={{fontSize:"14px", fontWeight:"400", color:"#000"}}>Appointment For</FormLabel>
                                                <TextField type='date' size='small'/>
                                            </Grid>
                                            <Grid sx={{marginTop:"4%"}}>
                                                <Typography sx={{fontSize:"16px", fontWeight:"600", color:"#000"}}>Total Appointments: 20</Typography>
                                            </Grid>
                                            <Grid item xl={12} lg={12} md={12} xs={12} sm={12}  sx={{marginTop:"4%"}}>
                                                <Grid container spacing={0}>
                                                    <Grid item xl={6} lg={6} md={6} xs={6} sm={6}>
                                                        <FormControl>
                                                            <Button variant="outlined" color="warning" sx={{ fontSize: "13px", fontWeight: "500", width: '160px', height:"40px", padding:"4px 6px" }}>
                                                                Patients in Que-07
                                                            </Button>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xl={6} lg={6} md={6} xs={6} sm={6}>
                                                        <FormControl>
                                                            <Button variant="outlined" color="error" sx={{ fontSize: "13px", fontWeight: "500",  width: '200px', height:"40px", padding:"4px 6px" }}>
                                                                Patients on Arrived-08
                                                            </Button>
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid sx={{marginTop:"4%"}}>
                                                <Grid>
                                                    <Typography sx={{fontSize:"14px", fontWeight:"400", color:"#000"}}>All appointments from the specified time will be cancelled.</Typography>
                                                    <Typography sx={{fontSize:"14px", fontWeight:"400", color:"#000"}}>SMS or WhatsApp notification will be sent to <span style={{fontSize:"14px", fontWeight:"600", color:"#000"}}>15 patients.</span></Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid sx={{marginTop:"4%"}}>
                                                <Grid>
                                                    <FormLabel sx={{fontSize:"14px", fontWeight:"400", color:"#000"}}>Reason for cancelation:(optional)</FormLabel>
                                                    <TextField fullWidth size='xl'/>
                                                </Grid>
                                            </Grid>
                                        </Box>
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
                                    </Grid>
                                </Grid>
                            </Grid> 
                        </Grid>
                    </Grid>
                </Paper>
            </Backdrop>
        </Modal>
    </>
  )
}



