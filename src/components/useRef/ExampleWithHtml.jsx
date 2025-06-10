import { useRef } from "react";

function ExampleWithHtml()
{
    const inputUseRef = useRef(null);  

    const handlefocusOnClick = () => {

        inputUseRef.current.focus(); // Focus on the input element using useRef
        inputUseRef.current.style.backgroundColor = "lightblue"; // Change background color

    }
    
    const resetFocus = () => {
        inputUseRef.current.blur(); // Remove focus from the input element
        inputUseRef.current.style.backgroundColor = ""; // Reset background color
    }

    return(
        <div>
           <p> Use Ref Example with HTML</p>
            <input type="text" ref={inputUseRef} placeholder="Focus on me" />
            <button className="button" onClick={handlefocusOnClick} >Click here</button>

            <br /> <br />

            <button className="button" onClick={resetFocus}>Reset </button>

            <p>Click the button to focus on the input field and change its background color.</p>
            <p>Note: This example uses the useRef hook to directly manipulate the DOM element.</p>
            <p>useRef is useful for accessing DOM elements directly without causing re-renders.</p>

        </div>
    )
}

export default ExampleWithHtml;