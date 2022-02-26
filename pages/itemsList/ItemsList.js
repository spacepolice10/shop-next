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
			}
		`} </style>
		</div>
	)
}

export default itemsList;