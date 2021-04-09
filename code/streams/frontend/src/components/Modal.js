import React from "react";
import ReactDOM from "react-dom";


const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                The modal man!
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
