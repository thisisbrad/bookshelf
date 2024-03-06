import React, { useEffect, useState } from 'react';
import SearchBar from "./components/SearchBar";
import AuthorList from "./components/AuthorList";
import API from "./API";
import "./App.css";

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Perform your asynchronous operation here, for example, a fetch request
        const response = await API.fetchAuthors();
        // Update state with the fetched data
        setAuthors(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors here, you might want to set an error state or show a message to the user
      }
    };

    // Call the async function
    fetchData();
  },[])

  const handleSearch = async event => {
    event.preventDefault();
    console.log("Search button clicked!", event.target.search.value);
    const response = await API.fetchAuthors();
    // console.log("From our API!", response.data);
    setAuthors(response.data)
  };

  return (
    <>
      <h1>Author Search</h1>
      <SearchBar onSubmit={handleSearch} />
      <AuthorList authors={authors}/>
    </>
  );
}

export default App;