import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from '../Components/pages/Dashboard/Dashboard';

import ManageAppointment from '../Components/pages/ManageAppointment/ManageAppointment';
import ManageUsers from '../Components/pages/ManageUsers/ManageUsers';
import SettingPage from '../Components/pages/Setting/SettingPage';
import AddUsers from '../Components/pages/ManageUsers/AddUsers';

// import SignupPage from '../Components/pages/SignUp/SignupPage';


export default function AppRoutes() {
  return (
   <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manageappointments" element={<ManageAppointment/>} />
      <Route path="/manageusers" element={<ManageUsers/>} />
      <Route path="/manageusers/addusers" element={<AddUsers/>} />
      <Route path="/settings" element={<SettingPage/>} />
   </Routes>
  )
}
