import { useState } from 'react';
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  function handleCounter() {
    setCount(count + 1);
  }

  function countDown() {
    if (count <= 0)
      return;
    setCount(count - 1);
  }

  function zerar() {
    setCount(0);
  }

  return (
    <>
      <h2>Counter</h2>     
      <Counter count={count} />
      <button onClick={handleCounter}>incremente</button>
      <button onClick={zerar}>Zerar</button>
      <button onClick={countDown}>Decremente</button>
    </>
  )
}

export default App
