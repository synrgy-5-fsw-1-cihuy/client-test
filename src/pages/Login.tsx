import { AxiosError } from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Alert from "../components/Alert";
import InputForm from "../components/form/Input";
import Layout from "../components/Layout";
import AuthService from "../services/auth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const submitClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await AuthService.login({ email, password });
      navigate("/profile");
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error?.response?.data?.message);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    }
  };

  return (
    <Layout custom>
      <section className="flex items-center justify-center flex-1 w-full px-6 py-8 mx-auto bg-gray-50 md:min-h-full">
        <div className="w-full bg-white rounded shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-3 md:space-y-4" onSubmit={submitClick}>
              {error && <Alert>{error}</Alert>}
              <InputForm
                name={email}
                type="email"
                placeholder="name@company.com"
                onChange={(event) => setEmail(event.target.value)}
                labelName="Email"
              />
              <InputForm
                name={password}
                type="password"
                placeholder="••••••••••"
                onChange={(event) => setPassword(event.target.value)}
                labelName="Password"
              />
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
