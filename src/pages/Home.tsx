import { Link } from "react-router-dom";

import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
          <div className="mx-4 lg:mr-12 place-self-center lg:w-3/4 lg:col-span-6">
            <h1 className="max-w-2xl text-center lg:text-left mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-7xl lg:text-6xl">
              <span className="text-blue-700">The Old</span> Way to Cheat Good{" "}
              <span className="text-blue-700">Game</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              We provide tons of catskill that you can choose and focus on
            </p>
            <form className="relative text-gray-700">
              <input
                className="w-full h-12 px-4 pl-3 pr-8 text-base placeholder-gray-600 border rounded focus:shadow-outline"
                type="text"
                placeholder="Your email address"
              />
              <Link
                to="/login"
                className="absolute inset-y-0 right-0 flex items-center px-5 font-bold text-white bg-blue-700 rounded-r hover:bg-blue-800 focus:ring-blue-300"
              >
                Join Now
              </Link>
            </form>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <div className="relative w-full">
              <div className="absolute border-blue-300 border right-0 top-0 max-w-sm w-full h-full" />
              <div className="absolute z-10 max-w-sm mt-12 mr-12 right-0 top-0">
                <img
                  src="https://raw.githubusercontent.com/kuy-belajar/client-frontpage/master/public/images/hero-image.jpg"
                  alt="Hero image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
