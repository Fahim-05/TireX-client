import React from 'react';
import Accessories from '../Accessories/Accessories';
import Banner from '../Banner/Banner';
import VisitUs from '../VisitUs/VisitUs';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <Accessories></Accessories>
            <VisitUs></VisitUs>
        </div>
    );
};

export default Home;