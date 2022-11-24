import React from 'react';
import visitImg1 from '../../../assets/VisitUs/jessore.jpg';
import visitImg2 from '../../../assets/VisitUs/khulna.jpg';
import visitImg3 from '../../../assets/VisitUs/dhaka.jpg';

const VisitUs = () => {
    return (
        <div className='w-11/12 mx-auto my-20 bg-base-200 p-6'>
            <p className='text-center text-3xl font-semibold text-orange-600 mb-10'>Visit Us</p>
            <div className='grid grid-cols-3 justify-between'>
                <div className='text-center transition hover:scale-150 duration-500 hover:text-blue-600 hover:text-bold'>
                    <img className='w-28 mx-auto mask mask-hexagon ' src={visitImg1} alt=''/>
                    <p className='my-2'>Jashore</p>
                </div>
                <div className='text-center transition hover:scale-150 duration-500 hover:text-blue-600 hover:text-bold'>
                    <img className='w-28 mx-auto mask mask-hexagon' src={visitImg2} alt=''/>
                    <p>Khulna</p>
                </div>
                <div className='text-center transition hover:scale-150 duration-500 hover:text-blue-600 hover:text-bold'>
                    <img className='w-32 mx-auto mask mask-hexagon' src={visitImg3} alt=''/>
                    <p>Dhaka</p>
                </div>
            </div>
        </div>
    );
};

export default VisitUs;