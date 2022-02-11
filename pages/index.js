import Home from './home/index';
import A from '../components/A';

const Index = () => {
	return (
		<div className = 'container'>
			<h1>Testing</h1>
			<Home />
			<style jsx> {`
				.container {
					width: 100%;
				}
			`} </style> 
		</div>
	)
}

export default Index;