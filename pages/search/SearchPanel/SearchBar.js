import { useState } from 'react';
import testData from '../../testData';

function Searching () {
    const [query, setQuery] = useState('')
    const searchProcess = (event) => {
        setQuery(event.target.value)
        console.log(query)
    }
    return (
        <input value={query} onChange={searchProcess} type="text" />
    )
}

export default function SearchBar () {
    return (
        <div>
            <Searching />
        </div>
    )
}