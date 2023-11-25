import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useUser = () => {
    const {user} = useContext(AuthContext)
    
    return user;
};

export default useUser;