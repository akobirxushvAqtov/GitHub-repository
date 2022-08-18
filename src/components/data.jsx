import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from 'react'


function App() {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const fetchPhoto = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=3');
            const data = await response.json();
            setPhotos(data)
        }
        fetchPhoto();

        console.log(photos)

    }, [])

    return (
        <div>
            {photos.map((photo) => <li key={photo.id}>{photo.id} <br></br> <img width={150} height={100} src={photo.url} /> <br></br></li>)}
        </div>
    )
}


export default App;