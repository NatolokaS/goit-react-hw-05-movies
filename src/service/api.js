import axios from 'axios';
import { Notify } from 'notiflix';

export const paramsForNotify = {
  position: 'center-center',
  timeout: 3000,
  width: '400px',
  fontSize: '24px',
};

const KEY = 'bd27c037ab2cca01c1960a6ee250d410';
const URL = 'https://api.themoviedb.org/3';

export async function fetchMovies(endPoint) {
  const url = `${URL}${endPoint}?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}
export async function fetchSearchMovies(endPoint, query) {
  const url = `${URL}${endPoint}?api_key=${KEY}&query=${query}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieDetails(endPoint, movieId) {
  const url = `${URL}${endPoint}/${movieId}?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieCast(endPoint, movieId) {
  const url = `${URL}${endPoint}/${movieId}/credits?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieReviews(endPoint, movieId) {
  const url = `${URL}${endPoint}/${movieId}/reviews?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}
export function onFetchError() {
  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or make another choice!',
    paramsForNotify
  );
}