import React from 'react';
import CategoryBanner from './categories/CategoryBanner';
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
								<CategoryBanner>
									<h1>{ category.name }</h1>
								</CategoryBanner>
							</div>
						</A>
					</>
					)
				})
			)}
		</div>
	)
}