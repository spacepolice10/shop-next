import { useState } from 'react';
import testData from '../testData';
import SaleBanner from './banners/SaleBanner';
import SeasonBanner from './banners/SeasonBanner';
import ItemsList from '../itemsList/ItemsList';

export default function DefaultPage() {
	const items = testData.items.clothes;
	return (
		<div>
			<SaleBanner />
			<SeasonBanner />
			<ItemsList items={items} />
		</div>
	)
}