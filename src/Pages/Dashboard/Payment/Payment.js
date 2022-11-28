import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const orders = useLoaderData();
    const navigation = useNavigation();
    const { resalePrice, image, bikeName } = orders;

    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    

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

            <div className='w-96 border-2 bg-zinc-100 border-orange-500 rounded-lg p-6 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    orders={orders}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;