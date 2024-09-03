import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Features" },
    { title: "Integrations" },
    { title: "Customers" },
    { title: "Pricing" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={`bg-white pb-2 md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-12 items-center max-w-screen-3xl mx-auto px-2 md:flex md:px-6">
        <div className="flex w-[15%] items-center justify-between py-4 md:block">
          <h1 className="text-xl font-bold">RTQ Saloon</h1>
          <div className="md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex w-full items-center justify-between mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-gray-900">
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
          </div> */}
          <div className="flex w-[40%] gap-x-6 mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
};

function SearchBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Customer");
  const categories = ["customer", "product", "order", "payment"];

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <form className="max-full w-full">
      <div className="flex w-full">
        <label
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
          htmlFor="search-dropdown"
        >
          Search
        </label>
        <button
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 uppercase"
          id="dropdown-button"
          type="button"
          onClick={toggleDropdown}
        >
          {selectedCategory}
          <RiArrowDropDownLine />
        </button>
        {isDropdownOpen && (
          <div
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-10"
            id="dropdown"
          >
            <ul
              aria-labelledby="dropdown-button"
              className="py-2 text-sm text-gray-700"
            >
              {categories.map((item, idx) => (
                <SearchCategoryOption
                  key={idx}
                  onClick={() => handleCategorySelect(item)}
                >
                  {item}
                </SearchCategoryOption>
              ))}
            </ul>
          </div>
        )}
        <div className="relative w-full">
          <input
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            id="search-dropdown"
            placeholder={`Search ${selectedCategory}...`}
            required
            type="search"
          />
          <button
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            type="submit"
          >
            <IoSearchOutline />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}

function SearchCategoryOption({ children, onClick }) {
  return (
    <li>
      <button
        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 uppercase"
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}
export default Header;
