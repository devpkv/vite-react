import { useState } from "react";
 
function ColorPicker({ value, onChange }) {

    const [color, setColor] = useState("#000000");

    const handleChnage = (event) => {
        setColor(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };

  return (
   <div className="card"  style={{backgroundColor:color}}>
    <div className="card-body">
         <div className="color-picker">
        <h2>Color Picker</h2>
        <input type="color" name="picker" id="picker" onChange={handleChnage} />
        <br />
        <label style={{color:{color}}}>Color Picker : {color}</label>
    </div>
    </div>
   </div>
  );
}

export default ColorPicker;