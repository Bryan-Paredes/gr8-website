import React from "react";
import { Home, Search, Circle, Bell, User } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 text-white border-t border-gray-700">
      <ul className="flex justify-between items-center px-4 py-2">
        <li className="flex flex-col items-center">
          <Home className="text-2xl" />
          <span className="text-xs mt-1">Home</span>
        </li>
        <li className="flex flex-col items-center">
          <Search className="text-2xl" />
          <span className="text-xs mt-1">Search</span>
        </li>
        <li className="flex flex-col items-center">
          <Circle className="text-3xl bg-blue-500 text-white rounded-full p-1" />
          <span className="text-xs mt-1">Add</span>
        </li>
        <li className="flex flex-col items-center">
          <Bell className="text-2xl" />
          <span className="text-xs mt-1">Alerts</span>
        </li>
        <li className="flex flex-col items-center">
          <User className="text-2xl" />
          <span className="text-xs mt-1">Profile</span>
        </li>
      </ul>
    </nav>
  );
}
