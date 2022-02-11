import { useState } from 'react';
import HomePage from './HomePage';
import Blog from '../blog/Blog';

function ScreenPicker ({ setScreen }) {
	const pickScreen = (x) => {
		setScreen(x)
	}
	return (
		<div>
			<button onClick={() => {pickScreen(<HomePage />)}} id="home">New clothes</button>
			<button onClick={() => {pickScreen(<Blog />)}} id="blog">#stylenotes</button>
		</div>
	)
}

export default function Home() {
	const [screen, setScreen] = useState(<HomePage />)
	return (
		<>
			<ScreenPicker setScreen={setScreen} />
			{screen}
		</>
	)
}