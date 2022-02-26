import { useState } from 'react';
import HomePage from './HomePage';
import Blog from '../blog/Blog';

export default function Home ({ data }) {
	const [screen, setScreen] = useState(<HomePage items={data} />)
	return (
		<>
			{/* <div>
				<button onClick={() => setScreen(<HomePage items={data} />)} id="home">New clothes</button>
				<button onClick={() => setScreen(<Blog />)} id="blog">#stylenotes</button>
			</div> */}
			{screen}
		</>
	)
}

export async function getServerSideProps () {
	const res = await fetch('http://localhost:5000/api/item')
	const data = await res.json()
	return {
		props: { data }, 
	}
}

