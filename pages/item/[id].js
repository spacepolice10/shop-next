import { useRouter } from 'next/router';
import testData from '../testData';

export default function Item ({ data }) {
	const { query } = useRouter();
	const item = data[0]
	return (
		<div>
			<p>{ item.id }</p>
		</div>
	)
}

export async function getServerSideProps({ params }) {
	const data = testData.items.clothes.filter(item => item.id == params.id)
	return {
		props: { data }, 
	}
}