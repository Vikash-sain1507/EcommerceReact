import React from 'react'
import {Navigate, useLocation} from "react-router-dom"
const AuthGuard = ({children}) => {
    const isAuthenticated = JSON.parse(sessionStorage.getItem('vikashDetails'))
    let location = useLocation();
    if(!isAuthenticated?.jwtToken) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children
};
export default AuthGuard;