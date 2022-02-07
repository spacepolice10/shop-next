import Layout from '../components/Layout';

export default function App ({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
			<style jsx> {`
				body {
					width: 100%;
				}
			`} </style>
		</Layout>
	)
}