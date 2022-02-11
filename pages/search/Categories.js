import React from 'react';
import Banner from '../../components/Banner';
import A from '../../components/A';
import testData from '../testData';

export default function Categories () {
	const categories = testData.categories;
	return (
		<div>
			{ React.Children.toArray(
				categories.map(category => {
					return (
					<>
						<A href={`/search/categories/${category.name}`}>
							<div>
								<Banner>
									<h1>{ category.name }</h1>
								</Banner>
							</div>
						</A>
					</>
					)
				})
			)}
		</div>
	)
}