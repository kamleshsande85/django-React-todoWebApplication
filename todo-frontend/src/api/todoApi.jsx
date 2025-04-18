import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/todos/";

export const getTodo = () => {
  return axios.get(API_URL);
};

export const createTodo = (data) => {
  return axios.post(API_URL, data);
};

export const updateTodo = (id, data) => {
  return axios.put(`${API_URL}${id}/`, data);
};

export const deleteTodo = (id) => {
  return axios.delete(`${API_URL}${id}/`);
};
