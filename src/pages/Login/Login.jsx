import { useState } from "react";
import Cover from "../../components/Cover/Cover";
import captchaImage from "../../assets/others/authentication.png";

// Function to generate random CAPTCHA string
const generateCaptcha = () => {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

const LoginForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptchaInput, setUserCaptchaInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleCaptchaInput = (e) => {
    setUserCaptchaInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // CAPTCHA validation
    if (userCaptchaInput !== captcha) {
      setErrorMessage("Invalid CAPTCHA. Please try again.");
      setCaptcha(generateCaptcha()); // Refresh CAPTCHA on failure
    } else {
      setErrorMessage("");
      alert("Login successful!");
      // Add your login logic here (API call, authentication etc.)
    }
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  return (
    <div>
      <Cover />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="captcha"
                className="block text-gray-700 font-semibold mb-2"
              >
                CAPTCHA
              </label>
              <div className="flex justify-between items-center">
                <span
                  style={{ backgroundImage: `url(${captchaImage})` }}
                  className=" text-2xl bg-gray-700 text-gray-400 font-bold py-2 px-4 rounded-md"
                >
                  {captcha}
                </span>
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className="text-sm text-blue-500 underline hover:text-blue-700"
                >
                  Refresh CAPTCHA
                </button>
              </div>
              <input
                type="text"
                id="captcha"
                value={userCaptchaInput}
                onChange={handleCaptchaInput}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                placeholder="Enter CAPTCHA"
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
