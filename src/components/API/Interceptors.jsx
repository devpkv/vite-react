import axios from "axios";
import { useState } from "react";

axios.interceptors.request.use(
  (config) => {
    // Modify the request config before sending it
    console.log('Request Interceptor:', config);
    return config;
  },
  (error) => {
    // Handle request error
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    // Modify the response data before returning it
    console.log('Response Interceptor:', response);
    console.log('Response Data:', response.data);
    return response;
  },
  (error) => {
    // Handle response error
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

function Intercepters() {

    const [todo, setTodos] = useState(null); // State to hold todos
    
    const handlePostRequest = async (event) => {    
        event.preventDefault(); // Prevent the default form submission behavior
        const formData = new FormData(event.target); // Get the form data
        const todoName = formData.get('todo'); // Get the value of the 'todo' input
        const completed = formData.get('completed') === 'on'; // Get the value of the 'completed' checkbox
       
         
        axios.post('https://dummyjson.com/todos/add', {todo: todoName, completed: completed, userId: 1})
        .then(response => {
            console.log('Response:', response.data);
            setTodos(response.data); // Update the todos state with the new todo
            // You can also reset the form if needed
            event.target.reset(); // Reset the form fields  
            // Optionally, you can handle the response, e.g., show a success message to the user

        
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error, e.g., show an error message to the user
        }); 
   
    }
    
  return (
    <div className="post-request">
      <h1>Axios Interceptors Example</h1>
      <p>This component demonstrates how to use Axios interceptors for request and response handling.</p> 
    
    
      <h2>Post Request</h2>
      <p>This component handles POST requests to the API.</p>
      <form onSubmit={handlePostRequest} method="post">

        <label htmlFor="todo">Todo Name:</label>
        <input type="text" id="todo" name="todo" required />

        <label htmlFor="completed">Completed:</label>
        <input type="checkbox" id="completed" name="completed" />   
<hr />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button> 

      </form>

        <h3>Todo:</h3>
         {todo ? (
        <ul>
          <li
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'green' : 'red',
              marginBottom: '8px'
            }}
          >
            {todo.todo} - {todo.completed ? 'Completed' : 'Pending'}
          </li>
        </ul>
      ) : (
        <p>No todo added yet.</p>
      )}
   
    </div>
  );
}
export default Intercepters;
// Compare this snippet from src/components/API/MultipleRequest.jsx:
