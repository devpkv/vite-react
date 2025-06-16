function FormExample() {

    const handleSubmit = (event) => {   

        event.preventDefault(); // Prevent the default form submission behavior

        console.log(event.target.message.value); // Access the name field value
    }

  return (
    <div>
        <h1>Form Example</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            </div>
            <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default FormExample;