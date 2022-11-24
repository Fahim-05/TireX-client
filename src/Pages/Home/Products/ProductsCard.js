import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ProductsCard = ({ product }) => {
    const { categoryName, bikeName, resalePrice, originalPrice, image, location, yearOfUse, sellerName, status } = product;
    return (
        <div className="card bg-base-100 border border-orange-200 shadow-xl hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-full h-72 hover:scale-150 duration-300" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-2xl text-orange-600 font-bold">{bikeName}</h2>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-16 border border-orange-600 my-10'>
                    <div className='text-left text-xl'>
                        <p className=''><span className='font-semibold'>Category:</span> {categoryName}</p>
                        <p className=''><span className='font-semibold'>Location:</span> {location}</p>
                        <p className=''><span className='font-semibold'>Seller:</span> {sellerName}</p>
                    </div>
                    <div className='text-left text-xl'>
                        <p className=''>Used: {yearOfUse}<sup>yrs</sup></p>
                        <p className=''>Original Price: ${originalPrice}</p>
                        <p >Resale Price: ${resalePrice}</p>
                    </div>
                </div>
                <div className="card-actions">
                    <PrimaryButton>Buy Now</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;