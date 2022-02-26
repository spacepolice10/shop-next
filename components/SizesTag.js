import { useEffect, useState } from "react"

export default function Badge ({ id }) {
    const [size, setSize] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/api/size/${id}`).then(
           x => x.json().then(
               i => setSize(i.name)
           )
        )
    })
    return (
        <div>
            <p>{size}</p>
            <style jsx> {`
                p {
                    color: white;
                    background-color: black;
                    padding: 4px;
                    border-radius: 4px;
                    width: fit-content;
                    font-size: 12px;
                    font-weight: 800;
                }
		    `} </style>
        </div>
    )
}

