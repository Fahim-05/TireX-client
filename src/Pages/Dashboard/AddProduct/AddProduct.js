import React from 'react';
import useTitle from '../../../hooks/UseTitle';
import AddProductModal from './AddProductModal/AddProductModal';

const AddProduct = () => {
    useTitle('Add Product');
    return (
        <div>
            <label htmlFor="add-product-modal" className='btn btn-outline btn-info w-10/12 mx-auto mt-10 text-3xl'>Click to Add Product</label>
            <div>
                <AddProductModal >

                </AddProductModal>
            </div>
        </div>
    );
};

export default AddProduct;