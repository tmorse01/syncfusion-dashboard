import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
