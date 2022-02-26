import ItemsList from '../itemsList/ItemsList';
import Banners from './Banners';
import testData from '../testData';

export default function HomePage ({ items }) {
    const clothes = items.map(item => item)
    const banners = [
        testData.blog[0]
    ]
    return (
        <div>
            {/* <Banners content={banners} /> */}
            <ItemsList items={clothes} />
            <style jsx>{`
                div {
                    width: 85%;
                }
            `}</style>
        </div>
    )
}