import axios from "axios";

const api = axios.create({

  baseURL: "http://localhost:5000/api",

  headers: {
    "Content-Type": "application/json",
  },

});

// =========================
// REQUEST INTERCEPTOR
// =========================
api.interceptors.request.use(

  (config) => {

    const token =
      localStorage.getItem("accessToken");

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }

    return config;

  },

  (error) => {

    return Promise.reject(error);

  }

);

// =========================
// ERROR HANDLER
// =========================
const handleError = (error) => {

  if (error.response) {

    console.error(
      "Error Response:",
      error.response.data
    );

    return error.response.data;

  }

  else if (error.request) {

    console.error(
      "No Response:",
      error.request
    );

    return {
      message:
        "No response from server",
    };

  }

  else {

    console.error(
      "Error:",
      error.message
    );

    return {
      message: error.message,
    };

  }

};

// =========================
// RESPONSE INTERCEPTOR
// =========================
api.interceptors.response.use(

  (response) => response,

  (error) =>
    Promise.reject(
      handleError(error)
    )

);

export default api;