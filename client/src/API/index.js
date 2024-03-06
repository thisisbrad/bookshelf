import axios from "axios";
// const API = axios.create({
//   baseURL: "https://api.unsplash.com/search/photos",
// });

const API = Object.create(null);

API.fetchAuthors = async () => {
  const response = await axios.get("http://localhost:5000/api/v1/authors/");
  // console.log(response);
  return response.data;
};

API.createAuthor = async (author) => {
  console.log(">>>POST",author )
  const response = await axios.post("http://localhost:5000/api/v1/authors/", {author});
  console.log(response);
  return response.data;
};

API.deleteAuthor = async (id) => {
  const response = await axios.delete(`http://localhost:5000/api/v1/authors/${id}`);
  console.log(response);
  return response.data;
};

export default API;