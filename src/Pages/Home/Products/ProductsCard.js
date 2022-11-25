import React from 'react';

const ProductsCard = ({ product, setBike }) => {
    const { categoryName, bikeName, resalePrice, originalPrice, image, location, yearOfUse, sellerName, status } = product;
    return (
        <div className="card bg-base-100 border border-orange-200 shadow-xl hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-full h-72 hover:scale-150 duration-300" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-2xl text-orange-600 font-bold">{bikeName}</h2>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 my-10'>
                    <div className='text-left text-lg'>
                        <p className=''><span className='font-semibold'>Category:</span> {categoryName}</p>
                        <p className=''><span className='font-semibold'>Location:</span> {location}</p>
                        <p className=''><span className='font-semibold'>Seller:</span> <span className='text-teal-600 font-semibold'>{sellerName}</span></p>
                    </div>
                    <div className='text-left text-lg'>
                        <p><span className='font-semibold'>Used:</span> <span className='text-blue-600 font-semibold'>{yearOfUse}<sup>yrs</sup></span></p>
                        <p><span className='font-semibold'>Original Price:</span> <strike className='text-red-600 font-bold'>${originalPrice}</strike></p>
                        <p><span className='font-semibold'>Resale Price:</span> <span className='text-green-600 font-bold'>${resalePrice}</span></p>
                    </div>
                </div>
                <div className="card-actions">
                    <label
                        htmlFor="booking-modal"
                        className="btn hover:shadow-2xl text-lg bg-gradient-to-r from-orange-300 to-orange-600 text-white hover:scale-110 duration-200 border-none w-56"
                        onClick={()=>setBike(product)}
                        >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;