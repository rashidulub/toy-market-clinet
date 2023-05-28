import { useContext } from "react";
import { AuthContext } from "../../provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const  PrivateRoute = ({children}) => {
    const {user ,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <button className="btn loading">loading</button>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;