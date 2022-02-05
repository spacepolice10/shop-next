const Item = (props) => {
	return (
		<div>
			<p>{props.name}</p>
			<p>{props.price}</p>
			<p>{props.size}</p>
			<p>{props.color}</p>
		</div>
	)
}

export default Item;