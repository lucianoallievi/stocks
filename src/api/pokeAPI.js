import axios from "axios";

export const pokeAPI = axios.create({ baseURL: "https://pokeapi.co" });

export const getPoke = async () => {
  const res = await pokeAPI.get("/api/v2/pokemon/");
  return res.data;
};
