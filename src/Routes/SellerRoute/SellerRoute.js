import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import UseSeller from '../../hooks/UseSeller';
import Loading from '../../Pages/Loading/Loading';

const SellerRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isSeller, isSellerLoading] = UseSeller(user?.email);
    const location = useLocation(); 

    if(loading || isSellerLoading){
        return <Loading></Loading>
    }

    if(user && isSeller){
        return children;
    }
    return <Navigate to='/login' state={{form: location}} replace></Navigate>
    
};

export default SellerRoute;