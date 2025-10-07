import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react';

function PostsComponent() {
    const [posts, setPosts] = useState([]);
    const [isError, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
        
    async function fetchPosts() {
        try {
            setIsLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }
    const cacheTime = 5 * 60 * 1000;
    const refetchOnWindowFocus = false;
    const keepPreviousData = true;
    const staleTime = 1000 * 60;

    return (
        <div>
            <button onClick={fetchPosts}>Fetch Posts</button>
            {isError && <div>Error: {isError}</div>}
            {isLoading && <div>Loading...</div>}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}