import { useState } from "react";

function AddNewCountAndIncreaseCount()
{

    const [counters, setCounters] = useState([{id: 1, value: 0}])

    const AddNewCounter = () => {

        setCounters([...counters, {id: counters.length+1, value: 0}]); // add new array in sxisting array

    

      //  console.log(counters)
        
    };

    const increaseCount = (id) => {
 
     setCounters(counters.map(counter => (
        counter.id === id ? {...counter, value: counter.value+1} : counter
     )));

    }


    return(
        <>
            <div>
                <button className="button" onClick={AddNewCounter}>Add Counter</button>
                <ul>
                   {
                        counters.map(counter =>(

                             <li key={counter.id}> Counter {counter.id} : {counter.value} 
                             <button className="" onClick={() => increaseCount(counter.id)}>Click</button>  </li>

                        ))
                   }
                </ul>

            </div>
        </>
    );

}


export default AddNewCountAndIncreaseCount;