import { useState } from 'react';
import testData from '../testData';
import SaleBanner from './banners/SaleBanner';
import SeasonBanner from './banners/SeasonBanner';
import HomePage from './HomePage';
import Blog from '../blog/Blog';

function ScreenPicker ({ setScreen }) {
	const pickScreen = (x) => {
		setScreen(x)
	}
	return (
		<div>
			<button onClick={() => {pickScreen(<HomePage />)}} id="home">New clothes</button>
			<button onClick={() => {pickScreen(<Blog />)}} id="blog">#stylenotes</button>
		</div>
	)
}

export default function Home() {
	const [screen, setScreen] = useState(<HomePage />)
	return (
		<>
			<ScreenPicker setScreen={setScreen} />
			<SaleBanner />
			<SeasonBanner />
			{screen}
		</>
	)
}