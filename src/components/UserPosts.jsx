import React from 'react'
import { useState, useEffect } from 'react';
import Loader from './loader';
import {Link} from 'react-router-dom'


export default function UserPosts() {
    const [userPosts, setUserPosts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserPosts = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
            const data = await response.json()
            setUserPosts(data)
            setLoading(false)
        }
        fetchUserPosts()
    }, [])

    return (
        <div>
            {userPosts.map(post => (
                <Link to={`/posts/${post.id}`}>
                    <li key={post.id}>{post.title}</li>
                </Link>
            ))}
        </div>
    )
}
