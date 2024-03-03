// services/strapi.ts
import axios from 'axios';

const STRAPI_API_URL = process.env.STRAPI_API_URL;

export const fetchPosts = async () => {
  const response = await axios.get(`${STRAPI_API_URL}/posts`);
  return response.data;
};
