import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import {
  ButtonComponent,
  CheckBoxComponent,
} from "@syncfusion/ej2-react-buttons";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, use hardcoded credentials
      if (username === "demo" && password === "password") {
        // In a real app, save the token
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (error: unknown) {
      console.error(error);
      setError("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Loan Dashboard
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to your account
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex">
                  <div>
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <TextBoxComponent
                  id="username"
                  placeholder="Enter your username"
                  floatLabelType="Auto"
                  value={username}
                  change={(e) => setUsername(e.value as string)}
                  cssClass="w-full"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <TextBoxComponent
                  id="password"
                  placeholder="Enter your password"
                  floatLabelType="Auto"
                  type="password"
                  value={password}
                  change={(e) => setPassword(e.value as string)}
                  cssClass="w-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckBoxComponent
                  checked={rememberMe}
                  change={(e) => setRememberMe(e.checked as boolean)}
                  label="Remember me"
                />
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <ButtonComponent
                isPrimary={true}
                cssClass="w-full e-primary"
                content={isLoading ? "Signing in..." : "Sign in"}
                disabled={isLoading}
              />
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Demo credentials
                </span>
              </div>
            </div>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Username:{" "}
                <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">
                  demo
                </span>
              </p>
              <p className="text-gray-600 mt-1">
                Password:{" "}
                <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">
                  password
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
