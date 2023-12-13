// ------------- React Library -----------

import * as React from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
// ------------ custom component and Files -----------
import "./App.css"
import LoginRoute from "./Routes/LoginRoute";
import HomePage from "./Components/pages/Home/HomePage";
import "./ActivePage/page"
import { ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// ------------ custom icons and images -------


const drawerWidth = 280;
function App() {
  const Location = useLocation()
  const isLogIn = Location.pathname === "/" || Location.pathname === "/login" || Location.pathname === "/signup" || Location.pathname === "/forgetpassword";
  console.log(isLogIn)

  return (
    <>
      <div className="AppGlider">
        {isLogIn ? (
          <Box>
            <LoginRoute />
          </Box>
        ) : (<Box>
          <HomePage />
        </Box>
        )}
        <ToastContainer
         position="top-center"
         autoClose={3000} 
         hideProgressBar={true}
         transition={Zoom}
        theme="colored"
        toastStyle={{width:"125%"}}/>
      </div>
    </>
  );
}

export default App;
