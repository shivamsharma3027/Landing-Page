import React,{ useState, useCallback } from "react";

// Debounce Function (Performance Optimization)
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = useCallback(
    debounce((value) => {
      setQuery(value);
      onSearch(value);
    }, 300),
    [onSearch]
  );

  return (
    <input
      type="text"
      placeholder="Search Users..."
      onChange={(e) => handleInputChange(e.target.value)}
      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;
