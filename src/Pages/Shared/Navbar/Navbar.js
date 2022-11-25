import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    //log our call
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li><button onClick={handleLogOut}>Logout</button></li>
                    <div className='ml-10'>
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt='' />
                            </div>
                            <p className='ml-4 mt-2'>{user?.email}</p>
                        </div>
                    </div>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </>
        }

    </React.Fragment>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className='flex avatar'>
                        <div className="w-16 rounded">
                            <img src={logo} alt='' />
                        </div>
                        <Link className="btn btn-ghost normal-case text-4xl text-orange-600">TireX</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;