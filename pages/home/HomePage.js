import ItemsList from '../itemsList/ItemsList';
import testData from '../testData';

export default function HomePage () {
    const items = testData.items.clothes;
    return (
        <ItemsList items={items} />
    )
}