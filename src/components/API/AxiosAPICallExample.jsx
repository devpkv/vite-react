import axios from "axios"; 
import { useEffect, useState } from "react";

function AxiosAPICallExample(){
  
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
        setLoading(true);
        axios.get('https://dummyjson.com/todos')
        .then(response => {
            console.log(response);
            setTodos(response.data.todos)
            setLoading(false)
        } )
        .catch(error => {
            console.error('Error fetching todos:', error.message);
            setError("Failed to fetch todos")
            // Optionally, you can set an error state to display an error message       
            setLoading(false)
        
        })
    }
    , []);
if(loading) {
  return <div>Loading...</div>;     
}

if(error) {
  return <div>Error: {error}</div>;
}   

    return (
    <div>
      <h2>Axios API Call</h2>
      
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id} style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? 'green' : 'red',
                        listStyleType: "number",
                    }}>
                    {todo.todo} - {todo.completed ? 'Completed' : 'Pending'}
                    </li>
                ))
            }
        </ul>
       
    </div>
  );
}
export default AxiosAPICallExample;