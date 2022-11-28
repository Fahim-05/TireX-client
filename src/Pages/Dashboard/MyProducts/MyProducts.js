import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../hooks/UseTitle';

const MyProducts = () => {

    useTitle('My Products');
    const { user } = useContext(AuthContext);

    const url = `https://tirex-server.vercel.app/products/${user?.email}`;

    const { data: myorders = [] } = useQuery({
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
                            <th>Posted On</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myorders.map((order, index) => <tr key={order._id}>
                                <td>
                                    {index + 1}.
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src={order.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{order.bikeName}</p>
                                </td>
                                <td className='text-green-600'>${order.resalePrice}</td>
                                <td>
                                    <p>{order.postDate}</p>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default MyProducts;