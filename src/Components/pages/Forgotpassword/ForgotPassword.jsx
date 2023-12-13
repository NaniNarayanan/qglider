import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GliderLogo from "../../../Assets/qgliderlogo.png";
import Doctor from "./../Login/Doctor.png";
import { Avatar, IconButton, InputAdornment } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { MuiOtpInput } from "mui-one-time-password-input";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EditIcon from '@mui/icons-material/Edit';

export default function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [otpSentMessage, setOtpSentMessage] = useState("");

  const isMobileNumber = /^[6-9][0-9]{9}$/.test(mobilenumber);
  const isEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{3,}\.[a-z]{2,4}$/.test(
    mobilenumber
  );

  const inputIcon = isEmail ? (
    <EmailOutlinedIcon sx={{ color: "#000000" }} />
  ) :  (
    <PhoneOutlinedIcon sx={{ color: "#000000" }} />
  );

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const sendOTP = () => {
    setMinutes(2);
    setSeconds(59);
    if (isMobileNumber) {
      setOtpSentMessage(`OTP has been sent to your mobile number ending with ${mobilenumber.slice(-4)}`);
    } else if (isEmail) {
      setOtpSentMessage(`OTP has been sent to your email address ${mobilenumber}`);
    }
  };
  const resendOTP = () => {
    setMinutes(2);
    setSeconds(59);
    if (isMobileNumber) {
      setOtpSentMessage(`OTP has been sent to your mobile number ending with ${mobilenumber.slice(-4)}`);
    } else if (isEmail) {
      setOtpSentMessage(`OTP has been sent to your email address ${mobilenumber}`);
    }
  };

  useEffect(() => {
    if (localStorage.checkbox && localStorage.email !== "") {
      setUsername(localStorage.username);
      setMobilenumber(localStorage.password);
    }
  }, []);

  const onChangeValue = (event) => {
   
    if (event.target) {
        const { name, value } = event.target;
        if (name === "username") {
            setUsername(value);
          } else if (name === "mobilenumber") {
            setMobilenumber(value);
          }
    }
    else {
      setOtp(event);
      setOtpSentMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      "username": data.get("username"),
      "mobilenumber": data.get("mobilenumber"),
      "otp": otp,
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh", padding: "20px" }}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        elevation={6}
        sx={{
          padding: {
            xl: "0px 150px",
            xs: "20px",
            lg: "0px 100px",
            md: "0px 50px",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <img src={GliderLogo} alt={GliderLogo + ".logo"} />
          </Box>
          <Box sx={{ marginTop: "100px" }}>
            <h2 sx={{ fontWeight: "500" }}>Forgot Password</h2>
            <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
              If you don’t have an account registered
            </Typography>
            <Box display={"flex"}>
              <Typography>You can</Typography>
              <Link
                ml={1}
                sx={{
                  textDecoration: "none",
                  color: "#0C21C1",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Register here !
              </Link>
            </Box>
          </Box>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 4 }}
          >
            <TextField
              required
              fullWidth
              id="filled-required"
              label="Doctor's Name"
              name="username"
              value={username}
              placeholder="Enter your name"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon sx={{ color: "#000000" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                paddingBottom: "4%",
                "& label": { marginTop: "-1%", fontSize: "16px" },
                "& input": {
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#000000",
                },
              }}
              onChange={onChangeValue}
            />
            <TextField
              required
              fullWidth
              id="filled-required"
              label="Mobile Number or Email Address"
              name="mobilenumber"
              value={mobilenumber}
              placeholder="Enter your mobile number or mail id"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {inputIcon}
                  </InputAdornment>
                ),
                endAdornment:(
                    <InputAdornment position="end">
                    <Avatar sx={{width:"25px", height:"25px", backgroundColor:"#E77B18"}}><EditIcon sx={{ color: "#fff", fontSize:"18px" }} /></Avatar>
                  </InputAdornment>
                ),
              }}
              sx={{
                paddingBottom: "4%",
                "& input::-ms-reveal, & input::-ms-clear": {
                  display: "none",
                },
                "& label": { marginTop: "-1%", fontSize: "16px" },
                "& input": {
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#000000",
                },
              }}
              onChange={onChangeValue}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <MuiOtpInput
                name="otp"
                value={otp}
                onChange={(event) => onChangeValue(event)}
                TextFieldsProps={{
                  placeholder: "-",
                  inputProps: { style: { color: "#000000", fontSize: "20px" } },
                }}
                height={70}
              />
                {otpSentMessage && (
                    <Typography
                    sx={{
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "#999999",
                        marginTop: "10px",
                    }}
                    >
                    {otpSentMessage}
                    </Typography>
                )}
            </Box>

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#41BA8F",
                color: "#FFFFFF",
                border: "1px solid #FFF",
                borderRadius: "50px",
                height: "70px",
                "&:hover": { background: "#41BA8F" },
                textTransform: "none"
              }}
              onClick={sendOTP}
            >
              Verify
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
                Didn’t receive OTP?
              </Typography>
              <Button
                onClick={resendOTP}
                sx={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#0C21C1",
                  textDecoration: "none",
                  marginLeft: "5px",
                  textTransform: "none"
                }}
              >
                Resend
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: "url(" + Doctor + ")",
          backgroundRepeat: "no-repeat",
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
