import A from '/components/A';

const Item = (props) => {
	return (
		<div className = 'item'>
			<A text='' href={`/item/${props.id}`}>
				<div> 
					<p>{props.name}</p>
					<p>{props.price}</p>
					<p>{props.size}</p>
					<p>{props.color}</p>
				</div>
			</A>
			<style jsx> {`
				.item {
					border: 2px solid black;
				}
			`} </style>
		</div>
	)
}

export default Item;