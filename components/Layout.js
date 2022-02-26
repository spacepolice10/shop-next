import MenuBar from './MenuBar';

export default function Layout ({ children }) {
	return (
		<div className = 'layout'>
			<MenuBar />
			{children}
			<style jsx> {`
				.layout {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 100%

				}
			`} </style>
		</div>
	)
}
