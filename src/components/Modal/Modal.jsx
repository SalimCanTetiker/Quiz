import React from 'react'

import './Modal.css'

const Modal = ({score}) => {
  return (
    <div className='modal'>
      <div className='modal-title'>SCORE: {score}</div>
      <div onClick={() => window.location = "/"} className='modal-button'>
        RESTART
      </div>
    </div>
  )
}

export default Modal