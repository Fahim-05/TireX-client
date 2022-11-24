import React from 'react';
import backgroundImg from '../../../assets/banner/background.jpg';
import coverImg from '../../../assets/banner/cover.jpg';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${backgroundImg})`}}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className='w-1/2 mx-auto'>
                        <img className='ml-48' src={coverImg} alt=''/>
                    </div>
                    <div className=" w-1/2 mr-20 mb-10">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To <span className='text-orange-400'>TireX</span></h1>
                        <p className="mb-5 text-center text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maxime dolores temporibus fugiat magni rem rerum quod! Itaque, delectus voluptates!</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;