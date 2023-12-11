import { useState } from "react";

export default function Player() {
  const [eneteredPlayerName, setEneteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleChange(event) {
    setSubmitted(false);
    setEneteredPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? eneteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={eneteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
