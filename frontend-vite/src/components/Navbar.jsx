import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg border-b-4 border-blue-500">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* 🔹 Logo */}
        <h1 className="text-3xl font-extrabold text-blue-700">
          My<span className="text-yellow-500">Shop</span>
        </h1>

        {/* 🔹 Menu Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-blue-700 text-lg font-semibold px-4 py-2 border-b-2 border-transparent hover:border-yellow-400 hover:text-yellow-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/Products"
            className="text-blue-700 text-lg font-semibold px-4 py-2 border-b-2 border-transparent hover:border-yellow-400 hover:text-yellow-500 transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/Login"
            className="bg-yellow-500 text-white px-5 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-300 border-2 border-yellow-600"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
