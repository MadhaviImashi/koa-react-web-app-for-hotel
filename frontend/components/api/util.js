
/**APIs calls of all CRUD http requests are implemented in this class */
let userID = localStorage.getItem('user_id');
const axios = require("axios");

const BASE_URL = "http://localhost:4000";

export const getRequest = (uri) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}${uri}`,
        {
          params: {
            user_id: userID,
      }
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      })
  });
};

export const getByIDRequest = (uri, id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}${uri}${id}`, {
        params: {
          user_id: userID,
    }
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      })
  });
};

export const postRequest = (uri, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}${uri}`, data, {
        params: {
          user_id: userID,
    }
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};

export const updateRequest = (uri, id, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${BASE_URL}${uri}${id}`, data, {
        params: {
          user_id: userID,
        }
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
    })
  })
}

export const deleteRequest = (uri, id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${BASE_URL}${uri}${id}`, {
        params: {
          user_id: userID,
    }
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      })
  });
}

