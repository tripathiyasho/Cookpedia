import axios from 'axios';

// Create an Axios instance
const tastyAPI = axios.create({
  baseURL: 'https://tasty.p.rapidapi.com/', // Set the base URL
  headers: {
    'x-rapidapi-key': 'a7b47d2ab9msh30f7efab9e195a1p1b3c27jsn0bb84a34fb1b', // Your API key
    'x-rapidapi-host': 'tasty.p.rapidapi.com' // The host for the API
  }
});

export default tastyAPI;
