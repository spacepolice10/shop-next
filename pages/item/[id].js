import { useRouter } from 'next/router';
import testData from '../testData';

export default function Item ({ data }) {
	return (
		<div>
			<p>{ data.name }</p>
		</div>
	)
}

export async function getServerSideProps ({ params }) {
	const res = await fetch(`http://localhost:5000/api/item/${params.id}`)
	const data = await res.json()
	return {
		props: { data }, 
	}
}