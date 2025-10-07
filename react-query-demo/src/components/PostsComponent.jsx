import usequery from '@tanstack/react-query'

function PostsComponent() {
  const { isLoading, error, data } = usequery({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json()
      ),
  })

    if (isLoading) return 'Loading...'
    if (error) return 'Error fetching posts'
    return (
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
}

export default PostsComponent