import logo from './logo.svg';
import './App.css';
import useLocalStorageSaver from './components/useLocalStorageSaver';
import useLocalStorageGetter from './components/useLocalStorageGetter';

function App() {
    const value1 = useLocalStorageGetter("input_value")
    console.log(value1)
    const [value, setValue] = useLocalStorageSaver("input_value", "hello");
    return ( 
        <div>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <h1>{value1}</h1>
        </div>
    )
}


export default App;