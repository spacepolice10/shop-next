import testData from "../testData"

export default function ListPicker ({ setList }) {
    const pickList = (event) => {
        setList(event.target.id)
    }
    return (
        <div>
            <button onClick={pickList} id="popular">Popular</button>
            <button onClick={pickList} id="mine">Mine</button>
            <button onClick={pickList} id="subscriptions">Subscriptions</button>
        </div>
    )
}