import React from 'react';
import useTitle from '../../../hooks/UseTitle';

const ReportedItem = () => {
    useTitle("Reported Item");
    return (
        <div>
            <h1>Reported items</h1>
        </div>
    );
};

export default ReportedItem;