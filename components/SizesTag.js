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
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: var(--white);
                    background-color: var(--black);
                    border-radius: 4px;
                    width: 20px;
                    height: 20px;
                    padding: 4px;
                    font-size: 12px;
                    font-weight: 800;
                }
		    `} </style>
        </div>
    )
}

