import { useEffect, useState } from "react"

export default function Badge ({ id }) {
    const [badge, setBadge] = useState(null)
    let color = 'grey'
    let backgroundColor = 'grey'
    switch(id) {
        case 1: {color = '#ef4444'; backgroundColor = '#fecaca'; break;}
        case 2: {color = '#10b981'; backgroundColor = '#a7f3d0'; break;}
        case 3: {color = '#0ea5e9'; backgroundColor = '#bae6fd'; break;}
        case 4: {color = '#64748b'; backgroundColor = '#cbd5e1'; break;}
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
                    color: ${color};
                    background-color: ${backgroundColor};
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

