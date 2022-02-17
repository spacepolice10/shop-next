import { useRouter } from 'next/router';
import testData from '../../testData';

export default function Item ({ data }) {
	const { query } = useRouter();
	const category = data[0]
	return (
		<div>
			<p>{ category.name }</p>
		</div>
	)
}

export async function getServerSideProps({ params }) {
	const data = testData.categories.filter(category => category.name == params.id)
	return {
		props: { data }, 
	}
}