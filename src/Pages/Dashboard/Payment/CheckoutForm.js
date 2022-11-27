import React, { useEffect, useState } from 'react';
import { CardElement, PaymentMethodMessagingElement, useElements, useStripe } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const CheckoutForm = ({ orders }) => {
    const { _id, resalePrice, userEmail, userName, bikeName, phoneNumber } = orders;

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();




    useEffect(() => {

        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [resalePrice]);



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail,
                        phone: phoneNumber,
                    }
                }
            }
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === 'succeeded') {

            // payment information
            const payment = {
                orderId: _id,
                name: userName,
                email: userEmail,
                product: bikeName,
                price: resalePrice,
                transactionId: paymentIntent.id

            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.insertedId) {
                        setSuccess('Your Payment is Completed!');
                        setTransactionId(paymentIntent.id);
                        toast.success('Payment saved successfully!');
                    }
                })

        }
        setProcessing(false);

    };



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#51E1ED',
                                '::placeholder': {
                                    color: '#FF6666',
                                },
                            },
                            invalid: {
                                color: '#66AD47',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-xs mt-6 border-none bg-violet-500 hover:bg-green-600 text-white'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>  
            </form>

            <p className='text-red-500 mt-2 text-center'>{cardError}</p>
            {
                success &&
                <div className='text-center'>
                    <p className='text-green-500 text-xl'>{success}</p>
                    <p>Your TransactionId: <span className='font-bold text-orange-500'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;