import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userMap, setUserMap] = useState(new Map()); // HashMap for O(1) lookup

  // 🔹 Fetch users and store in HashMap
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);

        // ✅ Store users in HashMap
        const map = new Map();
        response.data.forEach((user) => map.set(user.name.toLowerCase(), user));
        setUserMap(map);

        setFilteredUsers(response.data); // Initially show all users
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // 🔹 Debounce function
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // 🔹 HashMap-Based Search Function
  const handleSearch = useCallback(
    debounce((query) => {
      if (!query) {
        setFilteredUsers(users); // Show all users if query is empty
        return;
      }

      const lowerQuery = query.toLowerCase();
      const foundUsers = [];

      for (let key of userMap.keys()) {
        if (key.includes(lowerQuery)) {
          foundUsers.push(userMap.get(key));
        }
      }

      setFilteredUsers(foundUsers);
    }, 500),
    [users, userMap]
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <HeroSection />

      <div className="max-w-3xl mx-auto p-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">User List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>

      <Services />
      <Pricing />
      <ContactForm />
    </div>
  );
}

export default App;
