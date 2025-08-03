import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Events", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="border-gray-300 bg-blue-200 lg:px-6 xl:px-8 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src="" alt="Logo" className="mr-3 h-12" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/user"
              className="text-gray-700 hover:text-blue-500 text-sm font-bold ml-4 px-3.5 py-200"
            >
              Login
            </Link>
            <Link
              to="#"
              className="text-gray-600 hover:text-white hover:shadow-md text-sm hover:bg-orange-700 font-bold ml-4 px-4 py-2.5 bg-orange-400 outline-none rounded-md"
            >
              Sign Up
            </Link>
          </div>
          <div className="border border-gray-300 bg-white pl-2 rounded-xl flex items-center lg:order-1 w-3xl lg:w-auto pr-4">
            <FaSearch />
            <hr className="border-gray-400 rotate-90 w-8" />
            <input
              type="search"
              placeholder="Search Hackathons..."
              className="p-1 mr-8 outline-none text-left"
            />
          </div>

          <div className="hidden justify-center items-center w-auto lg:order-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-md mr-12 font-serif font-semibold ${
                  pathname === item.path
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                } pb-1 transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
