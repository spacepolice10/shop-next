
export default function ToCartButton ({ id }) {
    return (
        <div>
            Add to cart
            <style jsx> {`
                div {
                    color: var(--white);
                    background-color: var(--black);
                    padding: 4px;
                    border: 1px solid var(--black);
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: bold;
                    height: 48px;
                    width: 100%;
                    text-align: center;
                    cursor: pointer;
                    line-height: 48px;
                    vertical-align: middle;
                }
		    `} </style>
        </div>
    )
}
