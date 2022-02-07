import testData from '../testData';
import SaleBanner from './banners/SaleBanner';
import SeasonBanner from './banners/SeasonBanner';
import ItemsList from '../itemsList/ItemsList';

export default function Home() {
	const items = testData.items.clothes;
	return (
		<>
			<SaleBanner />
			<SeasonBanner />
			<ItemsList items={items} />
		</>
	)
}