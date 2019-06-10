import fetch from 'isomorphic-fetch';
import queryString from 'query-string';

const API_URL_BACKEND="http://localhost:3000/"
export function apiFetch(endpoint, options = {}, query = false) {
  let qs;

  if (query) {
    qs = queryString.stringify(query);
  }

  const getPromise = async () => {
    try {
      const fetchOptions = apiOptions(options);
      const fetchEndpoint = apiEndpoint(endpoint, qs);
      const response = await fetch(fetchEndpoint, fetchOptions);
      console.log(response)
      return response.json();
    } catch (e) {
      throw e;
    }
  };

  return getPromise();
}

export function apiEndpoint(endpoint, qs) {
  let query = '';

  if (qs) {
    query = `?${qs}`;
  }

  return `${API_URL_BACKEND}${endpoint}${query}`;
}

export function apiOptions(options = {}) {
  //const username = localStorage.getItem('username')
  //const password = localStorage.getItem('password')
  const {
    method = 'GET',
    headers = {
      'Content-Type': 'application/json',
     // 'Authorization': 'Basic '+btoa(`${username}:${password}`),
    },
    body = false
  } = options;

  const newOptions = {
    method,
    headers
  };

  if (body) {
    newOptions.body = body;
  }

  return newOptions;
}