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
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6">

        <h1 className="text-2xl font-bold text-gray-800">
          Counter
        </h1>

        <Counter count={count} />

        <div className="flex items-center gap-5">
          <Button
            onclick={countDown}
            className="w-14 h-14 rounded-full bg-gray-200 text-gray-700 text-2xl hover:bg-gray-300 transition-colors cursor-pointer"
          >
            -
          </Button>

          <Button
            onclick={handleCounter}
            className="w-14 h-14 rounded-full bg-gray-200 text-gray-700 text-2xl hover:bg-gray-300 transition-colors cursor-pointer"
          >
            +
          </Button>
        </div>

        <Button
          onclick={reset}
          className="w-full py-3 rounded-lg bg-red-200 text-red-800 font-semibold hover:bg-red-300 transition-colors cursor-pointer"
        >
          Reset
        </Button>

      </div>
    </main>
  );
}

export default App
