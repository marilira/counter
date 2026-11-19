import { useState } from 'react';
import Counter from './components/Counter'
import Button from './components/Button'

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

  function reset() {
    setCount(0);
  }

  return (
    <>
      <h2>Counter</h2>     
      <Counter count={count} />
      <Button onclick={handleCounter}>incremente</Button>
      <Button onclick={reset}>Zerar</Button>
      <Button onclick={countDown}>Decremente</Button>
    </>
  )
}

export default App
