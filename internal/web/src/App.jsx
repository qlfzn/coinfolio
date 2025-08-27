import { useState } from "react"
import { coinMeta } from "./coinMeta"

function App() {
  const coins = Object.keys(coinMeta)
  const [selectedCoins, setSelectedCoins] = useState([])

  function addCoinToList(coin) {
    if (!selectedCoins.includes(coin)) {
      setSelectedCoins([...selectedCoins, coin])
    }
  }

  const listItems = coins.map(coin => {
    const meta = coinMeta[coin]
    return (
      <div
        key={coin}
        className="flex flex-col items-center justify-center w-40 h-48 m-2 p-4 border rounded-lg shadow hover:bg-gray-100 cursor-pointer transition"
        onClick={() => addCoinToList(coin)}
      >
        <img src={meta.logo} alt={meta.name + ' logo'} className="w-16 h-16 mb-2" />
        <div className="font-bold text-lg mb-1">{meta.name}</div>
        <div className="text-gray-500 text-md mb-1">{meta.ticker}</div>
      </div>
    )
  })

  return (
    <>
      <div className="flex flex-row items-start justify-center min-h-fit gap-12 mt-10">
        <div className="flex flex-col w-1/2 max-w-xl p-6 max-h-[600px] bg-white rounded-lg shadow-lg border mr-4 overflow-y-auto">
          <h2 className="font-bold text-xl mb-2 sticky">Select your coins</h2>
          <h3 className="text-lg text-gray-400 mb-4 sticky">Create your crypto portfolio</h3>
          <div className="grid grid-cols-3 gap-4">{listItems}</div>
        </div>

        <div className="flex flex-col w-1/2 max-w-xl p-6 bg-white rounded-lg shadow-lg border ml-4">
          <h2 className="font-bold text-xl mb-2">Selected coins</h2>
          <div className="flex flex-col justify-center">
            {selectedCoins.length === 0 ? (
              <div className="text-gray-400 text-center w-full mt-8">No coins selected yet.</div>
            ) : (
              selectedCoins.map(coin => {
                const meta = coinMeta[coin]
                return (
                  <div
                    key={coin}
                    className="flex flex-row items-center justify-between w-full max-w-xl m-2 p-4 border border-green-500 rounded-lg shadow bg-white"
                  >
                    <div className="flex items-center">
                      <img src={meta.logo} alt={meta.name + ' logo'} className="w-12 h-12 mr-4" />
                      <div>
                        <div className="font-bold text-lg">{meta.name}</div>
                        <div className="text-gray-500 text-md">{meta.ticker}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="text" placeholder="Amount" className="border rounded px-2 py-1 w-24" />
                      <select className="border rounded px-2 py-1">
                        <option value="MYR">MYR</option>
                        <option value="USD">USD</option>
                      </select>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
