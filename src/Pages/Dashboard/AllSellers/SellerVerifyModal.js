import React from 'react';

const SellerVerifyModal = ({ title, message, closeModal, verifyAction, modalData }) => {
    return (
        <div>
            <input type="checkbox" id="seller-verify-modal" className="modal-toggle" />
            <div className="modal ml-44">
                <div className="modal-box relative">
                    <h3 className="text-lg font-bold text-green-600">{title}</h3>
                    <p className="py-4 text-orange-600">{message}</p>

                    <label
                        htmlFor="seller-verify-modal"
                        className="btn btn-outline border-none bg-green-600 text-white hover:text-white hover:bg-green-800 btn-sm"
                        onClick={() => verifyAction(modalData)}
                    >Verify</label>

                    <button onClick={closeModal} className='btn border-none ml-10 btn-outline bg-red-600 text-white hover:text-white hover:bg-red-800 btn-sm'>Abort</button>
                </div>
            </div>
        </div>
    );
};

export default SellerVerifyModal;