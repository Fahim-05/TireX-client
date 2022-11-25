import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const handleRegister = data => {

        console.log(data);


        // call createUser
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        toast.success('Account created Successfully');
                     })
                    .catch(error => console.error(error))


            })
            .catch(error => console.error(error));
    }


    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-6 border border-gray-200 rounded-lg shadow-lg'>
                <h1 className='text-3xl text-orange-600 uppercase font-bold text-center my-4'>Sign Up</h1>

                <form onSubmit={handleSubmit(handleRegister)}>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" className="input input-bordered w-full" {...register("name", { required: true })} />
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full" {...register("email", { required: true })} />
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full" {...register("password", { required: true })} />
                    </div>

                    <select {...register("userType", { required: true })} className='border w-full my-6 border-gray-300 p-2 rounded-lg'>
                        <option value="Buyer" selected>Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>


                    <input className='btn btn-outline btn-success w-full text-xl mt-6' type="submit" value='Register' />
                </form>
                <p className='my-2 text-center'>Already have an account? <Link to='/login' className='text-blue-600 underline'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;