import { useForm } from "react-hook-form";

function ReactHookForm() {

    const {register, handleSubmit, watch} = useForm();

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

  return (
    <div>
      <h1>React Hook Form</h1>
      <p>
        React Hook Form is a library for managing forms in React applications. It provides a simple and efficient way to handle form state, validation, and submission.
      </p>
    <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="name">Name:</label>
        <input {...register("name")} />

        <label htmlFor="email">Email:</label>
        <input {...register("email")} />

        <button>Submit</button>
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