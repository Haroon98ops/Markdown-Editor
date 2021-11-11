import axios from 'axios';

export const markdownApi = () => axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&exintro=1&titles=${window.getSelection().toString()}`)
