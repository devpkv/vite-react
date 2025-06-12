import { number } from "prop-types";
import { useEffect, useState } from "react";

function APIExample() {
  
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/todos')
    .then(response => response.json())
    .then(data => {
        setTodos(data.todos)
        // console.log(data.todos);
        // console.log(data.todos[0].todo);
        // console.log(data.todos[0].completed);
        // console.log(data.todos[0].id);
        // console.log(data.todos[0].userId);
        // console.log(data.todos[0].completed ? 'Completed' : 'Pending');
        setLoading(false)}) 
    .catch(error => {
        
        console.error('Error fetching todos:', error.message);
        setError("Failed to fetch todos")
        // Optionally, you can set an error state to display an error message       
        // 

        setLoading(false)
    } )
     
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
      <h2>Todo API</h2>
      
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
export default APIExample;