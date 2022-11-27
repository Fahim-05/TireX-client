import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider';
import UseAdmin from '../../../hooks/UseAdmin';
import UseBuyer from '../../../hooks/UseBuyer';
import UseSeller from '../../../hooks/UseSeller';
import useTitle from '../../../hooks/UseTitle';




const ProductsCard = ({ product, setBike }) => {

    useTitle(`Products of ${product.categoryName}`);

    const { user } = useContext(AuthContext);
    const [isSeller] = UseSeller(user?.email);
    const [isAdmin] = UseAdmin(user?.email);
    const [isBuyer] = UseBuyer(user?.email);

    const { categoryName, bikeName, resalePrice, originalPrice, image, location, yearOfUse, sellerName, sellerStatus, phoneNumber, condition, description, purchaseDate, postDate, email } = product;


    return (

        <div>
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

                            <div className=''>
                                <p className='flex justify-start items-center'>
                                    <span className='font-semibold'>Seller:</span>
                                    <span className='text-teal-600 ml-2 font-semibold'>{sellerName}</span>
                                    {
                                        sellerStatus ?
                                            <span className='text-blue-500 ml-1 mt-1'><FaCheckCircle></FaCheckCircle></span>
                                            :
                                            <>
                                                <span className='text-red-500 ml-1 mt-1'><FaExclamationCircle></FaExclamationCircle></span>
                                            </>
                                    }
                                </p>
                            </div>

                            <p className=''><span className='font-semibold'>Email:</span> <span className='text-teal-600 font-semibold'>{email}</span></p>
                            <p className=''><span className='font-semibold'>Phone:</span> <span className='text-teal-600 font-semibold'>{phoneNumber}</span></p>
                            <p className=''><span className='font-semibold'>Posted:</span> <span className='font-semibold'>{postDate}</span></p>
                        </div>
                        <div className='text-left text-lg'>
                            <p><span className='font-semibold'>Condition:</span> <span className='text-green-600 font-semibold'>{condition}</span></p>
                            <p><span className='font-semibold'>Purchase Date:</span> <span className='font-semibold'>{purchaseDate}</span></p>
                            <p><span className='font-semibold'>Used:</span> <span className='text-blue-500 font-semibold'>{yearOfUse}<sup className='text-red-500'>yrs</sup></span></p>
                            <p><span className='font-semibold'>Original Price:</span> <strike className='text-red-600 font-bold'>${originalPrice}</strike></p>
                            <p><span className='font-semibold'>Resale Price:</span> <span className='text-green-600 font-bold'>${resalePrice}</span></p>
                        </div>
                    </div>
                    <p className='mb-6'>Description:<span className='text-sm text-orange-400'>{description}</span></p>
                    <div className="card-actions">

                        {!isSeller && !isAdmin && isBuyer &&
                            <label
                                htmlFor="booking-modal"
                                className="btn hover:shadow-2xl text-lg bg-gradient-to-r from-orange-300 to-orange-600 text-white hover:scale-110 duration-200 border-none w-56"
                                onClick={() => setBike(product)}
                            >Book Now</label>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductsCard;