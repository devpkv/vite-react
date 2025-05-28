import { useState } from "react"
 
function MultipleState()
{
    const [count, setCount] = useState(0)  
    const [step, setStep] = useState(1)  
     

    const countIncrease = () => {
        setCount(count+step)
    }

    const countDecrease = () => {
        if(count > 0 && count-step > 0)
        setCount(count-step)
    } 

    return(
        <div>
            <p>Counter : {count}</p>
            <div>
                
                <label>Set Count Value</label> <br />
                <input className="input-box" type="number" min={1} value={step} 
                    onChange={(e) => setStep(parseInt(e.target.value))}
                />
            </div>
            <hr />
            <button className="button" onClick={countIncrease}>Add +1 </button>
            <button className="button" onClick={countDecrease}>Subtract -1 </button>
        </div>
    )
}

export default MultipleState;