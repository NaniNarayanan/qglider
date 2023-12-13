import React from 'react'
import { Routes, Route } from "react-router-dom";
import Loginpage from '../Components/pages/Login/Loginpage';
import ForgotPassword from '../Components/pages/Forgotpassword/ForgotPassword';
import SignupDoctor from '../Components/pages/SingUp/SignupDoctor';
import SignupOtp from '../Components/pages/SingUp/SignupOtp';

export default function LoginRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Loginpage />} />
                <Route path="/login" element={<Loginpage />} />
                <Route path="/signup" element={<SignupDoctor />} />
                <Route path="/sigupotp" element={<SignupOtp />} />
                <Route path="/forgetpassword" element={<ForgotPassword/>} />
            </Routes>
        </div>
    )
}
