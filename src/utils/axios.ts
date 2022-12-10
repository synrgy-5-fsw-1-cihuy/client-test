import axios from "axios";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE2NzA2NTI1MjQsImV4cCI6MTY3MDY1NDMyNH0.EdZmPUS29smdYMvaBce5OVj6S6EkJ8aYqVf7jVYWlMU`;
export default axios.create({
  baseURL: process.env.API_HOST ?? "http://localhost:8080",
});
