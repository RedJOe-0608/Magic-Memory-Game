import { useState } from "react";

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
  }

  setCards(shuffleCards)



  return <div className="flex flex-col items-center justify-center">
    <h1 className="text-5xl text-white mt-[4rem]">Magic Memory!</h1>
    <button 
      onClick={shuffleCards}
      className="mt-[3rem] rounded-md p-3 bg-white">New Game</button>
    <main>

    </main>
  </div>;
}

export default App;
