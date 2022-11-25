import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center my-28'>
            <progress className="progress w-96"></progress>
        </div>
    );
};

export default Loading;