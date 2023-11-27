import { useEffect, useState } from "react";
import useUser from "./useUser";


const useDbUser = () => {
    const user = useUser()
    const [dbUser, setDbUser] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setDbUser(data))
    } ,[user?.email])
    
    return dbUser;
};

export default useDbUser;