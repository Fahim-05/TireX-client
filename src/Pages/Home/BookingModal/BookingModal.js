import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ bike, setBike }) => {

    const { user } = useContext(AuthContext);
    const { bikeName, resalePrice, image, _id, location } = bike;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const bikeName = form.bikeName.value;
        const resalePrice = form.resalePrice.value;
        const phoneNumber = form.phoneNumber.value;
        const meetingLocation = form.meetingLocation.value;
        const date = form.date.value;

        const booking = {
            productId: _id,
            userName,
            userEmail,
            bikeName,
            resalePrice,
            phoneNumber,
            meetingLocation,
            bookingDate: date,
            image,
        }

        fetch('https://tirex-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) { 
                    setBike(null);
                    toast.success('Item is Booked!');
                }
                else{
                    toast.error(data.message);
                }
            })
    };

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" /> 
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{bikeName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-10'>
                        <input type="text" name='userName' disabled value={user?.displayName} className="input input-bordered w-full" />
                        <input type="email" name='userEmail' disabled value={user?.email} className="input input-bordered w-full" />
                        <input type="text" name='bikeName' disabled value={bikeName} className="input input-bordered w-full" />
                        <input type="number" name='resalePrice' disabled value={resalePrice} className="input input-bordered w-full" />
                        <input type="text" name='meetingLocation' placeholder='enter meeting location' className="input input-bordered w-full" required />
                        <input type="number" name='phoneNumber' placeholder="phone number" className="input input-bordered w-full" required />
                        <input type="date" name='date' placeholder="Type here" className="input input-bordered w-full" required />
                        <br />
                        <input className='btn btn-success text-xl text-white w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;