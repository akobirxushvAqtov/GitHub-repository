import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './loader';
import { useParams } from 'react-router-dom';
import Posts from './Posts';


export default function User() {

    const params = useParams();
    const [user, setUser] = useState([]);
    const [loader, setLoader] = useState(true)
    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            const data = await response.json();
            setUser(data)
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`)
            const dataUser = await res.json()
            setUserPosts(dataUser)
            setLoader(false)

        }
        fetchUser()
    }, [])


    console.log(userPosts)

    if (loader) return <h1>Iltimos, kutib turing... <Loader /></h1>

    return (
        <div>
            <br />
            <h2><span><strong>name: </strong> {user.name}</span></h2>
            <span><strong>id: </strong> {user.id}</span>
            <span><strong>username: </strong> {user.username}</span>
            <span><strong>email: </strong> {user.email}</span>
            <span><strong>phone: </strong> {user.phone}</span>
            <span><strong>website: </strong> {user.website}</span>
            {/* <Link to='/Posts'>Posts</Link> */}
            {userPosts.map((post) =>
                <Link to={`/posts/${post.id}`}>
                    <li key={post.id}>{post.title}</li>
                </Link>
            )}

        </div>
    )
}