import { useLocation } from "react-router-dom";

function CurrentPage(){
    return useLocation().pathname
}

export default CurrentPage