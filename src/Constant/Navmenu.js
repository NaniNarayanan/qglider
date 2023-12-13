import DashboardIcon from "../Assets/navbar/dashboard.svg";
import Appointment from "../Assets/navbar/doctor-appointment.svg";
import Users from "../Assets/navbar/Manage_user.svg";
import Logout from "../Assets/navbar/logout.svg";
import Setting from "../Assets/navbar/Setting.svg"


const NavItems = [
    {
      name: "Dashboard",
      icon: DashboardIcon,
      url : "/dashboard"
    },

    {
      name: "Manage Appointments",
      icon: Appointment,
      url : "/manageappointments"
    },
    {
      name: "Manage users",
      icon: Users,
      url : "/manageusers"
    },
    {
      name: "Settings",
      icon: Setting,
      url : "/settings"
    },
    {
      name: "Logout",
      icon: Logout,
      url : "/login"
    },
  ];

  export default NavItems