import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react';

function PostsComponent() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <button onClick={fetchPosts}>Fetch Posts</button>
            {error && <div>Error: {error}</div>}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}