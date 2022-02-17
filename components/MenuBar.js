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
					border: 2px solid black;
					width: 95%;
				}
			`} </style>
		</div>
	)
}

export default MenuBar;