import React from 'react';
import { Backdrop, Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Modal, Paper, Stack, TextField, Typography } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimeAdjustment({open, onClose}) {

    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

  return (
    <>
        <Modal aria-labelledby="modal-title" aria-describedby="modal-description" open={open} onClose={onClose}>
            <Backdrop open={open} sx={{zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "rgba(0, 0, 0, 0.5)",}}>
                <Paper sx={{ maxWidth:{xl:"100%", lg:"100%", md:"80%", sm:"80%", xs:"80%"}, borderRadius:"10px"}}>
                    <Grid container sx={{borderRadius:"10px"}}>
                        <Grid item xs={12} sx={{backgroundColor:"#EEF0FA", borderRadius:"10px"}}>
                            <Box sx={{padding:"20px 30px"}}>
                                <Typography sx={{fontSize:"18px", fontWeight:"600", color:"#243665"}}>Time Adjustment</Typography>
                            </Box>
                        </Grid>                    
                        <Grid container sx={{padding:"15px 0px 15px 0px"}}>
                            <Grid item xl={12} lg={12} md={12} xs={12} sm={12}>
                                <Grid container sx={{padding:"5px 30px"}}>
                                    <Grid item xl={5} lg={5} md={5} xs={5} sm={5} sx={{borderRight:"1px solid #000000", paddingRight:"10px"}}>
                                        <Grid>
                                            <Stack direction="row"  spacing={2}>
                                                <FormControlLabel labelPlacement='start' control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<RadioButtonCheckedIcon/>}/>} label='Delay'/>
                                                <FormControlLabel labelPlacement='start' control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<RadioButtonCheckedIcon/>}/>} label='Advance'/>
                                            </Stack>
                                        </Grid>
                                        <Grid mt={4} display={'flex'}  alignItems={'center'} gap={1}>
                                            <FormLabel>Duration</FormLabel>
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
                                        <Grid mt={6} >
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
                                        </Grid>
                                    </Grid>

                                    <Grid item xl={7} lg={7} md={7} xs={7} sm={7} sx={{padding:"0px 0px 0px 30px"}}>
                                        <Box>
                                            <Grid sx={{marginTop:"4%"}}>
                                                <Grid sx={{textAlign:'center'}}>
                                                    <Typography sx={{fontSize:"14px", fontWeight:"400", color:"#000"}}>Time adjustment of 30 Mins will be notified to <span style={{fontSize:"14px", fontWeight:"600", color:"#000"}}>15 patients</span></Typography>
                                                    <Typography sx={{fontSize:"14px", fontWeight:"400", color:"#000"}}>Through SMS or WhatsApp.</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid sx={{marginTop:"8%"}}>
                                                <Grid>
                                                    <FormLabel sx={{fontSize:"14px", fontWeight:"400", color:"#000"}}>Reason for cancelation:</FormLabel>
                                                    <TextField fullWidth size='xl'/>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box>
                                        <Box display={'flex'} alignItems={'center'} sx={{marginTop:"8%"}}>
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
