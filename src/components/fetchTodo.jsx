// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'


function App() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            console.log('effectni ichidagi')
            setTodos(data)
        }
        fetchTodos();
    }, []);

    console.log('efectni tashqarisidagi')


    return (
        <div>
            {todos.map((todos) =>
                <li key={todos.id}>{todos.id} {todos.title}
                    <input type='checkbox' checked={todos.completed} />
                </li>)}
        </div>
    )
}
export default App