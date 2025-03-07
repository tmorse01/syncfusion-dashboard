import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  ChartBarIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  isCollapsed: boolean;
}

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

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  return (
    <aside
      className={`bg-white shadow-lg transition-all ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="h-full flex flex-col">
        <div
          className={`flex ${
            isCollapsed ? "justify-center" : "px-4"
          } items-center h-16 border-b`}
        >
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-gray-800">Loan Dashboard</h1>
          )}
          {isCollapsed && (
            <h1 className="text-xl font-bold text-gray-800">LD</h1>
          )}
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
            className="flex items-center px-4 py-2 text-red-500 hover:bg-red-100 rounded-lg"
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
