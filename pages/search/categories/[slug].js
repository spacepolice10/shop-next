import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import testData from '../../testData';

export default function Item (props) {
	const router = useRouter();
	const { slug } = router.query;
	const data = testData.categories.filter(item => item.name == slug);
	const item = data[0];
	return (
		<div>
			<p>{ item.name }</p>
		</div>
	)
}