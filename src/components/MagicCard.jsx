import React from 'react'
import './MagicCard.css'

const MagicCard = ({card, handleChoice, flipped}) => {
    const handleClick = () => {

        handleChoice(card)
    }
  return (
      <div className={`card`}>
        <div className={flipped ? "flipped" : ''}>
            <img 
                src={card.src}
                className={'w-[8rem] front h-[8rem]'} 
            />
            <img 
                onClick={handleClick}
                src='/img/cover.png' className={'w-[8rem] back h-[8rem]'} 
            />

        </div>
    </div>
  )
}

export default MagicCard