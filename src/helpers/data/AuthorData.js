import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addAuthor = (author) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/authors.json`, author)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/authors/${response.data.name}.json`, body)
        .then(() => getAuthors().then((authorArray) => resolve(authorArray)));
    })
    .catch((error) => reject(error));
});

const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/authors/${firebaseKey}.json`)
    .then(() => getAuthors().then((authorArray) => resolve(authorArray)))
    .catch((error) => reject(error));
});

const updateAuthor = (author) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/authors/${author.firebaseKey}.json`, author)
    .then(() => getAuthors().then(resolve))
    .catch((error) => reject(error));
});

const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/authors/${firebaseKey}.json`)
    .then((author) => resolve(author.data))
    .catch((error) => reject(error));
});

export {
  getAuthors,
  addAuthor,
  updateAuthor,
  deleteAuthor,
  getSingleAuthor
};
