import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../lib/user";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const res = await user.verifyOtp(token.userId, otp);
    alert("OTP verified");
    navigate("/dashboard");
  };

  return (
    <section className="flex items-center justify-center w-screen h-screen bg-primary-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg space-y-6">
        <h2 className="text-2xl font-bold">Enter OTP</h2>
        <form onSubmit={handleVerifyOtp} className="flex gap-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="flex-1 border px-3 py-2 rounded-md"
            placeholder="012345"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Verify
          </button>
        </form>
      </div>
    </section>
  );
}
