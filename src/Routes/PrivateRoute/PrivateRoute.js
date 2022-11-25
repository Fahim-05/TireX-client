import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Loading from '../../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation(); 

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to='/login' state={{form: location}} replace></Navigate>
    }
    return children;
    
};

export default PrivateRoute;