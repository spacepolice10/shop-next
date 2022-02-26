import React from 'react';
import CategoryBanner from './categories/CategoryBanner';
import testData from '../testData';
import Link from 'next/link';

export default function Categories () {
	const categories = testData.categories;
	return (
		<div>
			{React.Children.toArray(
				categories.map(category => {
					return (
					<>
						<Link href={`/search/categories/${category.name}`}>
							<div>
								<CategoryBanner>
									<h1>{ category.name }</h1>
								</CategoryBanner>
							</div>
						</Link>
					</>
					)
				})
			)}
		</div>
	)
}