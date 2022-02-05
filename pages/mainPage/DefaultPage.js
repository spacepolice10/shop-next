import { useState } from 'react';
import React from 'react';
import testData from '../testData';
import Item from '../itemsList/Item';

export default function DefaultPage() {
	const items = testData.items.clothes;
	return (
		<div>
			{ React.Children.toArray(items.map(item => <Item {...item} />)) }
		</div>
	)
}