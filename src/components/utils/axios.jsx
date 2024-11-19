import axios from "axios";

// Create an Axios instance
const tastyAPI = axios.create({
  baseURL: "https://tasty.p.rapidapi.com/", // Set the base URL
  headers: {
    "x-rapidapi-key": "13e0d6bc52mshf9f21caa0619c2bp1d64b9jsnc74dd00732c3" , // Your API key
    "x-rapidapi-host": "tasty.p.rapidapi.com", // The host for the API
  },
});


export default tastyAPI;
