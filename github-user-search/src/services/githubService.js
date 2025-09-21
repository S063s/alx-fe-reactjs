import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/search/users?q={query}',
  headers: {
    'Authorization': `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
  }
});

export const locationData = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data.location;
}

export const minRepoData = async (username) => {
  const response = await api.get(`/users/${username}/repos`);
  return response.data;
}

export const fetchUserData = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};

export const searchUsers = async (query) => {
  const response = await api.get(`?q=${query}`);
  return response.data.items;
};

export default api;
