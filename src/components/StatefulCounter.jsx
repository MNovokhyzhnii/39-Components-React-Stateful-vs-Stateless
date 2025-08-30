import { useState } from "react";

export default function StatefulCounter({ initial = 0, step = 1 }) {
  const [count, setCount] = useState(initial);

  const inc = () => setCount((c) => c + step);
  const dec = () => setCount((c) => c - step);
  const reset = () => setCount(initial);

  return (
    <div className="card">
      <h2>StatefulCounter</h2>
      <p>Count: {count}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
