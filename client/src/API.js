import "axios";
import axios from "axios";

const API = {};
const BASE_URL = "http://localhost:5000/api/v1/authors";

API.createAuthor = async (author) => {
  const response = await axios.post(BASE_URL, {
    author,
  });
  console.log("API call", response);
  return response.data;
};

API.fetchAuthors = async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log("data from async ", response);
    return response.data;
  } catch (error) {
    console.error("2222", error);
  }
  axios
    .get(BASE_URL)
    .then(function (response) {
      // handle success
      console.log("Promise based", response);
    })
    .catch(function (error) {
      // handle error
      console.log("ERROR 1", error);
    });
  // console.log("Did you get Data?");
  // return response.data;
};

API.deleteAuthor = async (id) => {
  console.log("take me", id);
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

export default API;
