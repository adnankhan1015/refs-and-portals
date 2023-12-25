### Refs

#### Connecting and Access HTML elements via refs

- Q. What are Refs? and How can we simplify this(Player.jsx) component with Refs?

- A ref in a React is just a value, just as the state in the end is a value and just as a variable contains a value. BUT its a special kind of value. or It is managed by react in a special way to be precise.

#### Ref

- If you have a value that must be managed but that isn't really a state, because that timer itself has no direct impact on the UI.
- We only care about whether a timer was started, but we, for example. don't wanna update the UI when we stop the timer here(handleStop) function.
- Cause here in handleStop Function Nothing changes.
- We just clear the timer.
- But I don't wanna trigger the UI update.

If you have a case like where you have a value e.g timer.current that doesn't really impact the UI, atleast not directly and you still need to manage it such that it's not reset when the component is re-executed. THEN You might have a great useacase for ref.

##### _Question_. How can we pass ref from one component to another component, so that we can use it in that other component?

- We have to use a special function provided by React, thats called forwardRef. `import {forwardRef} from 'react'`
- It forward a ref from one component to another component so that ref can then be used in that other component.
- Now to use this `forwardRef` method you have to wrap it around your component function.

```
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
```

- With forwardRef a component function receive a second argument after the props argument, and it receive a second parameter called a ref parameter.
