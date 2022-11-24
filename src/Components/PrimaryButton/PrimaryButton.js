import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn hover:shadow-2xl text-lg bg-gradient-to-r from-orange-300 to-orange-600 text-white">{children}</button>
    );
};

export default PrimaryButton;