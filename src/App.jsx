import { useState } from "react";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  function handleCounter(i) {
    setCount(count + i);
  }

  function countDown(i) {
    if (count <= 0) {
      window.alert("Não é possível ter valores negativos");
      return;
    }
    setCount(count - i);
  }

  function reset() {
    if (count == 0) window.alert("Counter já foi resetado");
    setCount(0);
  }

  function handleIncrement() {
    let newIncrement = Number(
      window.prompt("Digite o valor para o novo incremento do counter"),
    );

    while (newIncrement <= 0) {
      newIncrement = Number(window.prompt("Digite valores positivos diferente de 0"));
    }

    setIncrement(newIncrement);
  }

  return (
    <main className="page">
      <div className="counter-card">
        <h1 className="text-2xl font-bold text-gray-800">Counter</h1>

        <Counter count={count} />

        <div className="increment-card">
          <div className="increment-info">
            <h3 className="increment-title">VALOR DO INCREMENTO</h3>
            <p className="increment-value">{increment}</p>
          </div>
          <Button className="increment-button" onclick={handleIncrement}>
            Alterar
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <Button
            onclick={() => countDown(increment)}
            className="circle-button"
          >
            -
          </Button>

          <Button
            onclick={() => handleCounter(increment)}
            className="circle-button"
          >
            +
          </Button>
        </div>

        <Button onclick={reset} className="reset-button">
          Reset
        </Button>
      </div>
    </main>
  );
}

export default App;
