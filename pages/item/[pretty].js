import { useRouter } from 'next/router';
import testData from '../testData';

export default function Item (props) {
	const router = useRouter();
	const { pretty } = router.query;
	const data = testData.items.clothes.filter(item => item.id == pretty);
	return (
		<div>
			<p>{ data[0].id }</p>
		</div>
	)
}