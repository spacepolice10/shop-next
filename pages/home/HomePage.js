import ItemsList from '../itemsList/ItemsList';
import Banner from './Banner';
import testData from '../testData';

export default function HomePage () {
    const items = testData.items.clothes;
    const banners = [
        testData.blog[0]
    ]
    return (
        <div>
            <Banner content={banners}  />
            <ItemsList items={items} />
        </div>
    )
}