import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'dd2eacab57962d131eb2537d52aeafc3';

async function getFilmByKeyWord(search, page) {
  try {
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en&page=${page}&include_adult=false&query=${search}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    toast.error('Oops, an error occurred');
  }
}
export { getFilmByKeyWord };
async function getPopular() {
  try {
    const url = `${BASE_URL}trending/all/day?api_key=${API_KEY}&language=en`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    toast.error('Oops, an error occurred');
  }
}

export { getPopular };

async function getFilmDetails(id) {
  try {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    toast.error('Oops, an error occurred');
  }
}
export { getFilmDetails };

async function getFilmCast(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    toast.error('Oops, an error occurred');
  }
}
export { getFilmCast };

async function getFilmReview(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    toast.error('Oops, an error occurred');
  }
}
export { getFilmReview };
