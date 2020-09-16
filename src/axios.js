import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: 'https://us-central1-challenge-35e86.cloudfunctions.net/api' // firebase prod
  baseURL: "http://localhost:5001/challenge-35e86/eur3/api", // localhost
});

export default instance;