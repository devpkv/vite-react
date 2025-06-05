import { useState } from "react";  

function Form()
{
    const [formData, setFormData] = useState({
        textbox1: 'NA',
        check1: false,
        radiobtn: 'NA',
        selectbox1: 'None'
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };  

    return(
        <div style={{ maxWidth: 480, margin: "40px auto" }}>
            <h3 style={{ textAlign: "center", marginBottom: 24, color: "#007bff" }}>Form Example</h3> 
            <div className="card">
                <div className="card-body">
                    <div className="form-group" style={{ marginBottom: 18 }}>
                        <label htmlFor="textbox1">Input Box</label> 
                        <input 
                            className="input-box"
                            type="text" 
                            name="textbox1" 
                            id="textbox1" 
                            placeholder="Type here" 
                            onChange={handleInputChange}
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: 18 }}>
                        <label>
                            <input 
                                type="checkbox" 
                                name="check1" 
                                id="check1" 
                                onChange={handleInputChange} 
                                style={{ marginRight: 8 }}
                            />
                            Checkbox
                        </label> 
                    </div>
                    <div className="form-group" style={{ marginBottom: 18 }}>
                        <label style={{ display: "block", marginBottom: 6 }}>Radio Buttons</label> 
                        <label style={{ marginRight: 16 }}>
                            <input 
                                type="radio" 
                                name="radiobtn" 
                                id="radio1" 
                                value="Radio1" 
                                onChange={handleInputChange}
                                style={{ marginRight: 6 }}
                            />
                            Radio 1
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="radiobtn" 
                                id="radio2"
                                value="Radio2" 
                                onChange={handleInputChange}
                                style={{ marginRight: 6 }}
                            />
                            Radio 2
                        </label>
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label htmlFor="selectbox1" style={{ marginBottom: 6, display: "block" }}>Select Box</label>
                        <select 
                            name="selectbox1" 
                            id="selectbox1" 
                            onChange={handleInputChange}
                        >  
                            <option value="">None</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="card" style={{ background: "#f8f9fa" }}>
                <div className="card-body">
                    <h4 style={{ color: "#007bff", marginBottom: 16 }}>Form Data</h4>
                    <div style={{ fontSize: 15, color: "#333" }}>
                        <div className="next-line"><strong>Textbox:</strong> {formData.textbox1}</div>
                        <div className="next-line"><strong>Checkbox:</strong> {formData.check1 ? 'Checked' : 'Unchecked'}</div>
                        <div className="next-line"><strong>Radio:</strong> {formData.radiobtn}</div>
                        <div className="next-line"><strong>Select Box:</strong> {formData.selectbox1}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;