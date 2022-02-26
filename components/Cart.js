import CartIcon from "./icons/CartIcon";

export default function Cart () {
    return (
        <div>
            <CartIcon />
            <style jsx>{`
                div {
                    position: absolute;
                    right: 34px;
                    top: 5px;
                    background: white;
                    padding: 10px;
                    z-index: 1000;
                    border-radius: 10px;
                    width: 30px;
                    height: 30px;
                }
            `}</style>
        </div>
    )
}