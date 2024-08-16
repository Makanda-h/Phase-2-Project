import React, { useState } from 'react';

const Search = () => {
  const [isInputVisible, setIsInputVisible] = useState(false); // State for input visibility
  const [searchTerm, setSearchTerm] = useState(''); // State for input value

  const toggleInput = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search functionality here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="search-container">
      <button className="search-icon" onClick={toggleInput}>
        🔍
      </button>
      {isInputVisible && (
        <div className="search-input-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Type your search..."
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;