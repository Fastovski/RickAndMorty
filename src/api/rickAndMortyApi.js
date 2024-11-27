const API_BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (page = 1, filters = {}) => {
  const query = new URLSearchParams({ ...filters, page }).toString();
  const response = await fetch(`${API_BASE_URL}/character?${query}`);
  if (!response.ok) throw new Error("Failed to fetch characters");
  return response.json();
};

export const fetchCharacterDetails = async (id) => {
  const response = await fetch(`${API_BASE_URL}/character/${id}`);
  if (!response.ok) throw new Error("Failed to fetch character details");
  return response.json();
};


export const fetchLocations = async (page = 1, filters = {}) => {
  const query = new URLSearchParams({ ...filters, page }).toString();
  const response = await fetch(`${API_BASE_URL}/location?${query}`);
  if (!response.ok) throw new Error("Failed to fetch locations");
  return response.json();
};

export const fetchLocationDetails = async (id) => {
  const response = await fetch(`${API_BASE_URL}/location/${id}`);
  if (!response.ok) throw new Error("Failed to fetch location details");
  return response.json();
};
