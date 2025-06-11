import { createContext, useContext } from "react";

const ThemeContext = createContext("light");// Example context value
function ContextProvider() {


  return (
    <ThemeContext.Provider value="blue">
      <div style={{border: "1px solid white", padding: "10px"}}>
        <h1>Example of Use Context</h1>
        <ChildCOmponent1 />
      </div>
    </ThemeContext.Provider>
  );
}

function ChildCOmponent1() {
  return (
     <div style={{border: "1px solid white", padding: "10px"}}>
      <h2>Child Component</h2>
    <ChildComponent2/>
    </div>
  );
}


function ChildComponent2() {
  return (
     <div style={{border: "1px solid white", padding: "10px"}}>
      <h2>Child Component 2</h2>
      <ThemeComponent />
    </div>
  );
} 

function ThemeComponent() {

    const theme = useContext(ThemeContext); // Using the context value
  return (
    
      <div style={{border: "1px solid", borderColor: theme, padding: "10px"}}>
        <h2>Theme Component</h2>
        <p>This component provides a theme context value : {theme} </p> 
      </div> 
  );
}

export default ContextProvider;