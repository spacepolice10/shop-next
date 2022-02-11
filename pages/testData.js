const testData = {
	items: {
		accessories: [
			{
				id: 1992,
				name: 'Glasses',
				price: 12,
				size: 'One size',
				color: 'Black',
				description: 'Some text about this awesome glasses from California, bla-bla-bla',
				comments: [],
				score: 3.5,
				badge: 'Hot',
			}
		],
		clothes: [
			{
				id: 2020,
				name: 'Jacket',
				price: 68,
				size: 'XL',
				color: 'Black',
				description: 'Some text about this awesome jacket from nowhere, bla-bla-bla',
				comments: [],
				score: 4.4,
				badge: 'Hot',
			},
			{
				id: 4040,
				name: 'Shoes',
				price: 70,
				size: 'S',
				color: 'Red',
				description: 'Shoes,shoes,shoes,shoes',
				comments: [],
				score: 3.9,
				badge: 'Season',
			},
			{
				id: 6060,
				name: 'Bra',
				price: 44,
				size: 'XS',
				color: 'Blue',
				description: 'For the gorgeous one',
				comments: [],
				score: 4.9,
				badge: 'Season',
			}
		]
	},
	lists: {
		popular: [
			{
				name: 'Classic punk-rock-style',
				subscribers: [],
				clothes: [
					1992, 6060
				],
			}
		],
		mine: [
			{
				name: 'Best Naruto-style outfit',
				subscribers: [],
				clothes: [
					4040
				]
			}
		],
		subscriptions: [],
	},
	categories: [
		{
			name: 'Beach season',
			picture: '',
			query: ''
		}
	],
	blog: [
		{
			title: 'Dress up like captain Levi',
			image: '',
			paragraph: 'Let us talk about how we can achieve the same amount of sus that captain Levi sports permanently',
			content: 'You know what? Everyone likes Levi. He is extremely cool when we speak about his abilities in crushing titans but we also have to admit that he is quite stylish.'
		}
	],
}

export default testData;