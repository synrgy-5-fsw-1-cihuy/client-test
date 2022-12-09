import { useState } from "react";

import InputForm from "../components/form/Input";
import SelectForm from "../components/form/Select";
import Layout from "../components/Layout";
import CarService, { IAddCar } from "../services/car";

const Cars = () => {
  const [name, setName] = useState<string>("");
  const [cost, setCost] = useState<number>(0);
  const [capacity, setCapacity] = useState<IAddCar["capacity"]>("small");
  const [image, setImage] = useState<File>();

  const submitClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ name, cost, capacity, image });
    await CarService.addCar({ name, cost, capacity, image });
  };

  return (
    <Layout custom>
      <section className="flex items-center justify-center flex-1 w-full px-6 py-8 mx-auto bg-gray-50 md:min-h-full">
        <div className="w-full bg-white rounded shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Add new car
            </h1>
            <form className="space-y-3 md:space-y-4" onSubmit={submitClick}>
              <InputForm
                value={name}
                type="text"
                placeholder="Toyota"
                onChange={(event) => setName(event.target.value)}
                labelName="Brand"
              />
              <InputForm
                value={cost}
                type="number"
                placeholder="200000"
                onChange={(event) => setCost(Number(event.target.value))}
                labelName="Cost Per Day"
              />
              <SelectForm
                // value={capacity}
                labelName="Capacity"
                // placeholder="Select Car Capacity"
                onChange={(event) =>
                  setCapacity(event.target.value as IAddCar["capacity"])
                }
                options={["small", "medium", "large"]}
              />
              <InputForm
                type="file"
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                onChange={(event) => setImage(event.target.files![0])}
                accept="image/*"
                labelName="Image"
              />
              {image && (
                <figure className="w-full border">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Car image preview"
                  />
                </figure>
              )}
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"
              >
                Add car
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cars;
