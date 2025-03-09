import React from "react";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full fixed top-0 left-0 bg-opacity-50 flex items-center h-[70px] px-6">
      {/* Kanban Board Title - Slightly Left */}
      <span className="text-white font-bold md:text-2xl text-base whitespace-nowrap mr-10">
        Kanban Board
      </span>

      {/* Centered Search Bar with Some Space */}
      <div className="flex-grow max-w-2xl relative">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-2 px-3 rounded-lg text-gray-700 focus:outline-none focus:ring-white-600"
        />
      </div>
    </div>
  );
};

export default Navbar;
