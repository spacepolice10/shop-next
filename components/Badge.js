import { useEffect, useState } from "react"

export default function Badge ({ id }) {
    const [badge, setBadge] = useState(null)
    let color = 'grey'
    let backgroundColor = 'grey'
    switch(id) {
        case 1: {color = 'var(--red-hard)'; backgroundColor = 'var(--red)'; break;}
        case 2: {color = 'var(--teal-hard)'; backgroundColor = 'var(--teal)'; break;}
        case 3: {color = 'var(--blue-hard)'; backgroundColor = 'var(--blue)'; break;}
        case 4: {color = 'var(--grey-hard)'; backgroundColor = 'var(--grey)'; break;}
    }
    useEffect(() => {
        fetch(`http://localhost:5000/api/badge/${id}`).then(
           x => x.json().then(
               i => setBadge(i.name)
           )
        )
    }, [])
    return (
        <div>
            <p>{badge}</p>
            <style jsx> {`
                p {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: ${color};
                    background-color: ${backgroundColor};
                    padding: 4px;
                    border-radius: 4px;
                    height: 20px;
                    font-size: 12px;
                    font-weight: 800;
                }
		    `} </style>
        </div>
    )
}

