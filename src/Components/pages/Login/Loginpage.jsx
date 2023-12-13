import  React, {  useEffect } from "react"; 
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";

// -------- custom icons and images -----------

import GliderLogo from "../../../Assets/qgliderlogo.png";
import Doctor from "./Doctor.png";
import { IconButton, InputAdornment } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Loginpage() {

  const [showPassword, setShowPassword] = React.useState(false);
  const [name, setName] = React.useState("");
  const [check, setCheck] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);



  const handleClickShowPassword = () => setShowPassword((show) => !show);

  useEffect(() => {
    if (localStorage.checkbox && localStorage.email !== "") {
      setIsChecked(true);
      setName(localStorage.name);
      setCheck(localStorage.check);
    }
  }, []);

  const onChangeValue = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "check") {
      setCheck(value);
    }
  };

  const onChangeCheckbox = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      check: data.get("check"),
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh", padding: "20px" }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={6} elevation={6} sx={{padding: {xl:"0px 150px", xs:"20px", lg:"0px 100px", md:"0px 50px"} }}>
        <Box sx={{ display: "flex", flexDirection: "column", }} >
          <Box>
            <img src={GliderLogo} alt={GliderLogo + ".logo"} />
          </Box>
          <Box sx={{marginTop:"100px"}} >
            <h2 sx={{fontWeight:"500"}}>
              Sign in
            </h2>
            <Typography sx={{fontSize:"16px", fontWeight:"400"}}>
              If you don’t have an account registered
            </Typography>
            <Box display={"flex"} >
              <Typography>
                   You can 
              </Typography>
              <Link to="/signup"  style={{textDecoration:"none", color:"#0C21C1", fontSize:"16px", fontWeight:"600", marginLeft:"4px"}}>
              Register here !
              </Link>
            </Box>
          </Box>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4, }} >
            <TextField required fullWidth id="filled-required" label="Username" name="name" value={name} placeholder="Enter your Username" variant="standard" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <PersonOutlineOutlinedIcon sx={{color:"#000000"}}/>
                </InputAdornment>
              ),
            }}
            sx={{paddingBottom:"4%",
            "& label": {marginTop:"-1%", }
            }}
            onChange={onChangeValue}
            />
            <TextField required fullWidth id="filled-required" label="Password" name="check" value={check} placeholder="Enter your Password"  variant="standard" 
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
                "& label": {marginTop:"-1%"}
            }}
            onChange={onChangeValue}
            />

            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <FormControlLabel checked={isChecked} onChange={onChangeCheckbox} control={<Checkbox value="remember" color="primary" />} label="Remember me" />                
              <Link to="/forgetpassword" variant="body2" style={{textDecoration:"none", color:"#4D4D4D"}}>  Forgot password? </Link>
            </Box>
            <Link to="/dashboard">
              <Button type="submit"  fullWidth sx={{ mt: 3, mb: 2, backgroundColor:"#41BA8F" , color:"#FFFFFF", border:"1px solid #FFF", borderRadius:"50px", height:"70px", 
              '&:hover': { background:'#41BA8F' }
              }} >

                Sign In
              </Button>
            </Link>
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
