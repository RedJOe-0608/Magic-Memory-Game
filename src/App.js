import { useState } from "react";
import MagicCard from "./components/MagicCard";

function App() {

  const [cards, setCards] = useState([])

  const cardImages = [
    {"src": "/img/helmet-1.png"},
    {"src": "/img/potion-1.png"},
    {"src": "/img/ring-1.png"},
    {"src": "/img/scroll-1.png"},
    {"src": "/img/shield-1.png"},
    {"src": "/img/sword-1.png"},
  ]

  const shuffleCards = () => {
    const shuffledCards = [...cardImages,...cardImages]
    .sort((a,b) => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.ceil(Math.random() * 1000)}))
    setCards(shuffledCards)
  }




  return <div className="flex flex-col mx-auto max-w-[860px] items-center justify-center">
    <h1 className="text-5xl text-white mt-[4rem]">Magic Memory!</h1>
    <button 
      onClick={shuffleCards}
      className="mt-[3rem] rounded-md p-3 bg-white">New Game</button>
    <main className="grid grid-cols-4 mt-[3rem] gap-4">
      {cards.map((card) => {
        return (
          <MagicCard  card={card}/>
        )
      })}
    </main>
  </div>;
}

export default App;
