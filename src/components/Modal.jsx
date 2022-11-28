import React from 'react'
import './Modal.css'

const Modal = ({setMatchCount,setShowModal}) => {
    const handleClick = () => {

        setMatchCount(0)
        setShowModal(prev => !prev)
    }
  return (
    <div className='modalBackground'>
        
        <div className="modalContainer">
        <div >
        <button 
        onClick={handleClick}
        className='absolute top-5 right-8 text-3xl text-red-800'>X</button>
        </div>
           <h2 className="text-5xl text-black mb-[10px]">Congratulations!</h2>
           <h2 className="text-5xl text-black">You Won!</h2>
        </div>
        
    </div>
  )
}

export default Modal