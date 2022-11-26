import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const ErrorShow = () => {

    const error = useRouteError();

    const { user, logOut } = useContext(AuthContext);

    //log our call
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <p className='text-red-500'>Something went wrong!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <p className='text-green-500'>Please <button onClick={handleLogOut}>Logout</button> and Log back in!</p>
        </div>
    );
};

export default ErrorShow;