import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import Effect from './Effect';


function App() {
    const videoRef = useRef()
    console.log(videoRef)

    const [image, setImage] = useState()





    return ( 
        <div>
        <img src = '/image.webp'/>
        <video src = 'https://media.graphassets.com/viZtgrN7T4uT0BTzd5Qk'
        ref = { videoRef }></video>
        <button onClick = {() => videoRef.current.play()}>play</button>
        <button onClick = {() => videoRef.current.pause()}>pause</button>
        <button onClick = {() => videoRef.current.playbackRate = 0.25}>x 0.25</button> 
        <button onClick = {() => videoRef.current.playbackRate = 0.5}>x .5</button>
        <button onClick = {() => videoRef.current.playbackRate = 1}>x 1</button>
        <button onClick = {() => videoRef.current.playbackRate = 1.5}>x 1.5</button> 
        <button onClick = {() => videoRef.current.playbackRate = 2}>x 2</button>
        <button onClick = {() => videoRef.current.currentTime = videoRef.current.currentTime - 5}>5 s back</button> 
        <button onClick = {() => videoRef.current.currentTime = videoRef.current.currentTime + 5}>5 s forward</button>


        </div>
    )
}


export default App;