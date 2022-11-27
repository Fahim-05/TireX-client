import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductsCard from './ProductsCard';

const Products = () => {

    const [bike, setBike] = useState(null);

    const products = useLoaderData();
    return (
        <div>
            <p className='text-5xl my-10 text-center text-orange-600 font-bold uppercase'>{products[0].categoryName}</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-20'>
                {
                    products.map((product, index) => <ProductsCard
                        key={index}
                        product={product}
                        setBike={setBike}
                    ></ProductsCard>)
                }
            </div>
            { bike && 
                <BookingModal 
                    bike={bike}
                    setBike={setBike}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;