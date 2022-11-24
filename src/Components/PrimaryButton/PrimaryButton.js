import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn hover:shadow-2xl text-lg bg-gradient-to-r from-orange-300 to-orange-600 text-white hover:scale-110 duration-200 border-none w-56">{children}</button>
    );
};

export default PrimaryButton;