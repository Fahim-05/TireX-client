import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const orders = useLoaderData();
    const {resalePrice, image, bikeName} = orders;

    return (
        <div>
            <div className='flex items-center gap-2'>
                <h1 className='text-xl'>Payment for <span className='text-orange-500'>{bikeName}</span></h1>
                <div className="avatar border-2 border-orange-500 rounded-full">
                    <div className="mask mask-circle w-10 h-10">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </div>
            <p className='text-lg'>Please pay <span className='text-green-500 font-bold'>${resalePrice} </span>for your order</p>


        </div>
    );
};

export default Payment;