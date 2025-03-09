import { Outlet } from "react-router-dom";
import React, { useState } from "react"; 
import Navbar from "../components/Navbar";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState(""); 

  return (
    <div className="w-screen h-screen relative">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="md:pl-[20px] pr-[20px] pt-[70px] w-full h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
