import { useState } from 'react';
import ListPicker from "./ListPicker";
import List from './List';

export default function ListsPage ( ) {
	const [list, setList] = useState('popular')
	return (
		<div>
			<h1>Lists</h1>
			{/* <ListPicker setList={setList} /> */}
			<List list={list} />
		</div>
	)
}
