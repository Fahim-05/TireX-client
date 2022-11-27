import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const AddProductModal = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <input type="checkbox" id="add-product-modal" className="modal-toggle" />
            <div className="modal ml-44">
                <div className="modal-box relative">
                    <label htmlFor="add-product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-4xl text-center font-bold mb-4 uppercase text-orange-600">Add Product</h3><hr></hr>
                    <h3 className="text-lg font-bold text-center mt-2">Please fill up <span className='text-green-600'>Add Product</span> form</h3>
                    <form className='grid grid-cols-1 gap-6 mt-10'>

                        <input type="text" name='bikeName' disabled value={user?.displayName} className="input input-bordered w-full" required />
                        <input type="text" name='bikeName' disabled value={user?.email} className="input input-bordered w-full" required />
                        <input type="number" name='phoneNumber' placeholder="enter your phone number" className="input input-bordered w-full" required />
                        <select className='border w-full  border-gray-300 p-2 rounded-lg' required>
                            <option name='categoryId' value="" selected disabled>Select Category ID by Name</option>
                            <option name='categoryId' value="1" >ID:'1' for Sports Bike</option>
                            <option name='categoryId' value="2" >ID:'2' for Cross Bike</option>
                            <option name='categoryId' value="3">ID:'3' for Scooter</option>
                        </select>
                        <select className='border w-full  border-gray-300 p-2 rounded-lg' required>
                            <option name='categoryName' value="" selected disabled>Select Category by Name</option>
                            <option name='categoryName' value="Sports Bike" >Sports Bike</option>
                            <option name='categoryName' value="Cross Bike" >Cross Bike</option>
                            <option name='categoryName' value="Scooter">Scooter</option>
                        </select>

                        <input type="text" name='bikeName' placeholder='enter product name' className="input input-bordered w-full" required />
                        <input type="text" name='image' placeholder='enter product url' className="input input-bordered w-full text-blue-500" required />
                        <input type="number" name='resalePrice' placeholder='enter resale price' className="input input-bordered w-full text-green-500" required />
                        <input type="number" name='originalPrice' placeholder='enter original price' className="input input-bordered w-full text-red-500" required />

                        <select className='border w-full border-gray-300 p-2 rounded-lg' required>
                            <option name='categoryId' value="" selected disabled>Select Condition</option>
                            <option name='categoryId' value="Fair" >Fair</option>
                            <option name='categoryId' value="Good" >Good</option>
                            <option name='categoryId' value="Excellent" >Excellent</option>
                        </select>

                        <input type="text" name='location' placeholder="location: examples: Dhaka, Jashore.." className="input input-bordered w-full" required />
                        <input type="text" name='description' placeholder="enter short description" className="input input-bordered w-full" required />
                        <p className='-mb-4'>Enter Purchased Date:</p>
                        <input type="date" name='purchaseDate' className="input input-bordered w-full" required />
                        <input type="number" name='used' placeholder='enter how many year used' className="input input-bordered w-full text-red-500" required />
                        <br />
                        <input className='btn btn-outline border-none bg-info hover:bg-lime-600 hover:scale-110 duration-200 text-black text-xl w-full' type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProductModal;