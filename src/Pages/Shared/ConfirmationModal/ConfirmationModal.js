import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, modalData, successAction, successButton }) => {
    return ( 
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ml-44">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4 text-orange-600">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="confirmationModal"
                            className="btn btn-outline border-none bg-red-600 text-white hover:text-white hover:bg-red-800 btn-sm">{successButton}</label>

                        <button onClick={closeModal} className='btn border-none btn-outline bg-green-600 text-white hover:text-white hover:bg-green-800 btn-sm'>Abort</button>
                    </div>
                </div> 
            </div>
        </div >
    );
};

export default ConfirmationModal;