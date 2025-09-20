import { useState } from 'react';

const Search = ({ onSearch, loading, error }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
    setQuery("");
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        placeholder="Search GitHub users..."
        avatar={<img src="/path/to/avatar/image.png" alt="Avatar" />}
        login={<img src="/path/to/login/image.png" alt="Login" />}
        error={<img src="/path/to/error/image.png" alt="Error" />}
        onChange={(e) => setQuery(e.target.value)}
        form='search-form'
      />

      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Looks like we can't find the user, <img src="/path/to/error/image.png" alt="Error" /></p>}
    </div>
  );
};

export default Search;
