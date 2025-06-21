import { useForm } from "react-hook-form";

function ReactHookForm() {

    const {register, handleSubmit, watch, formState : {errors}} = useForm({
      mode: 'onChange' // This will trigger validation on every change
      // mode: "onBlur" // This will trigger validation on blur
      // mode: "onSubmit" // This will trigger validation on submit
      // mode: "all" // This will trigger validation on all events
      // mode: "onChange" // This will trigger validation on change
    });

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


    const emailExists = ["abs@gmail.com", "pk@gmail.com"];
    const checkIfEmailExists = async (email) => {
        // Simulate an API call to check if the email exists
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // For demonstration, let's assume the email " 
        return emailExists.includes(email) ? true : false;
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
          required: true,
          // Custom validation function to check if the email exists
          // This function will be called when the form is submitted
          // If the email exists, it will return an error message
          // If the email does not exist, it will return true
          // The `validate` option allows you to define custom validation logic
          // The `checkEmail` function is an asynchronous function that checks if the email exists
          // The `notAdmin` function checks if the email is not "
          validate: {
            checkEmail: async(value) => { 
             // console.log("Validating email:", value);

             const emailExists = await checkIfEmailExists(value);
           
             // console.log("Email exists:", emailExists);
              return emailExists ? "Email already exists" : true;
            },
            notAdmin: (value) => value !== "Admin@gmail.com" || "This email cannot be Admin"
          }
        }
        )} />
        {errors.email && <span>{errors.email.message || "Invalid email address"}</span>}
        {/* Register the email field with a pattern validation */}
        {/* The pattern checks if the email is in a valid format */}


        <div>
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password",{
            required: true,
            minLength: 6,
            maxLength: 20
          })} />

          {errors.password && <span>Password must be between 6 and 20 characters</span>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" {...register("confirmPassword", {
            validate: (value) => value === watch("password") || "Passwords do not match"
          })} />
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </div>


        <button>Submit</button>
        <button type="reset">Reset</button>
    </form>

    <div className="card">
        <div className="card-body">
            <h2>Realtime Form Data</h2>
            <p><strong>Name:</strong> {WatchedName}</p>
            <p><strong>Email:</strong> {WatchedEmail}</p>
            <p><strong>Password:</strong> {watch("password")}</p>
            <p><strong>Confirm Password:</strong> {watch("confirmPassword")}</p> 
        </div>
    </div>
    </div>
  );
}
export default ReactHookForm;