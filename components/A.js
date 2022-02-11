import Link from 'next/link';

function A (props) {
	return (
		<Link href={props.href}>
			{ props.children }
		</Link>
	)
}

export default A;