import { useState } from 'react'

export default function App() {
  const [myMoves, setMyMoves] = useState([])
  const [computersMoves, setComputersMoves] = useState([])
  const [result, setResult] = useState([0, 0])
  const [message, setMessage] = useState('')

  const status = (myMove, computersMove) => {
    if (myMove === computersMove) {
      return 0
    } else if (
      (myMove === '👊' && computersMove === '✌️') ||
      (myMove === '✋' && computersMove === '👊') ||
      (myMove === '✌️' && computersMove === '✋')
    ) {
      return 1
    } else {
      return -1
    }
  }

  const play = (myMove) => {
    const choices = ['👊', '✋', '✌️']
    const computersMove = choices[Math.floor(Math.random() * 3)]
    const gameResult = status(myMove, computersMove)

    if (gameResult === 1) {
      setResult([result[0] + 1, result[1]])
      setMessage('You win 😺')
    } else if (gameResult === 0) {
      setMessage('Tie 😼')
    } else {
      setResult([result[0], result[1] + 1])
      setMessage('You lost 😾')
    }

    setMyMoves([...myMoves, myMove])
    setComputersMoves([...computersMoves, computersMove])
  }

  return (
    <div className="flex flex-col items-center h-screen font-montserrat">
      <div className="w-1/2 max-w-sm mt-5 sm:mt-10">
        <p className="text-3xl sm:text-5xl text-white text-center">
          {result[0]} - {result[1]}
        </p>
        <div className="text-3xl sm:text-5xl flex justify-center p-5 m-5">
          <button
            className="hover:scale-125 duration-200 opacity-80 hover:opacity-100"
            onClick={() => play('👊')}
          >
            👊
          </button>
          <button
            className="hover:scale-125 duration-200 opacity-80 hover:opacity-100"
            onClick={() => play('✋')}
          >
            ✋
          </button>
          <button
            className="hover:scale-125 duration-200 opacity-80 hover:opacity-100"
            onClick={() => play('✌️')}
          >
            ✌️
          </button>
        </div>
        <p className="text-2xl sm:text-3xl text-white text-center m-5 p-5">
          {message}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-white">
          <div className="text-center">
            <p className="mb-4 text-xl sm:text-2xl">You</p>
            {myMoves.slice(-3).map((play, index) => (
              <p key={index} className="text-xl sm:text-2xl">
                {play}
              </p>
            ))}
          </div>
          <div className="text-center">
            <p className="mb-4 text-xl sm:text-2xl">Computer</p>
            {computersMoves.slice(-3).map((play, index) => (
              <p key={index} className="text-xl sm:text-2xl">
                {play}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
