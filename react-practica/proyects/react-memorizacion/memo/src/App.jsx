import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const sumar = () => setCount(count + 1)
  const restar = () => setCount(count - 1)
  return (
    <>
      <h1>Memorizacion en React</h1>
      <button onClick={sumar}>
        +
      </button>
      <button onClick={restar}>
        -
      </button>
      <p>{count}</p>
    </>
  )
}

export default App
