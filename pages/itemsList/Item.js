import A from '/components/A';
import Image from 'next/image';
import Badge from '../../components/Badge';

const Item = (props) => {
	return (
		<div className = 'item'>
			<A text='' href={`/item/${props.id}`}>
				<div> 
					<p>{props.name}</p>
					<p>{props.price}</p>
					<Badge id={props.badgeId} />
					<div className = 'picture'>
						<Image
							alt={props.name}
							src={'/' + props.image}
							width='120px'
							height='60px'
							layout="intrinsic"
							objectFit="cover"
							quality={100}
						/>
					</div>
				</div>
			</A>
			<style jsx> {`
				.item {
					border: 2px solid black;
				}
				.picture {
					width: 120px;
					height: 60px;
				}
			`} </style>
		</div>
	)
}

export default Item;


