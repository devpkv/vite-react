import { useForm } from "react-hook-form";

function ReactHookForm() {

    const {register, handleSubmit, watch, formState : {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    // const onSubmit = (data) => {
    //     console.log(data);
    //     alert(`Name: ${data.name}, Email: ${data.email}`);
    // };

    const WatchedName = watch("name"); // Watch the name field
    const WatchedEmail = watch("email"); // Watch the email field
    console.log("Watched Name:", WatchedName);
    console.log("Watched Email:", WatchedEmail);


    const checkIfEmailExists = async () => {
        // Simulate an API call to check if the email exists
     
      console.log("Checking if email exists:");
        return true;
    }

  return (
    <div>
      <h1>React Hook Form</h1>
      <p>
        React Hook Form is a library for managing forms in React applications. It provides a simple and efficient way to handle form state, validation, and submission.
      </p>
    <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="name">Name:</label>
        <input {...register("name", { required: true})} />  
        {/* Register the name field with validation */}
        {/* The `required: true` option makes the field mandatory */}
        {/* If the field is not filled, an error will be shown */}
        {/* You can also add other validation rules like minLength, maxLength, pattern, etc */}
        {/* Display error message if the name field is empty */}
        {/* You can customize the error message as needed */}
        {/* For example, you can use `errors.name?.message` to show a custom error message */}
        {/* Here, we are using a simple span to show the error message */}
        {errors.name && <span>This field is required</span>}
        {/* Display error if name is not provided */}

        <label htmlFor="email">Email:</label>
        <input {...register("email", {pattern : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i ,
          validate: {
            checkEmail: async () => {
              console.log("Validating email:", WatchedEmail);
              const exist = await checkIfEmailExists();
              return !exist || "Email already exists";
          }
          }
        }
        )} />
        {errors.email && <span>Invalid email address</span>}
        {/* Register the email field with a pattern validation */}
        {/* The pattern checks if the email is in a valid format */}

        <button>Submit</button>
        <button type="reset">Reset</button>
    </form>

    <div className="card">
        <div className="card-body">
            <h2>Realtime Form Data</h2>
            <p><strong>Name:</strong> {WatchedName}</p>
            <p><strong>Email:</strong> {WatchedEmail}</p>
        </div>
    </div>
    </div>
  );
}
export default ReactHookForm;