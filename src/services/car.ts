import axios from "../utils/axios";

export type IAddCar = {
  name: string;
  cost: number;
  capacity: "small" | "medium" | "large";
  image?: File;
};

const addCar = (data: IAddCar) => {
  return axios.post("/api/cars", data).then((res) => res.data);
};

export default {
  addCar,
};
