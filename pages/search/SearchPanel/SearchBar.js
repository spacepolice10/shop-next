import { useState } from 'react';
import testData from '../../testData';

function Searching ({query, setQuery, setTips}) {
    const searchProcess = (event) => {
        setQuery(event.target.value)
        setTips(Object.values(testData.items).flat().filter(x => {
            return x.name.toUpperCase().includes(query.toUpperCase())
        }))
    }
    return (
        <input value={query} onChange={searchProcess} type="text" />
    )
}

function Tips ({tips}) {
    return (
        <div>
            {tips && tips.map(
                tip => tip.name
            )}
        </div>
    )
}

export default function SearchBar () {
    const [query, setQuery] = useState('')
    const [tips, setTips] = useState(null)
    return (
        <div>
            <Searching 
            query={query} 
            setQuery={setQuery} 
            setTips={setTips}
            />
            <Tips tips={tips} />
        </div>
    )
}