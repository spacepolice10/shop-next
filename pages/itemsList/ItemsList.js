import React from 'react';
import Item from '../itemsList/Item';

const itemsList = ({items}) => {
	return (
		<div className = 'items-list'>
			{ React.Children.toArray(items.map(item => <Item {...item} />)) }
		<style jsx> {`
			.items-list {
				display: grid;
				grid-template-columns: repeat(1, 2fr);
				gap: 40px;
				width: 100%;
				margin: 50px 0px 100px 0px;
			}
			@media (min-width: 668px) {
				.items-list {
					grid-template-columns: repeat(2, 2fr);
				}
			}
			@media (min-width: 1168px) {
				.items-list {
					grid-template-columns: repeat(3, 2fr);
				}
			}
		`} </style>
		</div>
	)
}

export default itemsList;