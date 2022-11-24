import React from 'react';

const Accessories = () => {
    return (
        <div className='my-20 bg-slate-700 p-10'>
            <h1 className='text-orange-500 font-bold text-5xl mb-10'>ACCESSORIES <hr className='border-2 border-green-500 mt-2'></hr></h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6'>
                <div>
                    <div className='bg-black flex flex-col items-center py-4'>
                        <p className='text-green-500 font-bold'>Range for Biker</p>
                        <p className='text-gray-300 text-3xl uppercase'>Range Packages</p>
                    </div>
                    <div>
                        <img className='w-full h-60' src='https://images.pexels.com/photos/9606979/pexels-photo-9606979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                    </div>
                </div>
                <div>
                    <div className='bg-black flex flex-col items-center py-4'>
                        <p className='text-green-500 font-bold'>Engine Repair</p>
                        <p className='text-gray-300 text-3xl uppercase'>Engine Packages</p>
                    </div>
                    <div>
                        <img className='w-full h-60' src='https://images.pexels.com/photos/34006/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                    </div>
                </div>
                <div>
                    <div className='bg-black flex flex-col items-center py-4'>
                        <p className='text-green-500 font-bold'>Body Accessories</p>
                        <p className='text-gray-300 text-3xl uppercase'>Safety Packages</p>
                    </div>
                    <div>
                        <img className='w-full h-60' src='https://images.pexels.com/photos/4294222/pexels-photo-4294222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessories;