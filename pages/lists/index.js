import { useState } from 'react';
import ListPicker from "./ListPicker";
import List from './List';

export default function ListsPage ( {data} ) {
	console.log(data)
	const [list, setList] = useState('popular')
	return (
		<div>
			<h1>Hello, it's a ListsPage</h1>
			<ListPicker setList={setList} />
			<List list={list} />
		</div>
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