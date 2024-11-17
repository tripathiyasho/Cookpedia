import axios from "axios";

// Create an Axios instance
const tastyAPI = axios.create({
  baseURL: "https://tasty.p.rapidapi.com/", // Set the base URL
  headers: {
    "x-rapidapi-key": "d4e7e95387mshf5c79e8ecea8615p1f9cabjsne65b4d8e1e80", // Your API key
    "x-rapidapi-host": "tasty.p.rapidapi.com", // The host for the API
  },
});

export default tastyAPI;
