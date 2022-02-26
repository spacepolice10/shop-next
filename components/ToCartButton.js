
export default function ToCartButton ({ id }) {
    return (
        <div>
            <p>Add to cart</p>
            <style jsx> {`
                div {
                    color: var(--white);
                    background-color: var(--black);
                    padding: 4px;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: bold;
                    height: 100%;
                    width: 100%;
                    text-align: center;
                    cursor: pointer;
                }
		    `} </style>
        </div>
    )
}