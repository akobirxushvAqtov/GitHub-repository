import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Posts() {

    const [posts, setPosts] = useState({});
    

    const fetchData = async () => {
        const res = await fetch('https://guarded-garden-41046.herokuapp.com/posts');
        const data = await res.json();

        setPosts(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(posts)

    return (
        <div>
            {posts.data?.map(post => (
                <Link to={`/${post._id}`} key={post._id}>
                    {post.title}
                    <br />
                    <small>{post.author}</small>
                    <br />
                    <br />
                </Link>
            ))}
        </div>
    )
}
