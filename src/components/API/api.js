import axios from "axios";

const customAxios = axios.create({
    baseURL: 'https://dummyjson.com', // Replace with your API base URL
    timeout: 10000, // Set a timeout of 10 seconds
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_TOKEN' // Replace with your API token if needed
    }
  });

customAxios.interceptors.request.use((request) => {   


    console.log('Starting Request', request);
    localStorage.setItem('token', "123456"); // Example: Store request time in local storage
    console.log('Token:', localStorage.getItem('token')); // Example: Retrieve token from local storage
    request.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`; // Example: Set token in request headers  
    // You can add any additional headers or modify the request here
    // For example, you can add an authorization token or modify the request body
    // Example: Add a custom header
    request.headers['X-Custom-Header'] = 'CustomHeaderValue'; // Example: Add a custom header
    // Example: Add a timestamp to the request
    request.headers['Request-Timestamp'] = new Date().toISOString(); // Example: Add a timestamp header
    // You can modify the request here if needed
    const token = localStorage.getItem('token'); // Example: Get token from local storage
    return request;
  }, (error) => {
    console.error('Request Error', error);
    // Handle the error before the request is sent
    return Promise.reject(error);
  }
)

export default customAxios;