import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/search/users?q={query}',
  headers: {
    'Authorization': `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
  }
});

export const fetchUserData = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};

export const searchUsers = async (query) => {
  const response = await api.get(`?q=${query}`);
  return response.data.items;
};
