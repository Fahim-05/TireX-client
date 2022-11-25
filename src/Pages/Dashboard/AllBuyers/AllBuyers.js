import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allbuyers')
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button className="btn btn-ghost bg-red-600 border-none text-white btn-outline btn-xs">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;