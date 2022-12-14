import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/UseAdmin';
import UseBuyer from '../hooks/UseBuyer';
import UseSeller from '../hooks/UseSeller';
import useTitle from '../hooks/UseTitle';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    useTitle('Dashboard');

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = UseBuyer(user?.email);
    const [isSeller] = UseSeller(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content ">
                        {
                            isBuyer && 
                            <li><Link to='/dashboard/myorders' className=' border border-orange-500'>My Orders</Link></li>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addproduct' className=' border border-orange-500'>Add Product</Link></li>
                                <li><Link to='/dashboard/myproducts' className=' border border-orange-500'>My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allorders' className=' border border-orange-500'>All Orders</Link></li>
                                <li><Link to='/dashboard/allsellers' className=' border border-orange-500'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers' className=' border border-orange-500'>All Buyers</Link></li>
                                <li><Link to='' className=' border border-orange-500'>Reported Items</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;