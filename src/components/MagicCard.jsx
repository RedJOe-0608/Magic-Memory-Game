import React from 'react'

const MagicCard = ({card}) => {
  return (
    <div>
        <img src={card.src} className='w-[8rem] h-[8rem]' />
    </div>
  )
}

export default MagicCard