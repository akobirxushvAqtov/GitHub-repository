import React from 'react';
import { useState, useEffect } from 'react'
import Loader from './loader';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function Post() {

    const params = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            const data = await res.json();
            setPost(data)
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
            const userData = await response.json();
            setUsers(userData)
            setLoading(false)
        }
        fetchData()
    }, [])

    if (loading) return <h1>Iltimos, kutib turing... <Loader /></h1>


    return (
        <div>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
            <h2>{post.id}</h2>
            <Link to={`/user/${users.id}`}>{users.name}</Link>
        </div>
    )
}
