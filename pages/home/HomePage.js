import ItemsList from '../itemsList/ItemsList';
import Banner from './Banner';
import testData from '../testData';

export default function HomePage () {
    const data = Object.values(testData.items).map(category => category)
    const test = data.map(x => x.filter(item => item.badge == 'Hot'))
    const items = test.map(x => x[0])
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


