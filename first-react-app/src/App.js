import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("Click button bellow to get advice.");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message />
    </div>
  );
}

function Message() {
  return (
    <p>
      You have read <strong>{count}</strong> pieces of advice
    </p>
  );
}
