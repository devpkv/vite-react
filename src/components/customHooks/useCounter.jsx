import { useState } from "react";

function useCounter()
{
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };
    
    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };
    
    const reset = () => {
        setCount(0);
    };
    
    return { count, increment, decrement, reset };
}

export default useCounter;
// This custom hook manages a counter state with increment, decrement, and reset functionalities.
// It uses the useState hook to maintain the count value and provides functions to modify it.
// The hook returns the current count value along with the functions to manipulate it.
// This allows components to easily integrate counter functionality without duplicating logic.
// Usage example:
// const { count, increment, decrement, reset } = useCounter();