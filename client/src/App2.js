import React, { useState } from "react";

function YourFormComponent() {
  // Initialize state with an object to hold input values
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    // Add more inputs as needed
  });

  // Handle changes in input values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the state with the new input value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the collected form data
    console.log(formData);
    // Add your logic for handling the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input 1:
        <input
          type="text"
          name="input1"
          value={formData.input1}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Input 2:
        <input
          type="text"
          name="input2"
          value={formData.input2}
          onChange={handleInputChange}
        />
      </label>
      {/* Add more inputs as needed */}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default YourFormComponent;
