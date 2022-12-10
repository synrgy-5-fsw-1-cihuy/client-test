import axios from "../utils/axios";

export type IAddCar = {
  name: string;
  cost: number | string;
  capacity: "small" | "medium" | "large";
  image?: File | FormData;
};

const addCar = (data: FormData) => {
  return axios.post("/api/cars", data).then((res) => res.data);
};

export default {
  addCar,
};
