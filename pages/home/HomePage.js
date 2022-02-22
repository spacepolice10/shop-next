import ItemsList from '../itemsList/ItemsList';
import Banner from './Banner';
import testData from '../testData';

export default function HomePage ({ items }) {
    console.log(items)
    const clothes = items.map(item => item)
    const banners = [
        testData.blog[0]
    ]
    return (
        <div>
            <Banner content={banners}  />
            <ItemsList items={clothes} />
        </div>
    )
}