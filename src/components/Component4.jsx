import Component3 from './Component3';
import { useContext, useState } from 'react';
import { Context } from '../App';


export default function Component2() {
	const value = useContext(Context);
	const [inputValue, setInputValue] = useState('')
	return (
		<div>
			<Component3 />
			<button onClick={() => value.addCount()}>inc</button>
			<button onClick={() => value.decCount()}>dec</button>
			<button onClick={() => value.resetCount(0)}>0</button>
			<button onClick={() => value.resetCount(10000)}>10000</button>
			<input type="text" onChange={(event) => value.changeValue(event.target.value)} value={value.value}/>
			<h2>{value.value}</h2>
		</div>
	)
}