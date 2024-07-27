import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("Click button bellow to get advice.");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <button>Get Advice</button>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}
