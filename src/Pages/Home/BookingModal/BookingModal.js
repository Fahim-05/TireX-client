import React from 'react';

const BookingModal = ({ bike }) => {

    const { bikeName, resalePrice } = bike;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const bikeName = form.bikeName.value;
        const resalePrice = form.resalePrice.value;

        console.log(date, bikeName, resalePrice);

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{bikeName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-10'>
                        <input type="date" name='date' placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" name='bikeName' disabled value={bikeName} className="input input-bordered w-full" />
                        <input type="text" name='resalePrice'  disabled value={resalePrice} className="input input-bordered w-full" />
                        <input type="text" name='' placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" name='' placeholder="Type here" className="input input-bordered w-full" />
                        <br/>
                        <input className='btn btn-success text-xl text-white w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;