import axios from "axios"; 
import { useEffect, useState } from "react";

function MultipleRequest(){
  
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
        setLoading(true);
        axios.all([axios.get('https://dummyjson.com/todos'),
                    axios.get('https://dummyjson.com/products')])
        .then(axios.spread((todo, product) => {
            console.log(todo);
            console.log(product);
            // Assuming you want to display todos, you can set the state here
            // You can also handle the product data if needed
            // For example, if you want to log the product data:
            console.log('Product Data:', product.data.products);
            setTodos(todo.data.todos)
            setProducts(product.data.products)
            setLoading(false)
        } ))
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
      <h2>Axios Multiple API Call</h2>
      
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



        <h2>Products Data</h2>
        <ul>
            {
                products.map(product => (
                    <li key={product.id} style={{
                        listStyleType: "number",
                    }}>
                    {product.title} - Price: ${product.price}
                    </li>
                ))
            }
        </ul>
       
    </div>
  );
}
export default MultipleRequest;