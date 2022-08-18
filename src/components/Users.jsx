import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from './loader';


export default function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json()
            setUsers(data)
            setLoading(false)
        }
        fetchUsers()
    }, [])
    // console.log(users)

    if (loading)
        return <h1>Iltimos, kutib turing... <Loader /></h1>;

    return (
        <div>
            {users.map((user) =>
                <li key={user.id}>
                    <Link className='usersName' to={`/users/${user.id}`}>
                        {user.id }.
                        { user.name}
                    </Link>
                </li>
            )}
        </div>
    )
}
