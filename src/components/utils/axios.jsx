import axios from "axios";

// Create an Axios instance
const tastyAPI = axios.create({
  baseURL: "https://tasty.p.rapidapi.com/", // Set the base URL
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPI_KEY , // Your API key
    "x-rapidapi-host": "tasty.p.rapidapi.com", // The host for the API
  },
});


export default tastyAPI;
