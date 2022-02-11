import A from './A';

const MenuBar = () => {
	return (
		<div className = 'menu-bar'>
				<A href='/home/'>Home</A>
				<A href='/search/'>Search</A>
				<A href='/lists/'>Lists</A>
				<A href='/profile/'>Me</A>
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