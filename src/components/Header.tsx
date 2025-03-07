import React from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center px-4 sticky top-0 z-10">
      <div className="flex-1" />
      <div className="flex items-center space-x-4">
        <ButtonComponent cssClass="e-round e-flat">
          <div className="relative">
            <BellIcon className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
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
