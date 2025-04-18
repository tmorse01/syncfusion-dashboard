import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import {
  HomeIcon,
  UserIcon,
  ChartBarIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  isCollapsed: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, title, isCollapsed }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex ${
          isCollapsed ? "justify-center" : "items-center"
        } px-4 py-2 mb-2 rounded-lg transition-colors
        ${
          isActive
            ? "bg-blue-500 text-white"
            : "hover:bg-blue-100 text-gray-700"
        }`
      }
    >
      <div className="w-5 h-5 mr-2">{icon}</div>
      {!isCollapsed && <span>{title}</span>}
    </NavLink>
  );
};

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={`bg-white shadow-lg transition-all ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className={`flex items-center h-16 border-b`}>
          {!isCollapsed && (
            <div className="flex items-center flex-1 px-4">
              <h1 className="text-xl font-bold text-gray-800">
                Loan Dashboard
              </h1>
            </div>
          )}
          {isCollapsed && (
            <div className="flex items-center justify-center flex-1">
              <h1 className="text-xl font-bold text-gray-800">LD</h1>
            </div>
          )}
          <ButtonComponent onClick={toggleSidebar} cssClass="e-flat px-2">
            <Bars3Icon className="w-6 h-6 text-gray-600" />
          </ButtonComponent>
        </div>

        <nav className="flex-1 p-4">
          <NavItem
            to="/dashboard"
            icon={<HomeIcon className="w-5 h-5" />}
            title="Dashboard"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/profile"
            icon={<UserIcon className="w-5 h-5" />}
            title="Profile"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/reports"
            icon={<DocumentTextIcon className="w-5 h-5" />}
            title="Reports"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/analytics"
            icon={<ChartBarIcon className="w-5 h-5" />}
            title="Analytics"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/settings"
            icon={<Cog6ToothIcon className="w-5 h-5" />}
            title="Settings"
            isCollapsed={isCollapsed}
          />
        </nav>

        <div className="p-4 border-t">
          <NavLink
            to="/login"
            className="flex items-center px-4 py-2 text-red-500 rounded-lg hover:bg-red-100"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />
            {!isCollapsed && <span>Logout</span>}
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
