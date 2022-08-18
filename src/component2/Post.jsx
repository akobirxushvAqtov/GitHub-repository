import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Post() {
    const [post, setPost] = useState()
    const params = useParams()
    const navigate = useNavigate()

    const fetchData = async () => {
        const res = await fetch(`https://guarded-garden-41046.herokuapp.com/posts/${params.id}`);
        const data = await res.json();
        setPost(data)

    }
    useEffect(() => {
        fetchData()
    }, [])
 
    if (!post) return <h1>Post topilmadi</h1>


    return (
        <div>
            {post.data?.title}
            <p>{post.data?.content}</p>
            <button onClick={() => navigate(`/${params.id}/edit`)}>edit</button>
        </div>
    )
}
