import { useState } from 'react';
import HomePage from './HomePage';
import Blog from '../blog/Blog';

function ScreenPicker ({ setScreen }) {
	return (
		<div>
			<button onClick={() => setScreen(<HomePage />)} id="home">New clothes</button>
			<button onClick={() => setScreen(<Blog />)} id="blog">#stylenotes</button>
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