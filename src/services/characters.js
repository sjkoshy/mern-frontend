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
    const response = await api.get(`/char/${charId}`);
    return response.data;
  } catch (error) {
    console.error;
  }
}

export const getCharacterByName = async name => {
  try {
    const response = await api.get(`/name/${name}`);
    return response.data;
  } catch (error) {
    console.error;
  }
}

export const getCharacterBySpecies = async species => {
  try {
    const response = await api.get(`/species/${species}`);
    return response.data;
  } catch (error) {
    console.error;
  }
}

export const getCharacterByGender = async gender => {
  try {
    const response = await api.get(`/gender/${gender}`);
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
    const response = await api.put(`/char/${charId}`, character);
    return response.data;
  } catch (error) {
    console.error;
  }
}

export const deleteCharacter = async id => {
  try {
    const response = await api.delete(`/char/${charId}`);
    return response.data;
  } catch (error) {
    console.error;
  }
}