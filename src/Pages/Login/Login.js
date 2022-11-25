import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-6 border border-gray-200 rounded-lg shadow-lg'>
                <h1 className='text-3xl text-orange-600 uppercase font-bold text-center my-4'>Login</h1>

                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full"
                            {...register("email", {
                                required: true
                            })} />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full"
                            {...register("password", {
                                required: true
                            })} />
                    </div>

                    <select {...register("userType", { required: true })} className='border w-full my-6 border-gray-300 p-2 rounded'>
                        <option value="User" selected>User</option>
                        <option value="Seller">Seller</option>
                    </select>
                    <input className='btn btn-outline btn-success w-full text-xl' type="submit" value='Login' />
                </form>
                <p className='my-2 text-center'>New to TireX? <Link to='/register' className='text-blue-600 underline'>create an account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline bg-green-500 hover:bg-blue-500 w-full text-xl'>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;