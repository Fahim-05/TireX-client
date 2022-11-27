import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {


    const [deteleSeller, setDeleteSeller] = useState(null);



    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers')
            const data = await res.json();
            return data;
        }
    });


    const closeModal = () => {
        setDeleteSeller(null);
    };


    const handleDeleteSeller = (seller) => {
        fetch(`http://localhost:5000/sellers/${seller._id}`, {
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
            <h1 className='text-xl text-orange-600 font-bold uppercase my-6'>All Seller</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.userType}</td>
                                <td><button className='btn btn-xs bg-blue-500 text-white btn-outline border-none'>Verify</button></td>
                                <td>
                                    <label
                                        onClick={() => setDeleteSeller(seller)}
                                        htmlFor="confirmationModal"
                                        className="btn btn-ghost bg-red-600 border-none text-white btn-outline btn-xs"
                                    >Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deteleSeller && <ConfirmationModal
                    title={`Are you sure You want to Delete?`}
                    message={`If you delete ${deteleSeller.name}. It cannot be undone!`}
                    closeModal={closeModal}
                    successAction={handleDeleteSeller}
                    modalData={deteleSeller}
                    successButton="Delete"
                ></ConfirmationModal>

            }
        </div>
    );
};

export default AllSellers;