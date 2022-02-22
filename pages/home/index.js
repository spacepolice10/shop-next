import { useState } from 'react';
import HomePage from './HomePage';
import Blog from '../blog/Blog';

function ScreenPicker ({ setScreen, items }) {
	return (
		<div>
			<button onClick={() => setScreen(<HomePage items={items} />)} id="home">New clothes</button>
			<button onClick={() => setScreen(<Blog />)} id="blog">#stylenotes</button>
		</div>
	)
}

export default function Home({ data }) {
	const [screen, setScreen] = useState(<HomePage items={data} />)
	return (
		<>
			<ScreenPicker setScreen={setScreen} items={data} />
			{screen}
		</>
	)
}

export async function getServerSideProps() {
	const res = await fetch('http://localhost:5000/api/item/?badgeId=1')
	const data = await res.json()
	return {
		props: { data }, 
	}
}

