function App() {
  const cardImages = [
    {"src": "/img/helmet-1.png"},
    {"src": "/img/potion-1.png"},
    {"src": "/img/ring-1.png"},
    {"src": "/img/scroll-1.png"},
    {"src": "/img/shield-1.png"},
    {"src": "/img/sword-1.png"},
  ]
  return <div className="flex flex-col items-center justify-center">
    <h1 className="text-5xl text-white mt-[4rem]">Magic Memory!</h1>
    <button className="mt-[3rem] rounded-md p-3 bg-white">New Game</button>
    <main>

    </main>
  </div>;
}

export default App;
