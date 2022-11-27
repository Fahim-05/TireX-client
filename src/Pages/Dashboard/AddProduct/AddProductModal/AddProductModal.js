import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const AddProductModal = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const handleAddProduct = data => {

        console.log(data);

        
        toast.success('Product Added Successfully');

    }



    return (
        <div>
            <input type="checkbox" id="add-product-modal" className="modal-toggle" />
            <div className="modal ml-44">
                <div className="modal-box relative">
                    <label htmlFor="add-product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-4xl text-center font-bold mb-4 uppercase text-orange-600">Add Product</h3><hr></hr>
                    <h3 className="text-lg  text-center mt-2">Please fill up <span className='text-green-600'>Add Product</span> form</h3>


                    <form onSubmit={handleSubmit(handleAddProduct)}>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" className="input input-bordered w-full" defaultValue={user?.displayName} {...register("sellerName", { required: true })} readOnly/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" className="input input-bordered w-full" defaultValue={user?.email} {...register("email", { required: true })} readOnly/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Mobile Number</span></label>
                        <input type="number" className="input input-bordered w-full" {...register("phoneNumber", { required: true })}/>
                    </div>

                    <select {...register("categoryId", { required: true })} className='border w-full my-4 border-gray-300 p-2 rounded-lg' required>
                        <option disabled selected>Select category ID</option>
                        <option value="1">ID: 1 for SportsBike</option>
                        <option value="2">ID: 2 for CrossBike</option>
                        <option value="3">ID: 3 for Scooter</option>
                    </select>
                    <select {...register("categoryName", { required: true })} className='border w-full mb-4 border-gray-300 p-2 rounded-lg' required>
                        <option disabled selected>Select Category</option>
                        <option value="Sports Bike">Sports Bike</option>
                        <option value="Cross Bike">Cross Bike</option>
                        <option value="Scooter">Scooter</option>
                    </select>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Product name</span></label>
                        <input type="text" className="input input-bordered w-full" {...register("bikeName", { required: true })} required/>
                    </div> 
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Product Image URL</span></label>
                        <input type="text" className="input input-bordered w-full" {...register("image", { required: true })} required/>
                    </div> 

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Asking Price</span></label>
                        <input type="number" className="input input-bordered w-full text-green-600" {...register("resalePrice", { required: true })} required/>
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Original Price</span></label>
                        <input type="number" className="input input-bordered w-full text-red-500" {...register("originalPrice", { required: true })} required/>
                    </div>

                    <select {...register("condition", { required: true })} className='border w-full my-4 border-gray-300 p-2 rounded-lg' required>
                        <option disabled selected>Select Product Condition</option>
                        <option value="Fair">Fair</option>
                        <option value="Good">Good</option>
                        <option value="Excellent">Excellent</option>
                    </select>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Location</span></label>
                        <input type="text" className="input input-bordered w-full" {...register("location", { required: true })} required/>
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Description</span></label>
                        <input type="text" className="input input-bordered w-full" {...register("description", { required: true })} required/>
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Purchased Date</span></label>
                        <input type="date" className="input input-bordered w-full" {...register("purchaseDate", { required: true })} required/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-blue-600">Today's Date</span></label>
                        <input type="date" className="input input-bordered w-full text-blue-600" {...register("postDate", { required: true })} required/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text ">How many year used</span></label>
                        <input type="number" className="input input-bordered w-full" {...register("yearOfUse", { required: true })} required/>
                    </div>


                        <input className='btn btn-outline border-none bg-info hover:bg-lime-600 hover:scale-110 duration-200 text-black text-xl w-full mt-16' type="submit" value="Add product" />
                    
                </form>






                </div>
            </div>
        </div>
    );
};

export default AddProductModal;