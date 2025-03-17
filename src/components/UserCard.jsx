import React from "react";
import { HiMail } from "react-icons/hi"; // Import email icon

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Profile Image */}
      <img
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt={user.name}
        loading="lazy"
        className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-sm mb-4"
      />

      {/* User Name */}
      <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>

      {/* Email with Icon */}
      <p className="flex items-center gap-2 text-gray-600 text-sm mt-2">
        <HiMail className="text-blue-500 text-lg" /> {user.email}
      </p>

      {/* View Profile Button */}
      <button className="mt-4 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;
