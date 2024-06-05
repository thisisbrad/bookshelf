import { useState, useEffect } from "react";
import "./App.css";
import API from "./API";

function App() {
  const [formData, setFormData] = useState({});
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.fetchAuhtors();
        console.log("response", response);
        setAuthors(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("State", formData);
    // Make an API call
    const response = await API.createAuthor(formData);
    console.log(response.data);
    setAuthors([...authors, response.data]);
  };

  const handleDelete = async (id) => {
    console.log("id", id);
    const response = await API.deleteAuthor(id);
    console.log("response", response);
    setAuthors(authors.filter((author) => author._id !== response.id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="name" onChange={handleInput} />
        </label>
        <label>
          Age: <input type="text" name="age" onChange={handleInput} />
        </label>
        <label>
          Description:{" "}
          <input type="text" name="description" onChange={handleInput} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3> Author List</h3>
        <ul>
          {authors.map((author) => (
            <li key={author._id}>
              <h4>{author.name}</h4>
              <p>{author.age}</p>
              <p>{author.description}</p>
              <button onClick={() => handleDelete(author._id)}> Delete</button>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default App;
