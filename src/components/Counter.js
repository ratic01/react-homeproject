import React, { useState, useEffect } from "react";

function Counter() {
  // Definiramo state za brojač
  const [count, setCount] = useState(0);

  // useEffect za ažuriranje naslova prozora s trenutnom vrijednosti brojača
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Ovaj efekt se izvršava samo kada se promijeni count

  // Funkcija za povećavanje brojača
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Funkcija za smanjivanje brojača
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
