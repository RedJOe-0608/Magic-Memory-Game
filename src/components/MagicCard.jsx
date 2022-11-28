import React from 'react'

const MagicCard = ({card, handleChoice}) => {
    const handleClick = () => {

        handleChoice(card)
    }
  return (
    <div>
        <img src={card.src}
            onClick={handleClick}
            className='w-[8rem] h-[8rem]' 
        />
        <img src='/img/cover.png' className='w-[8rem] h-[8rem]' />
    </div>
  )
}

export default MagicCard