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

If you have a case like where you have a value e.g timer.current that doesn't really impact the UI, atleast not directly and you still need to manage it such that it's not reset when the component is re-executed. THEN You might have a great useacase for ref
