import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ onSearch, loading, error }) => {
  const [query, setQuery] = useState("");

  const [userList, setUserList] = useState([]);

  const handleSearch = async () => {
    if (query.trim()) {
      const users = await onSearch(query);
      setUserList(users);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        id="search-form"
      >
        <input
          type="text"
          value={query}
          placeholder="Search GitHub users..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={loading}>Search</button>
      </form>
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
      <div className="user-list">
        {userList && userList.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={`${user.login} avatar`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;