
import { useState } from "react"

function App() {
  const coins = ["bitcoin", "ethereum", "solana", "ripple"]
  const [selectedCoins, setSelectedCoins] = useState([])

  function addCoinToList(coin) {
    if (!selectedCoins.includes(coin)) {
      setSelectedCoins([...selectedCoins, coin])
    }
  }

  const listItems = coins.map(coin => (
    <li
      key={coin}
      className="mb-3 border border-black hover:bg-gray-200 cursor-pointer"
      onClick={() => addCoinToList(coin)}
    >
      {coin}
    </li>
  ))

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col mr-8">
          <h2 className="bold text-xl mb-2">Select your coins</h2>
          <ul className="justify-center">{listItems}</ul>
        </div>
        <div className="flex flex-col">
          <h2 className="bold text-xl mb-2">Selected coins</h2>
          <ul>
            {selectedCoins.map(coin => (
              <li key={coin} className="mb-3 border border-green-500">{coin}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
