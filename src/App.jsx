import { useState } from 'react';
import Counter from './components/Counter'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleCounter() {
    setCount(count + 1);
  }

  function countDown() {
    if (count <= 0) {
      window.alert("Não é possível ter valores negativos");
      return;
    }
    setCount(count - 1);
  }

  function reset() {
    if (count == 0)
      window.alert("Counter já foi resetado");
    setCount(0);
  }

  return (
    <main className="page">
      <div className="counter-card">

        <h1 className="text-2xl font-bold text-gray-800">
          Counter
        </h1>

        <Counter count={count} />

        <div className="flex items-center gap-5">
          <Button
            onclick={countDown}
          className="circle-button"
          >
            -
          </Button>

          <Button
            onclick={handleCounter}
            className="circle-button"
          >
            +
          </Button>
        </div>

        <Button
          onclick={reset}
          className="reset-button"
        >
          Reset
        </Button>

      </div>
    </main>
  );
}

export default App
