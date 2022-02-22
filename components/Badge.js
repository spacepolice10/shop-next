import { useEffect, useState } from "react"

export default function Badge ({ id }) {
    const [badge, setBadge] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/api/badge/${id}`).then(
           x => x.json().then(
               i => setBadge(i.name)
           )
        )
    })
    return (
        <div>
            <p>{badge}</p>
            <style jsx> {`
                p {
                    color: #FF0E2A;
                    background-color: #FFC6C8;
                    padding: 10px;
                    border-radius: 5px;
                    width: fit-content;
                }
		    `} </style>
        </div>
    )
}

