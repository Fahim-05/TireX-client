import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllOrders = () => {



    const { data: allbookings = [] } = useQuery({
        queryKey: ['allbookings'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allbookings');
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
                            <th>Person</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allbookings?.map((booking, index) => <tr key={booking._id}>
                                <td>
                                    {index + 1}.
                                </td>
                                <td>
                                    <p>{booking?.userName}</p>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-circle w-10 h-10">
                                            <img src={booking?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{booking?.bikeName}</p>
                                </td>
                                <td className='text-green-600'>${booking?.resalePrice}</td>
                                <td>
                                    {
                                        !booking?.paid &&
                                        <span className='text-red-500 font-bold'>Unpaid</span>
                                    }
                                    {
                                        booking?.paid && <span className='text-green-500 font-bold'>Paid</span>
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

export default AllOrders;