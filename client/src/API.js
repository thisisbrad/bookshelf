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
  const response = await axios.get(BASE_URL);
  return response.data;
};

API.deleteAuthor = async (id) => {
  console.log("take me", id);
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

export default API;
