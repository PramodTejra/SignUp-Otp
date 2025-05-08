import { user } from "../lib/user";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await user.logout();
    alert("Logged out");
    navigate("/");
  };

  return (
    <section className="flex items-center justify-center w-screen h-screen bg-primary-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome! You're logged in.</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
