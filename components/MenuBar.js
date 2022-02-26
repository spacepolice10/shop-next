import A from './A';
import Link from 'next/link';

const MenuBar = () => {
	return (
		<div className = 'menu-bar'>
				<Link href='/home/'>Home</Link>
				<Link href='/search/'>Search</Link>
				<Link href='/lists/'>Lists</Link>
				<Link href='/profile/'>Me</Link>
			<style jsx> {`
				.menu-bar {
					position: fixed;
					bottom: 0;
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					z-index: 1000;
					background: black;
					color: white;
					width: 100%;
					height: 80px;
				}
			`} </style>
		</div>
	)
}

export default MenuBar;