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

export default function Home({ data }) {
	console.log(data)
	const [screen, setScreen] = useState(<HomePage />)
	return (
		<>
			<ScreenPicker setScreen={setScreen} />
			{screen}
			{/* {data.map(x => x)} */}
		</>
	)
}


export async function getServerSideProps( ) {
	const res = await fetch('http://localhost:8080/api/user', {
		mode: 'no-cors'
	})
    const data = await res.json();
	return {
		props: { data }, 
	}
}