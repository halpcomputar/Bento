// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Darrel',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '1ff486e746b0af28ef8e2ad6513f1ad4', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '33.412',
	defaultLongitude: '-82.011',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '2',
			name: 'Youtube TV',
			icon: 'tv',
			link: 'https://tv.youtube.com/',
		},
		{
			id: '3',
			name: 'Netflix',
			icon: 'clapperboard',
			link: 'https://netflix.com',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'circle-dollar-sign',
			link: 'https://amazon.com',
		},
		{
			id: '5',
			name: 'Spotify',
			icon: 'music',
			link: 'https://spotify.com',
		},
		{
			id: '6',
			name: 'Discord',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'film',
			id: '1',
			links: [
				{
					name: 'Youtube',
					link: 'https://youtube.com',
				},
				{
					name: 'Youtube TV',
					link: 'https://tv.youtube.com',
				},
				{
					name: 'Netflix',
					link: 'https://netflix.com',
				},
				{
					name: 'Amazon Prime Video',
					link: 'https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video',
				},
			],
		},
		{
			icon: 'clapperboard',
			id: '2',
			links: [
								{
					name: 'Peacock TV',
					link: 'https://peacocktv.com',
				},
				{
					name: 'Paramount+',
					link: 'https://paramountplus.com',
				},
				{
					name: 'Spotify',
					link: 'https://open.spotify.com',
				},
				{
					name: 'Twitch',
					link: 'https://twitch.tv',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'users',
			id: '1',
			links: [
				{
					name: 'Lemmy',
					link: 'https://lemmy.world',
				},
				{
					name: 'Kbin',
					link: 'https://kbin.social',
				},
				{
					name: 'Beehaw',
					link: 'https://beehaw.org',
				},
				{
					name: 'Reddit',
					link: 'https://reddit.com',
				},
			],
		},
		{
			icon: 'mail',
			id: '2',
			links: [
				{
					name: 'Gmail',
					link: 'https://gmail.com',
				},
				{
					name: 'Outlook',
					link: 'https://outlook.com',
				},
				{
					name: 'Posteo',
					link: 'https://posteo.de/webmail/',
				},
				{
					name: 'Android Messages',
					link: 'https://messages.google.com',
				},
			],
		},
	],
};
