import React from "react";
import "./modal.css";

export default function Modal (props) {
    const handleOnNo = ()=> props.setIsModalVisible(false);    
    const handleOnYes = (e)=> props.redirectOnLogout(e);

    return (
        <div className="modal" id="modal">
            <h3>Wait!</h3>
            <div className="content">
                Do you want to logout?
            </div>
            <div className="actions" style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                <button className="toggle-button-outlined" onClick={handleOnYes}>Yes</button>
                <button className="toggle-button" onClick={handleOnNo}>Close</button>
            </div>
        </div>
    );
}