import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {

    const [deteleBuyer, setDeleteBuyer] = useState(null);
    



    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allbuyers')
            const data = await res.json();
            return data;
        }
    });





    const closeModal = () => {
        setDeleteBuyer(null);
    };


    const handleDeleteBuyer = (buyer) => {
        fetch(`http://localhost:5000/buyers/${buyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer $${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Deleted Successfully!')
                refetch();
            })

    };


    return (
        <div>
            <h1 className='text-xl text-orange-600 font-bold uppercase my-6'>All Buyer</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td className='text-green-500'>{buyer.userType}</td>
                                <td>
                                    <label onClick={() => setDeleteBuyer(buyer)} htmlFor="confirmationModal" className="btn btn-ghost bg-red-600 border-none text-white btn-outline btn-xs">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deteleBuyer && <ConfirmationModal
                    title={`Are you sure You want to Delete?`}
                    message={`If you delete ${deteleBuyer.name}. It cannot be undone!`}
                    closeModal={closeModal}
                    successAction={handleDeleteBuyer}
                    modalData={deteleBuyer}
                    successButton="Delete"
                ></ConfirmationModal>

            }
        </div>
    );
};

export default AllBuyers;