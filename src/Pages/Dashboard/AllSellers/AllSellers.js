import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers')
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
                            sellers.map((seller, index) => <tr>
                                <th>{index+1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button className="btn btn-ghost bg-red-600 border-none text-white btn-outline btn-xs">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;