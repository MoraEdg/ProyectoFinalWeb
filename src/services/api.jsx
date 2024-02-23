import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

// REGISTROS DE USUARIOS

export const postRegister = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
};

// LOGIN
export const postLogin = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}

//

export const getUserAll = async (token) => {
  try {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_BASE_URL}/clients/all`, config);
    return response.data;
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    throw new Error(errorMessage);

  }
}


export const deleteUserById = async (token, id) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(`${API_BASE_URL}/users/${id}`, config);
    return response.data;
  } catch (error) {
    console.log(error);
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}


// Obtener todas las noticias
export const getAllNews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/news/all`);
    return response.data;
  } catch (error) {
  
    console.log(error);
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}