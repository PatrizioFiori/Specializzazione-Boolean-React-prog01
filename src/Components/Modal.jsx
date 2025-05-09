import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ show, title, content, onClose, onConfirm, taskTitle }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <>
            <div className="modal-backdrop fade show"></div>

            <div className="modal show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                        </div>
                        <div className="modal-body">
                            <p>{content}</p>
                            <strong><p>{taskTitle}</p></strong>
                        </div>
                        <div className="modal-footer">
                            <button onClick={onConfirm} type="button" className="btn btn-primary">Confirm</button>
                            <button onClick={onClose} type="button" className="btn btn-secondary">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('modal-root')
    );
};

export default Modal;
