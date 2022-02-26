import Link from 'next/link';
import HomeIcon from './icons/HomeIcon';
import SearchIcon from './icons/SearchIcon';
import HeartIcon from './icons/HeartIcon';
import UserIcon from './icons/UserIcon';

const MenuBar = () => {
	return (
		<div className = 'menu-bar'>
				<Link href='/home/'>
					<button>
						<HomeIcon />
					</button>
				</Link>
				<Link href='/search/'>
					<button>
						<SearchIcon />
					</button>
				</Link>
				<Link href='/lists/'>
					<button>
						<HeartIcon />
					</button>
				</Link>
				<Link href='/profile/'>
					<button>
						<UserIcon />
					</button>
				</Link>
			<style jsx> {`
				.menu-bar {
					position: fixed;
					bottom: 0;
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					z-index: 1000;
					background: var(--black);
					color: var(--white);
					width: 100%;
					height: 80px;
				}
				button {
					border: none;
					background: transparent;
					cursor: pointer;
				}
			`} </style>
		</div>
	)
}

export default MenuBar;