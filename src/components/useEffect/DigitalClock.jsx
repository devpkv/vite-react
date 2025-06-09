import { useEffect, useState } from "react";

function DigitalClock (){

    const [time, setTime] = useState(new Date())

    useEffect(()=>{
       const timerId = setInterval(setTime(new Date()), 1000)
       
       return() => clearInterval(timerId);
    })

    const formatedTime = time.toLocaleTimeString('en-US',
        {
            hour : '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }
    )

    return(
        <div>
            <div className="card clock-container" style={{padding: '20px'}}>
                <h3>Digital Clock</h3>
                <h4>{formatedTime}</h4>
            </div>
        </div>
    );
}

export default DigitalClock;