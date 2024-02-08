import dayjs from 'dayjs';

const timeFormat = 'M/DD/YYYY HH:mm';
const scheduleItems = [
	// Day 1
	{
		title: 'Doors Open',
		description:
			'When you arrive at the building on the morning of HackTJ, you will enter through the main door and check in the lobby. From there, you will be directed to the elevators and your designated floor. Please make sure that ALL team members check in individually! This year, we will be implementing <b>staggered check-ins</b>, so please check your email for time assignments.',
		time: dayjs('3/4/2023 09:00', timeFormat)
	},
	{
		title: 'Sponsor Fair',
		time: dayjs('3/4/2023 09:00', timeFormat),
		end: dayjs('3/4/2023 11:00', timeFormat)
	},
	{
		title: 'Doors Close',
		time: dayjs('3/4/2023 11:00', timeFormat)
	},
	{
		title: 'Opening Ceremony',
		time: dayjs('3/4/2023 11:00', timeFormat),
		end: dayjs('3/4/2023 11:30', timeFormat)
	},
	{
		title: 'Hacking Begins',
		time: dayjs('3/4/2023 11:30', timeFormat)
	},
	{
		title: 'Team Building',
		time: dayjs('3/4/2023 11:30', timeFormat),
		end: dayjs('3/4/2023 12:00', timeFormat)
	},
	{
		title: 'Resources and Q&A for Beginners',
		description:
			'If you are a beginner or don’t know where to start, come ask some HackTJ team members general questions about the hackathon!',
		time: dayjs('3/4/2023 12:15', timeFormat),
		end: dayjs('3/4/2023 12:45', timeFormat)
	},
	{
		title: 'Submit Check-In Form',
		time: dayjs('3/4/2023 13:00', timeFormat)
	},
	{
		title: 'Lunch',
		time: dayjs('3/4/2023 13:00', timeFormat),
		end: dayjs('3/4/2023 14:00', timeFormat)
	},
	{
		title: 'Workshops',
		time: dayjs('3/4/2023 14:00', timeFormat),
		end: dayjs('3/4/2023 18:00', timeFormat)
	},
	{
		title: 'Dinner',
		time: dayjs('3/4/2023 19:00', timeFormat),
		end: dayjs('3/4/2023 20:00', timeFormat)
	},
	{
		title: 'Women in Tech Panel',
		description:
			'Come to hear about the experiences, education/career paths, obstacles overcome, advice, and more of women working in technical fields. All student hackers are welcome to attend.',
		time: dayjs('3/4/2023 20:00', timeFormat),
		end: dayjs('3/4/2023 21:00', timeFormat)
	},
	{
		title: 'Submit Project Category',
		time: dayjs('3/4/2023 23:30', timeFormat)
	},
	// // Day 2
	{
		title: 'Midnight Snack',
		description: 'Pizza!',
		time: dayjs('3/5/2023 00:00', timeFormat)
	},
	{
		title: 'Breakfast',
		description:
			'Einstein Bros. Bagels: Honey, Blueberry, Chocolate Chip, Cinnamon Raisin, Plain, Everything<br /><br />Blueberry Muffins',
		time: dayjs('3/5/2023 06:00', timeFormat),
		end: dayjs('3/5/2023 08:00', timeFormat)
	},

	{
		title: 'Hacking Ends',
		time: dayjs('3/5/2023 08:00', timeFormat)
	},
	{
		title: 'Judging',
		description:
			'Judges will be going around each team by room, so make sure to stay in the vicinity of your room and be ready to present during the judging period.<br /><br />If you win: we’re going to choose 3 groups to present for 3 minutes each at the closing ceremony.  You can use slides if you’d like, or you can just talk to us. We will notify you if you are presenting at the ceremony around 30-45 minutes after judging ends.',
		time: dayjs('3/5/2023 08:30', timeFormat),
		end: dayjs('3/5/2023 11:00', timeFormat)
	},
	{
		title: 'Closing Ceremony',
		time: dayjs('3/5/2023 11:30', timeFormat),
		end: dayjs('3/5/2023 12:00', timeFormat)
	},
	{
		title: 'Hackathon Ends',
		time: dayjs('3/5/2023 12:00', timeFormat)
	}
];

export default scheduleItems;
