const Banner = (props) => {
	return (
		<div className = 'testClass'>
			{props.children}
			<style jsx> {`
				.testClass {
					border: 2px solid red;
				}
			`} </style>
		</div>
	)
}

export default Banner;