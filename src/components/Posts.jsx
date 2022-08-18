import React from 'react'
import { useState, useEffect } from 'react'
import{ Link } from 'react-router-dom'
import Loader from './loader';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log('effectni ichidagi')
            setPosts(data)
        }
        fetchPosts();
        setLoading(false)
    }, []);

    if (loading) return <h1>Iltimos, kutib turing... <Loader /></h1>

    return (

        <div>
            {posts.map((posts) =>
                <li key={posts.id}>
                    <Link to={`/posts/${posts.id}`}>{posts.id}. 
                    {posts.title}
                    </Link>
                </li>)}
            
        </div>
    )
}
