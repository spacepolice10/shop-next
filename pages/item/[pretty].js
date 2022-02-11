import { useRouter } from 'next/router';
import testData from '../testData';

export default function Item (props) {
	const router = useRouter();
	const { pretty } = router.query;
	const data = testData.items.clothes.filter(item => item.id == pretty);
	const item = data[0];
	return (
		<div>
			<p>{ item.id }</p>
		</div>
	)
}