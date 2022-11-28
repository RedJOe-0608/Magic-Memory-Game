import { useEffect, useState } from "react";
import MagicCard from "./components/MagicCard";
import Modal from "./components/Modal";

function App() {

  const [cards, setCards] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [matchCount, setMatchCount] = useState(0)
  const [showModal, setShowModal] = useState(true)
  const cardImages = [
    {"src": "/img/helmet-1.png", matched: false},
    {"src": "/img/potion-1.png", matched: false},
    {"src": "/img/ring-1.png", matched: false},
    {"src": "/img/scroll-1.png", matched: false},
    {"src": "/img/shield-1.png", matched: false},
    {"src": "/img/sword-1.png", matched: false},
  ]

  const shuffleCards = () => {
    const shuffledCards = [...cardImages,...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.ceil(Math.random() * 1000)}))
    setCards(shuffledCards)
    setMatchCount(0)
    setShowModal(true)
  }

  const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
  if(choiceTwo !=null)
  {

      if(choiceOne.src === choiceTwo.src)
      {
        setMatchCount(prevCount => prevCount + 1)
            console.log(matchCount);
        // console.log("The selected images are equal");
        setCards(prevCards => {return prevCards.map((card) => {
          if(card.src === choiceOne.src)
          {
            
            return {...card, matched : true}
          }
          else
          {
            return card
          }
        }) })
        reset()
      }
      else
      {
        setTimeout(() => reset(), 1000)
        
      }
  }
},[choiceOne, choiceTwo])

const reset = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
}


 return <div>
  {/* This is the Modal code */}
   { matchCount === 6 ? showModal ? <Modal setMatchCount={setMatchCount} setShowModal={setShowModal}/> : '' : ''}
 <div className="flex flex-col mx-auto max-w-[860px] items-center justify-center">
    <h1 className="text-5xl text-white mt-[4rem]">Magic Memory!</h1>
    <button 
      onClick={shuffleCards}
      className="mt-[3rem] rounded-md p-3 bg-white">New Game</button>

      

    <main className="grid grid-cols-4 mt-[3rem] gap-4">
      {cards.map((card) => {
        return (
          <MagicCard  
          handleChoice={handleChoice}
            card={card}
            flipped={card === choiceOne || card === choiceTwo || card.matched }
          />
        )
      })}
    </main>
  </div>;

 </div>
 
}

export default App;
