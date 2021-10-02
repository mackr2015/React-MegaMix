import React from 'react';


import { FaRegWindowClose } from 'react-icons/fa'
// from https://react-icons.github.io/react-icons/icons?name=fa


function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <FaRegWindowClose /> 
        {props.children}
      </div>
    </div>
  ) : "";
}
export default Popup;