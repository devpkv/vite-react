import { useEffect } from "react";
import useCounter from "./useCounter";

function CounterExample()
{
    const { count, increment, decrement, reset} = useCounter();

   
    return(
        <div>
            <h1>Counter Example</h1>
            <p>This is a simple counter example using React hooks.</p>
            <p>Click the button to increment the counter.</p>
            <h3>Count : {count}</h3>
            <button onClick={increment}>Increment Counter</button>
            <p>Click the button to decrement the counter.</p>
            <button onClick={decrement}>Decrement Counter</button>
            <p>Click the button to reset the counter.</p>
            <button onClick={reset}>Reset Counter</button>
            <p>Use the custom hook to manage the counter state.</p>
            <p>Check the console for the counter value.</p>
            <p>Note: This is a static example. The actual counter functionality is implemented in the custom hook.</p>
        </div>
    )
}

export default CounterExample;