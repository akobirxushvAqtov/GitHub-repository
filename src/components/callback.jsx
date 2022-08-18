import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import Effect from './Effect';


function App() {
  // const inputRef = useRef()
  // const videoRef = useRef()
  // const [count, setCount] = useState(0);
  // const squaredCount = useCallback(() => {
  //   return getSquaredCount(count)
  // }, [count])
  // const [count2, setCount2] = useState(0);

  return (
    <div>
      {/* <input
        type="text"
        ref={inputRef}
      />
      <button onClick={() => inputRef.current.focus()}>focus</button> */}

      {/* <video width={300} height={200} src='https://media.graphassets.com/viZtgrN7T4uT0BTzd5Qk' ref={videoRef}></video>
      <button onClick={() => videoRef.current.play()}>play</button>
      <button onClick={() => videoRef.current.pause()}>pause</button> */}

      <button onClick={() => setCount(count + 1)}>clicked: {count}</button>
      <h1>2ga ko'paytirilgani: {squaredCount()}</h1>

      <button onClick={() => setCount2(count2 + 1)}>count2: {count2}</button>
    </div>
  )
}

const getSquaredCount = count => {
  console.log('ishladi')

  for(let i = 0; i < 1000000000; i++){}
  return count * 2
}

export default App;
