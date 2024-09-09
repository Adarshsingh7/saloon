import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../service/operations/authApi";
import saloonImg from "../assests/saloonImage.jpeg";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { loading, token } = useSelector((state) => state.auth);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(userName, password, navigate));
  }

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url('https://wallpaperswide.com/download/dark_black_background-wallpaper-600x800.jpg')",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full flex">
        <div
          className="hidden md:block md:w-1/2 bg-cover"
          style={{
            backgroundImage: `url(${saloonImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
          }}
        >
          <button
            className="bg-white m-4 p-2 rounded-xl"
            onClick={() => navigate("/")}
          >
            ⬅️ Back
          </button>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-black mb-2">
            Make Yourself More Confident
          </h2>
          <h2 className="text-lg text-zinc-700 font-semibold mb-4">
            Welcome To Salon
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-zinc-700">User Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="userName"
              />
            </div>
            <div className="mb-4">
              <label className="block text-zinc-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
