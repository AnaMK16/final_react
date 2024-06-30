import axios from 'axios';

const api = axios.create({
  baseURL: 'https://openlibrary.org',
});

export const fetchBooks = (subject, limit = 10) => {
  return api.get(`/subjects/${subject}.json?limit=${limit}`);
};

export default api;
