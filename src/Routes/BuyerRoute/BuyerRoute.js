import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import UseBuyer from '../../hooks/UseBuyer';
import Loading from '../../Pages/Loading/Loading';

const BuyerRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = UseBuyer(user?.email);
    const location = useLocation(); 

    if(loading || isBuyerLoading){
        return <Loading></Loading>
    }

    if(user && isBuyer){
        return children;
    }
    return <Navigate to='/login' state={{form: location}} replace></Navigate>
    
};

export default BuyerRoute;