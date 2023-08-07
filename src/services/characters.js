import api from './apiConfig';

export const getCharacters = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error;
  }
}

export const getCharacter = async id => {
  try {
    const response = await api.get(`/char/char${id}`);
    return response.data;
  } catch (error) {
    console.error;
  }
}

export const createCharacter = async character => {
  try {
    const response = await api.post('/', character);
    return response.data;
  } catch (error) {
    console.error;
  }
}

export const updateCharacter = async (id, character) => {
  try {
    const response = await api.put(`/char/char${id}`, character);
    return response.data;
  } catch (error) {
    console.error;
  }
}

export const deleteCharacter = async id => {
  try {
    const response = await api.delete(`/char/char${id}`);
    return response.data;
  } catch (error) {
    console.error;
  }
}