import React from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { ThemeSelector } from "./ThemeSelector";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center h-16 gap-4 px-4 bg-white shadow-sm">
      <div className="flex-1" />
      <div className="flex items-center justify-center">
        <ThemeSelector />
      </div>
      <div className="flex items-center space-x-4">
        <ButtonComponent cssClass="e-round e-flat">
          <div className="relative">
            <BellIcon className="w-6 h-6 text-gray-600" />
            <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
              3
            </span>
          </div>
        </ButtonComponent>

        <div className="flex items-center">
          <UserCircleIcon className="w-8 h-8 text-gray-600" />
          <span className="ml-2 text-gray-800">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
