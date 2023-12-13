import React from 'react'

import { toast } from 'react-toastify';


export const Alert = (Type, message) => {
     switch (Type) {
          case "success":
               toast.success(message);
               break;
          case "error":
               toast.error(message);
               break;
          case "warning":
               toast.warning(message);
               break;
          case "info":
               toast.info(message);
               break;
     }
}




