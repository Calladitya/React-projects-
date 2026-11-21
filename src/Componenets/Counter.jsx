
import React, { useState } from 'react';
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="counter-card">
      <span className="counter-eyebrow">QUICK COUNTER</span>
      <h2 className="counter-title">Keep your count</h2>
      <p className="counter-value" aria-live="polite">{count}</p>

      <div className="counter-actions">
      <button className="counter-button counter-button--primary" onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>

      <button
        className="counter-button counter-button--secondary"
        onClick={() => setCount(prev => prev - 1)}
        disabled={count === 0}
      >
        Decrement
      </button>

      <button className="counter-button counter-button--reset" onClick={() => setCount(0)}>
        Reset
      </button>
      </div>
    </section>
  );
}

export default Counter;
