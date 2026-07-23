import API from "./api";

export const getFoods = async () => {
  const { data } = await API.get("/foods");
  return data;
};

export const getFoodById = async (id) => {
  const { data } = await API.get(`/foods/${id}`);
  return data;
};