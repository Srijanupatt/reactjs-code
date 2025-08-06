import React, { useState } from 'react';

function Form() {
  const [Name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // corrected typo from "prevenDefault"
    console.log(Name);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <section>
      <h1>Controlled</h1>
      <form onSubmit={handleSubmit}>
        <label>
          name: <input type="text" id="inputName" value={Name} onChange={handleChange} />
        </label>
        <br />
        <button type='submit'>submit</button>
      </form>
    </section>
  );
}

export default Form;
