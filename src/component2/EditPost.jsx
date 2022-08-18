import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Post() {
    const [post, setPost] = useState()
    const params = useParams()
    const navigate = useNavigate()
    const formRef = useRef()

    const fetchData = async () => {
        const res = await fetch(`https://guarded-garden-41046.herokuapp.com/posts/${params.id}`);
        const data = await res.json();
        setPost(data)

    }
    const updatePost = async (event) => {
        event.preventDefault()
        const updatedData = {
            content: event.target.children.content.value,
            title: event.target.children.title.value
        }

        const res = await fetch(`https://guarded-garden-41046.herokuapp.com/posts/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json()

        if (data.ok) {
            navigate(`/${data.data._id}`)
        }
    }


    useEffect(() => {
        fetchData()
    }, [])


    if (!post) return <h1>Post topilmadi</h1>


    return (
        <form ref={formRef} onSubmit={updatePost}>
            <input type="text" defaultValue={post.data?.title} name="title" />
            <br />
            <textarea defaultValue={post.data?.content} name="content"></textarea>
            <br />
            <button>edit</button>
        </form>
    )
}
