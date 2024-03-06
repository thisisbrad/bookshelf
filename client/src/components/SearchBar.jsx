import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleChange = event => {
    console.log("event.target.value:", event.target.value);
    setTerm(event.target.value);
  };

  return (
    <>
      <h3>Search Bar</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={term}
          onChange={handleChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
        />
        {term.length < 3 && <p>Author name must be at least 3 characters</p>}
        <br/>
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchBar;