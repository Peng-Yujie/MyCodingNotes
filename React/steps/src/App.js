import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
      <Counter />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function decStep() {
    if (step > 1) setStep(step - 1);
  }

  function incStep() {
    setStep(step + 1);
  }

  function decCount() {
    setCount(count - step);
  }

  function incCount() {
    setCount(count + step);
  }

  return (
    <div>
      <div>
        <button onClick={decStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={incStep}>+</button>
      </div>
      <div>
        <button onClick={decCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={incCount}>+</button>
      </div>
      <p>
        {count === 0 && `Today is ${date.toDateString()}`}
        {count < 0 && `${Math.abs(count)} days ago was ${date.toDateString()}`}
        {count > 0 &&
          `${Math.abs(count)} days from today is ${date.toDateString()}`}
      </p>
    </div>
  );
}
