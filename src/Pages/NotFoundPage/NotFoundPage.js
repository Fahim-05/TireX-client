import React from 'react';
import notFoundImage from '../../assets/not fount page/404-page.gif';
import useTitle from '../../hooks/UseTitle';

const NotFoundPage = () => {
    useTitle("Page Not Found");
    return (
        <div>
            <p className='text-4xl text-orange-600 mt-2 text-center'>Sorry! the page cannot be found.</p>
            <img className='w-8/12 mx-auto' src={notFoundImage} alt='not found page .gif'/>
        </div>
    );
};

export default NotFoundPage;