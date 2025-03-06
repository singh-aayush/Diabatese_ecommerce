"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import axios from "axios";

export default function Login() {
  const router = useRouter(); // Initialize router for redirection
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const { token, userId, role } = response.data;

        // ✅ Store user data in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("role", role);

        alert("Login successful!");
        router.push("/Home"); // Redirect to home page after login
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-[35%] max-w-2xl rounded-[2rem] shadow-lg border border-gray-300 bg-white p-8">
        {/* Login Form */}
        <div className="w-full flex flex-col items-center text-black">
          <h2 className="text-3xl font-semibold">Login</h2>
          <p className="mb-4">Login to your account</p>
          {/* Social Login Icons */}
          <div className="flex space-x-4 mb-4">
            <img
              src="/Icons & Icon-gifs/google.png"
              alt="Google"
              className="w-8 h-8 cursor-pointer"
              onClick={() => signIn("google")}
            />
            <img
              src="/Icons & Icon-gifs/facebook icon.png"
              alt="Facebook"
              className="w-8 h-8 cursor-pointer"
              onClick={() => signIn("facebook")}
            />
            <img
              src="/Icons & Icon-gifs/instagram.png"
              alt="Instagram"
              className="w-8 h-8 cursor-pointer"
            />
          </div>
          {/* Login Inputs */}
          <input
            type="email"
            placeholder="Example@email.com"
            className="w-3/4 py-3 px-5 rounded-[2rem] mb-3 border border-gray-300 bg-[#D9D9D9] text-black outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-3/4 py-3 px-5 rounded-[2rem] mb-3 border border-gray-300 bg-[#D9D9D9] text-black outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}{" "}
          {/* Success Message */}
          <p className="text-sm cursor-pointer">Forgot Password?</p>
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-[2rem] mt-2"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="mt-4">
            Don't have an account?{" "}
            <a
              href="/Register"
              className="text-green-600 cursor-pointer underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
