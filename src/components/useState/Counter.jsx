import { useState } from "react"
function Counter()
{

    const [count, setCount] = useState(0)  
 
    // const countIncrease = () => {
    //     setCount(count+1)
    // }

    const countDecrease = () => {
        if(count > 0)
        setCount(count-1)
    } 
    return (
        <div>
            <p>Counter : {count}</p>
            <button onClick={()=>{ setCount(count + 1)}}>Add +1 </button>
            <button onClick={countDecrease}>Subtract -1 </button>
        </div>
    )
}

export default Counter;