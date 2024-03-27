import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import API from "../";

function App() {
  const [formData, setFormData] = useState({});
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.fetchAuthors();
        console.log("Authers from API call", response.data);
        setAuthors(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setFormData((pervData) => ({
      ...pervData,
      [name]: value,
    }));
    console.log("update??", formData);
  };

  const handleDelete = async (id) => {
    console.log("delete this one", id);
    const response = await API.deleteAuthor(id);
    console.log("deleted", response.id);
    setAuthors(authors.filter((author) => author._id !== response.id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form filled out", formData);
    const response = await API.createAuthor(formData);
    console.log("data from API", response.data);
    setAuthors([...authors, response.data]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <label>
          Age: <input type="text" name="age" onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={handleInputChange} />
        </label>
        <button type="submit">Button</button>
      </form>

      <div>
        <h3>Author List</h3>
        <ul>
          {authors.map((author) => (
            <li key={author._id}>
              <h4>{author.name}</h4>
              <p>{author.description}</p>
              <button onClick={() => handleDelete(author._id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
