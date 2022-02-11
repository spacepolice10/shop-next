const CategoryBanner = (props) => {
	return (
		<div className = 'testClass'>
			{props.children}
			<style jsx> {`
				.testClass {
					border: 2px solid red;
					width: 100%;
				}
			`} </style>
		</div>
	)
}

export default CategoryBanner;