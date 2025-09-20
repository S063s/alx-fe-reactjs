import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ onSearch, loading, error }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
    setQuery("");
  };

  fetchUserData(query);

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
        avatar_url={
          <img
            src="/path/to/avatar/image.png"
            alt="GitHub user avatar, neutral expression, set against a plain background"
          />
        }
        login={
          <img
            src="/path/to/login/image.png"
            alt="Login icon, stylized person silhouette, displayed on a simple interface"
          />
        }
        error={
          <img
            src="/path/to/error/image.png"
            alt="Error icon, red exclamation mark inside a circle, conveys warning or alert"
          />
        }
        onChange={(e) => setQuery(e.target.value)}
        form="search-form"
      />

      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {error && (
        <p style={{ color: 'red' }}>
          Looks like we cant find the user,{' '}
          <img
            src="/path/to/error/image.png"
            alt="Error icon, red exclamation mark inside a circle, conveys warning or alert"
          />
        </p>
      )}
    </div>
  );
};

export default Search;
