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
    let input = window.prompt("Digite o valor para o novo incremento do counter");

    if (input === null) return;

    if (input.trim() === "") {
      window.alert("Nenhuma alteração feita.");
      return;
    }

    let newIncrement = Number(input);

    while (!Number.isFinite(newIncrement) || newIncrement <= 0) {
      input = window.prompt("Digite valores positivos diferente de 0");

      if (input === null) return;

      if (input.trim() === "")  {
        window.alert("Nenhuma alteração feita.");
        return;
      }

      newIncrement = Number(input);
    }

    setIncrement(newIncrement);
  }

  return (
    <main className="page">
      <div className="layout">
        <div className="counter-card">
          <h1 className="text-2xl font-bold text-gray-800">Counter</h1>

          <Counter count={count} />


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
        <div className="counter-card">
          <h2 className="text-xl font-bold text-gray-800">Configurações</h2>
          <div className="increment-card">
            <div className="increment-info">
              <h3 className="increment-title">VALOR DO INCREMENTO</h3>
              <p className="increment-value">{increment}</p>
            </div>
            <Button className="increment-button" onclick={handleIncrement}>
              Alterar
            </Button>
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
