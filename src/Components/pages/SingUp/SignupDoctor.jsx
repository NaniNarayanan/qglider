import  React, {  useEffect, useState } from "react"; 
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";

// -------- custom icons and images -----------

import GliderLogo from "../../../Assets/qgliderlogo.png";
import Doctor from "../Login/Doctor.png";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function SignupDoctor() {

  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = useState({});

  const [ formData, setFormData ] = useState({
    fullName:"",
    hospitalName:"",
    ivr_ContactNumber:"",
    mobileNumber:"",
    email:"",
    state:"",
    city:"",
    address:"",
    name:"",
    check:"",
  })


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onChangeState = (event) => {
    setFormData({ ...formData, state: event.target.value });
  };

  const onChangeCity = (event) => {
    setFormData({ ...formData, city: event.target.value });
  };



  const onChangeValue = (event) => {
    const { name, value } = event.target;
    let validInput = true;
    let errorMessage = "";
    if(name === "fullName"){
        validInput = /^[a-zA-Z'-\s]{3,50}$/.test(value);
        errorMessage = validInput ? "" : "Invalid Full Name";
    }
    else if (name === "hospitalName") {
        validInput = /^[a-zA-Z0-9 ]+$/.test(value);
        errorMessage = validInput ? "" : "Invalid Hospital or Clinic Name";
    }
    else if (name === "ivr_ContactNumber") {
        validInput = /^[6-9][0-9]{9}$/.test(value);
        errorMessage = validInput ? "" : "Invalid IVR Contact Number";
    }
    else if (name === "mobileNumber") {
        validInput = /^[6-9][0-9]{9}$/.test(value);
        errorMessage = validInput ? "" : "Invalid Mobile Number";
    }
    else if (name === "email") {
        validInput = /^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{3,}\.(co|com|in|com\.in|co\.in|org|net|edu|gov|mil|biz|info|name|museum|coop|aero|[a-z]{2,4})$/.test(value);
        errorMessage = validInput ? "" : "Invalid Email Address";
    }
    else if (name === "address") {
    }
    else if (name === "name") {
        validInput = /^[0-9A-Za-z!@#$%&*_\//-]{6,16}$/.test(value);
        errorMessage = validInput ? "" : "Invalid User Name"
    } 
    else if (name === "check") {
        validInput = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(value);
        errorMessage = validInput ? "" : "Invalid Password"
    }else {
        validInput = /^[a-zA-Z0-9\s,.'/-]+(?:[\s-][a-zA-Z0-9\s,.'/-]+)*$/.test(value);
        errorMessage = validInput ? "" : "Invalid Personal Details";
    }
    setFormData({ ...formData, [name]: value, });
    setErrors({...errors, [name]: errorMessage});
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = {};

    if(!formData.fullName || !formData.fullName.trim()){
        formErrors.fullName = "Full Name is required"
    }
    if(!formData.hospitalName || !formData.hospitalName.trim()){
        formErrors.fullName = "Full Name is required"
    }
    if(!formData.ivr_ContactNumber || !formData.ivr_ContactNumber.trim()){
        formErrors.ivr_ContactNumber = "Full Name is required"
    }
    if(!formData.mobileNumber || !formData.mobileNumber.trim()){
        formErrors.mobileNumber = "Full Name is required"
    }
    if(!formData.email || !formData.email.trim()){
        formErrors.fullName = "Full Name is required"
    }
    if(!formData.state || !formData.state.trim()){
        formErrors.state = "Full Name is required"
    }
    if(!formData.city || !formData.city.trim()){
        formErrors.city = "Full Name is required"
    }
    if(!formData.address || !formData.address.trim()){
        formErrors.address = "Full Name is required"
    }
    if(!formData.name || !formData.name.trim()){
        formErrors.name = "Full Name is required"
    }
    if(!formData.check || !formData.check.trim()){
        formErrors.check = "Full Name is required"
    }

    const hasErrors = Object.keys(formErrors).length > 0;

    setErrors(hasErrors);

    if(!hasErrors){
        console.log("Form Data:", formData);
    };
  };

  return (
    <Grid container component="main" sx={{ height: "100vh", padding: "20px" }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={6} elevation={6} sx={{padding: {xl:"0px 150px", xs:"20px", lg:"0px 100px", md:"0px 50px"} }}>
        <Box sx={{ display: "flex", flexDirection: "column", }} >
          <Box>
            <img src={GliderLogo} alt={GliderLogo + ".logo"} />
          </Box>
          <Box sx={{marginTop:"20px"}} >
            <h2 sx={{fontWeight:"500"}}>
              Sign up
            </h2>
            <Box sx={{marginTop:"10px"}}>
                <Typography sx={{fontSize:"16px", fontWeight:"400"}}>
                If you don’t have an account registered
                </Typography>
                <Box display={"flex"} >
                <Typography>
                    You can 
                </Typography>
                <Link to="/login" style={{textDecoration:"none", color:"#0C21C1", fontSize:"16px", fontWeight:"600", marginLeft:"4px"}}>
                    Login here !
                </Link>
                </Box>
            </Box>
          </Box>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4, }} >
          <TextField required fullWidth id="filled-required-fullName" label="Full Name" name="fullName" value={formData.fullName} placeholder="Enter Full Name" variant="standard" 
            error={!!errors.first_Name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <PersonOutlineOutlinedIcon sx={{color:"#000000"}}/>
                </InputAdornment>
              ),
            }}
            sx={{paddingBottom:"4%",
            "& label": {marginTop:"-1%" },
            "& input::placeholder": {
                fontSize: "16px",
                color: "#000000",
              },
              "@media (max-width: 600px)": {
                "& input::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            onChange={onChangeValue}
            />
            <FormHelperText style={{ color: "red" }}>{errors.fullName}</FormHelperText>
            <TextField required fullWidth id="filled-required-hospitalName" label="Hospital or Clinic Name" name="hospitalName" value={formData.hospitalName} placeholder="Enter Hospital or Clinic Name" variant="standard" 
            error={!!errors.hospitalName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <ApartmentOutlinedIcon sx={{color:"#000000"}}/>
                </InputAdornment>
              ),
            }}
            sx={{paddingBottom:"4%",
            "& label": {marginTop:"-1%"},
            "& input::placeholder": {
                fontSize: "16px",
                color: "#000000",
              },
              "@media (max-width: 600px)": {
                "& input::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            onChange={onChangeValue}
            />
            <FormHelperText style={{ color: "red" }}>{errors.hospitalName}</FormHelperText>
            <TextField required fullWidth id="filled-required-ivr_ContactNumber" label="Contact Number for IVR" name="ivr_ContactNumber" value={formData.ivr_ContactNumber} placeholder="Enter Contact Number for IVR" variant="standard" 
            error={!!errors.ivr_ContactNumber}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <PhoneOutlinedIcon sx={{color:"#000000"}}/>
                </InputAdornment>
              ),
            }}
            sx={{paddingBottom:"4%",
            "& label": {marginTop:"-1%"},
            "& input::placeholder": {
                fontSize: "16px",
                color: "#000000",
              },
              "@media (max-width: 600px)": {
                "& input::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            onChange={onChangeValue}
            />
            <FormHelperText style={{ color: "red" }}>{errors.ivr_ContactNumber}</FormHelperText>
            <TextField required fullWidth id="filled-required-mobileNumber" label="Mobile Number" name="mobileNumber" value={formData.mobileNumber} placeholder="Enter Mobile Number for OTP verification" variant="standard" 
            error={!!errors.mobileNumber}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <PhoneIphoneOutlinedIcon sx={{color:"#000000"}}/>
                </InputAdornment>
              ),
            }}
            sx={{paddingBottom:"4%",
            "& label": {marginTop:"-1%"},
            "& input::placeholder": {
                fontSize: "16px",
                color: "#000000",
              },
              "@media (max-width: 600px)": {
                "& input::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            onChange={onChangeValue}
            />
            <FormHelperText style={{ color: "red" }}>{errors.mobileNumber}</FormHelperText>
            <TextField required fullWidth id="filled-required-email" label="Email Address" name="email" value={formData.email} placeholder="Enter Email Address for OTP verification" variant="standard" 
            error={!!errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <EmailOutlinedIcon sx={{color:"#000000"}}/>
                </InputAdornment>
              ),
            }}
            sx={{paddingBottom:"4%",
            "& label": {marginTop:"-1%"},
            "& input::placeholder": {
                fontSize: "16px",
                color: "#000000",
              },
              "@media (max-width: 600px)": {
                "& input::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            onChange={onChangeValue}
            />
            <FormHelperText style={{ color: "red" }}>{errors.email}</FormHelperText>
            <Box display={'flex'} justifyContent={'space-between'} gap={2}>
            {/* State Select */}
            <FormControl required fullWidth variant="standard" sx={{ paddingBottom: '4%', 
            "& label": { marginTop: "-1%" },
            "& input::placeholder": {
                fontSize: "16px",
                color: "#000000",
              },
              "@media (max-width: 600px)": {
                "& input::placeholder": {
                  fontSize: "12px",
                },
              },
            }}>
                <InputLabel id="state-label">State</InputLabel>
                <Select
                labelId="state-label"
                id="state-select"
                label="State"
                value={formData.state}
                error={!!errors.state}
                onChange={onChangeState}
                startAdornment={
                    <InputAdornment position="start">
                    <LocationOnOutlinedIcon sx={{ color: "#000000" }} />
                    </InputAdornment>
                }
                >
                {/* Replace the options below with your actual state data */}
                <MenuItem value="state1">State 1</MenuItem>
                <MenuItem value="state2">State 2</MenuItem>
                {/* Add more MenuItem components as needed */}
                </Select>
            </FormControl>
            <FormHelperText style={{ color: "red" }}>{errors.state}</FormHelperText>
            {/* City Select */}
            <FormControl required fullWidth variant="standard" sx={{ paddingBottom: '4%', 
            "& label": { marginTop: "-1%" },
            "& input::placeholder": {
                fontSize: "16px",
                color: "#000000",
              },
              "@media (max-width: 600px)": {
                "& input::placeholder": {
                  fontSize: "12px",
                },
              },
            }}>
                <InputLabel id="city-label">City</InputLabel>
                <Select
                labelId="city-label"
                id="city-select"
                label="City"
                value={formData.city}
                error={!!errors.city}
                onChange={onChangeCity}
                startAdornment={
                    <InputAdornment position="start">
                    <LocationOnOutlinedIcon sx={{ color: "#000000" }} />
                    </InputAdornment>
                }
                >
                {/* Replace the options below with your actual city data */}
                <MenuItem value="city1">City 1</MenuItem>
                <MenuItem value="city2">City 2</MenuItem>
                {/* Add more MenuItem components as needed */}
                </Select>
            </FormControl>
            <FormHelperText style={{ color: "red" }}>{errors.city}</FormHelperText>
            </Box>
            <TextField fullWidth id="filled-required-address" label="Address" name="address" value={formData.address} variant="standard" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <LocationOnOutlinedIcon sx={{color:"#000000"}}/>
                </InputAdornment>
              ),
            }}
            sx={{paddingBottom:"4%",
            "& label": {marginTop:"-1%"},
            "& input::placeholder": {
                fontSize: "16px",
                color: "#000000",
              },
              "@media (max-width: 600px)": {
                "& input::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            onChange={onChangeValue}
            />
            <TextField required fullWidth id="filled-required-name" label="Username" name="name" value={formData.name} placeholder="Enter your Username" variant="standard" 
            error={!!errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <PersonOutlineOutlinedIcon sx={{color:"#000000"}}/>
                </InputAdornment>
              ),
            }}
            sx={{paddingBottom:"4%",
            "& label": {marginTop:"-1%"},
            "& input::placeholder": {
                fontSize: "16px",
                color: "#000000",
              },
              "@media (max-width: 600px)": {
                "& input::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            onChange={onChangeValue}
            />
            <FormHelperText style={{ color: "red" }}>{errors.name}</FormHelperText>
            <TextField required fullWidth id="filled-required-check" label="Password" name="check" value={formData.check} placeholder="Enter your Password"  variant="standard" 
            error={!!errors.check}
            type={showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsOutlinedIcon sx={{color:"#000000"}}/>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                  
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{paddingBottom:"4%", 
              '& input::-ms-reveal, & input::-ms-clear': {
                display: 'none',},
                "& label": {marginTop:"-1%"},
                "& input::placeholder": {
                    fontSize: "16px",
                    color: "#000000",
                  },
                  "@media (max-width: 600px)": {
                    "& input::placeholder": {
                      fontSize: "12px",
                    },
                  },
            }}
            onChange={onChangeValue}
            />
            <FormHelperText style={{ color: "red" }}>{errors.check}</FormHelperText>
            <Button type="submit"  fullWidth sx={{ mt: 0, mb: 0, backgroundColor:"#41BA8F" , color:"#FFFFFF", border:"1px solid #FFF", borderRadius:"50px", height:"70px", 
            '&:hover': { background:'#41BA8F' }, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }} >
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={false} sm={4} md={6} sx={{ backgroundImage: "url(" + Doctor + ")", backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
        }}
      />
    </Grid>
  );
}
