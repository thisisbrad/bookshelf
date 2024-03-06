import axios from "axios";
// const API = axios.create({
//   baseURL: "https://api.unsplash.com/search/photos",
// });

const API = Object.create(null);

API.fetchAuthors = async () => {
  const response = await axios.get("http://localhost:5000/api/v1/authors/");
  console.log(response);
  return response.data;
};
API.fetchAuthors = async () => {
  const response = await axios.get("http://localhost:5000/api/v1/authors/");
  console.log(response);
  return response.data;
};
API.fetchAuthors = async () => {
  const response = await axios.get("http://localhost:5000/api/v1/authors/");
  console.log(response);
  return response.data;
};

export default API;