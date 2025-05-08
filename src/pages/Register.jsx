// src/pages/EmailForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../lib/user";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await user.createOtp(email);
      localStorage.setItem("token", JSON.stringify(res));
      alert("OTP sent to email");
      navigate("/verify");
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    }
  };

  return (
    <section className="flex items-center justify-center w-screen h-screen bg-primary-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg space-y-6">
        <h2 className="text-2xl font-bold">Enter Email</h2>
        <form onSubmit={handleCreateOtp} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 rounded-md"
            placeholder="team@appwrite.io"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded-md"
            placeholder="Password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border px-3 py-2 rounded-md"
            placeholder="Confirm Password"
            required
          />
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
