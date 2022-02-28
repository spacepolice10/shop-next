import { motion, LayoutGroup} from 'framer-motion'
import React from 'react';
import Item from '../itemsList/Item';

const itemsList = ({ items }) => {
	return (
		<div className = 'items-list'>
			<LayoutGroup>
				{ React.Children.toArray(items.map(item => <Item {...item} />)) }
			</LayoutGroup>
		<style jsx> {`
			.items-list {
				display: grid;
				grid-template-columns: repeat(1, 2fr);
				gap: 40px;
				width: 100%;
				justify-items: center;
				margin: 50px 0px 100px 0px;
				overflow: hidden;
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