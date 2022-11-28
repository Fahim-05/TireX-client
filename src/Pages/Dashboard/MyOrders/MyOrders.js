import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../hooks/UseTitle';

const MyOrders = () => {

    useTitle('My Orders');
    const { user } = useContext(AuthContext);

    const url = `https://tirex-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h1 className='text-xl text-orange-600 font-bold uppercase my-6'>My Orders</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody> 

                        {
                            bookings.map((booking, index) => <tr key={booking._id}>
                                <td>
                                    {index + 1}.
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{booking.bikeName}</p>
                                </td>
                                <td className='text-green-600'>${booking.resalePrice}</td>
                                <td>
                                    {
                                        !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-ghost btn-outline btn-xs">Payment</button></Link>
                                    }
                                    {
                                        booking.paid && <span className='text-green-500 font-bold'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;