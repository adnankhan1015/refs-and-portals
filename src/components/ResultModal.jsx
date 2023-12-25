import React, { forwardRef } from "react";

const ResultModal = forwardRef(({ result, targetTime }, ref) => {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>Your {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        The stopped timer with <strong>X second left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
