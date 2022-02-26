
import Image from 'next/image';
import Link from 'next/link';
import Badge from '../../components/Badge';
import SizesTag from '../../components/SizesTag';
import ToCartButton from '../../components/ToCartButton';
import ToListButton from '../../components/ToListButton';

const Item = (props) => {
	return (
		<div className = 'item'>
				<div> 
					<Link href={`/item/${props.id}`}>
						<span className='link'>
						<div className="picture">
							<Image
								alt={props.name}
								src={'/' + props.image}
								width="100%"
								height="50%"
								layout="responsive"
								objectFit="cover"
								quality={100}
								/>
						</div>
						<div className='name-price'>
							<p className='name'>{props.name}</p>
							<p className='price'>$ {props.price}</p>
						</div>
						<div className='divider'></div>
						<div className='badge-sizes'>
							<Badge id={props.badgeId} />
							<SizesTag id={props.sizeId} />
						</div>
						</span>
					</Link>
					<div className='to-cart-to-list'>
						<ToCartButton />
						<ToListButton />
					</div>
					<p className='description'>Free shipping for everyone</p>
				</div>
			<style jsx> {`
				.link {
					cursor: pointer;
				}
				.item {
					display: flex;
					flex-direction: column;
					border-radius: 10px;
					margin: 2px;
					box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
					box-sizing: border-box;
					overflow: hidden;
				}
				.name-price {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 0px 10px;
				}
				.name {
					font-weight: bold;
					font-size: 30px;
					color: var(--black);
				}
				.price {
					font-weigth: bold;
					font-size: 24px;
					color: #64748b;
				}
				.divider {
					margin: 0px 10px;
					height: 1px;
					background-color: black;
					opacity: 20%;
				}
				.badge-sizes {
					display: flex;
					justify-content: flex-start;
					gap: 20px;
					padding: 10px;
				}
				.to-cart-to-list {
					display: flex;
					justify-content: center;
					gap: 10px;
					align-items: center;
					padding: 10px;
				}
				.description {
					padding: 10px;
					color: #64748b;
				}
			`} </style>
		</div>
	)
}

export default Item;


