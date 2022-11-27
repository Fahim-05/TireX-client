import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import SellerVerifyModal from './SellerVerifyModal';

const AllSellers = () => {


    const [deteleSeller, setDeleteSeller] = useState(null);
    const [verifySeller, setVerifySeller] = useState(null);


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
        setVerifySeller(null);
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



    const handleVerifySeller = (seller) => {
        fetch(`http://localhost:5000/verifySeller/${seller.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledge) {
                    toast.success('Seller verified Successfully!');
                    refetch();
                }
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
                            sellers.map((seller, index) => <tr key={seller._id}>
                                <th>{index + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.userType}</td>
                                <td>
                                    {
                                        seller?.sellerStatus ?
                                            <>
                                            <p className='uppercase text-green-600 border border-green-600 text-center rounded-lg'>Verified</p>
                                            </>
                                            :
                                            <>
                                                <label
                                                    onClick={() => setVerifySeller(seller)}
                                                    htmlFor="seller-verify-modal"
                                                    className='btn btn-xs bg-blue-500 text-white btn-outline border-none'
                                                >Verify</label>
                                            </>
                                    }

                                </td>
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
            <>
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
            </>

            <>
                {verifySeller &&
                    <SellerVerifyModal
                        title={`Are you want to Verify: "${verifySeller.name}"`}
                        message={`If you verify ${verifySeller.name}. It cannot be undone!`}
                        closeModal={closeModal}
                        verifyAction={handleVerifySeller}
                        modalData={verifySeller}

                    ></SellerVerifyModal>
                }
            </>
        </div>
    );
};

export default AllSellers;