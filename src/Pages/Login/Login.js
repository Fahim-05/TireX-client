import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {

    const { signIn, googleProviderLogin } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        // call sign in
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login Successfully');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message);

            });
    }

    //google login
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login With  Google Successfully');
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error.message));
    }

    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-6 border border-gray-200 rounded-lg shadow-lg'>
                <h1 className='text-3xl text-orange-600 uppercase font-bold text-center my-4'>Login</h1>
                <>
                    {
                        loginError && <p className='text-red-600'>{loginError}</p>
                    }
                </>

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

                    <select {...register("userType", { required: true })} className='border w-full my-6 border-gray-300 p-2 rounded-lg'>
                        <option value="Buyer" selected>Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>
                    <input className='btn btn-outline btn-success w-full text-xl' type="submit" value='Login' />
                </form>
                <p className='my-2 text-center'>New to TireX? <Link to='/register' className='text-blue-600 underline'>create an account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline bg-green-500 hover:bg-blue-500 w-full text-xl'>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;