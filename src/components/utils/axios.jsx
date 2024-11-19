import axios from "axios";

// Create an Axios instance
const tastyAPI = axios.create({
  baseURL: "https://tasty.p.rapidapi.com/", // Set the base URL
  headers: {
    "x-rapidapi-key": "a4b6a8e550mshab53c5f25246f27p129ef4jsn22e6d7c9d5ab", // Your API key
    "x-rapidapi-host": "tasty.p.rapidapi.com", // The host for the API
  },
});

export default tastyAPI;
