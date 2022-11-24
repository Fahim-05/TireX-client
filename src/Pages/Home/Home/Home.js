import React from 'react';
import Accessories from '../Accessories/Accessories';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import VisitUs from '../VisitUs/VisitUs';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <Categories></Categories>
            <Accessories></Accessories>
            <VisitUs></VisitUs>
        </div>
    );
};

export default Home;