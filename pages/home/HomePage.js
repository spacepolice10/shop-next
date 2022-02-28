import ItemsList from '../itemsList/ItemsList';
import Banners from './Banners';
import testData from '../testData';

export default function HomePage ({ items }) {
    const clothes = items.map(item => item)
    const banners = [
        testData.blog[0]
    ]
    return (
        <div className='container'>
            {/* <Banners content={banners} /> */}
            <ItemsList items={clothes} />
            <style jsx>{`
                    .container {
                        width: 100%;
                    }
            `}</style>
        </div>
    )
}