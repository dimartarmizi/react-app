import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    username: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}

function TestApiPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [usersData, postsData] = await Promise.all([
                    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
                    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
                ]);

                setUsers(usersData);
                setPosts(postsData);
                setError(null);
            } catch {
                setError("Failed to fetch data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <>
                    <h2>Pengguna</h2>
                    <ul>
                        {users.slice(0, 5).map(user => (
                            <li key={user.id}>
                                {user.name} ({user.username})
                            </li>
                        ))}
                    </ul>

                    <h2>Postingan</h2>
                    <ul>
                        {posts.slice(0, 5).map(post => (
                            <li key={post.id}>
                                <strong>{post.title}</strong><br />
                                {post.body}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    )
}

export default TestApiPage;