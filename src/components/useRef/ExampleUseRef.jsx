import { useEffect, useRef, useState } from "react";

function ExampleUseRef()
{
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    // The useRef hook is not used in this example, but it can be used to create a mutable reference.
    // const myRef = useRef(0); // Example of creating a ref, but not used in this example.
    // myRef.current = count; // You can update the ref value without causing a re-render.
    // console.log(myRef.current); // This will log the current value of the ref.

    // Note: The ref count is not being displayed or updated in this example,

    // but you can use the useRef hook to create a mutable reference that persists across renders.
    // and does not trigger a re-render when its value changes.

    useEffect(() => {
        // This effect runs after every render, but it does not cause a re-render itself.
        console.log("Component rendered or count changed:", count);
    })
    
    const myRef = useRef(0);

    const increaseRefCount = () => {        
        myRef.current += 1; // Update the ref value
        console.log(myRef.current); // Log the updated ref value
    }

    return(
        <div>
            <h3>UseRef Example </h3>
            <p>
                The useRef hook is used to create a mutable reference that persists for the lifetime of the component. 
                It can be used to access DOM elements directly or to store any mutable value that you want to keep 
                across renders without causing a re-render when it changes.
            </p>

            State Count : {count}
            <button className="button" onClick={increaseCount}>Increase Count</button> 

            <br />
        <br />
            Ref Count : {myRef.current}
            <button className="button" onClick={increaseRefCount}>Increase Count</button>
        </div>
    )
}

export default ExampleUseRef;