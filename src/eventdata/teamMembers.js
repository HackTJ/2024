/**
 * This file contains all the team information for the team section of the index
 */

import { base } from '$app/paths';

let teamMembers = [
	{
		name: 'Ananya Pamal',
		class: '2024',
		years: 3,
		director: true,
		description:
			'As a senior, Ananya is excited to be the Director of HackTJ 11.0! This is her third (and a half) year being on the HackTJ team, and she enjoys computer science and physics. She is fascinated by machine learning and its applications in data analysis. Outside of HackTJ, Ananya participates in clubs/programs such as FTC, Spanish Honor Society, and UAV. In her free time, she likes to bake, listen to music, and do pilates.',
		portraitSrc: `${base}/teamportraits/Ananya.JPG`
	},
	{
		name: 'Lindsay Hwang',
		class: '2024',
		years: 3,
		director: true,
		description:
			'Lindsay is the Director of HackTJ. She’s a senior at TJHSST and this is her third (and a half) year being on the HackTJ team after competing in HackTJ 7.5 and 8.0. Lindsay is passionate about computer science, especially ML and CV, and math. At TJ, she’s involved in TSA, FTC, Academic Decathlon, and Spanish Honor Society. Outside of school, Lindsay enjoys figure skating, playing lacrosse, and listening to Taylor Swift’s entire discography.',
		portraitSrc: `${base}/teamportraits/Lindsay.JPG`
	},
	{
		name: 'Krishnan Shankar',
		class: '2024',
		years: 3,
		director: false,
		description:
			'Krishnan is a senior at TJHSST, and this is his third year on the HackTJ team. He got inspired to join the team after attending HackTJ multiple times, and really wants to contribute to help make it an amazing experience for everyone! Krishnan is fascinating with programming, specifically with full-stack websites and games using languages like Python and JavaScript. Outside of HackTJ, he is a lead sysadmin at TJ and the club president for TJUAV. In his free time, he likes to bike, swim, and play chess with his friends.',
		portraitSrc: `${base}/teamportraits/Krishnan.JPG`
	},
	{
		name: 'Vidhi Sharma',
		class: '2024',
		years: 3,
		director: false,
		description:
			'Vidhi is a senior at TJHSST, and she is so excited for her third year on the HackTJ team after competing her freshman year! Vidhi is passionate about the intersection between computer science and biology, and hopes to go into the medical field in the future. She is a part of HOSA, TSA, and Challenge Success. Outside of school, she loves to sing, listen to music, and spend time with her family and friends.',
		portraitSrc: `${base}/teamportraits/Vidhi.JPG`
	},
	{
		name: 'Pooja Somayajula',
		class: '2024',
		years: 2,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/Pooja.JPG`,
		hidden: true
	},
	{
		name: 'Sanika Kale',
		class: '2024',
		years: 2,
		director: false,
		description:
			'Sanika is a Senior at TJHSST, and is excited for her second year on the HackTJ team! She is passionate about connecting her interests, like neuroscience, with computer science to create projects for social good. Sanika shares her love of STEM by volunteering at local shelters and tutoring underprivileged kids. Outside of HackTJ, she spends her free time playing (and coaching!) volleyball, dancing to Bollywood songs, and watching Netflix shows.',
		portraitSrc: `${base}/teamportraits/Sanika.JPG`
	},
	{
		name: 'Avni Garg',
		class: '2025',
		years: 2,
		director: false,
		description:
			'Avni is a junior at TJHSST, and this is her second year on the team after competing freshman year in HackTJ 9.0! She hopes to make HackTJ a memorable experience for everyone. Avni enjoys math and computer science, especially in the fields of AI and ML. Aside from HackTJ, she is also part of the Varsity Math Team and Computer Team. In her free time, she likes to bike, read, and play card games.',
		portraitSrc: `${base}/teamportraits/Avni.JPG`
	},
	{
		name: 'Saanvi Indukuri',
		class: '2025',
		years: 2,
		director: false,
		description:
			'Saanvi is a junior at TJHSST, and she’s excited for her second year on the team. She loves seeing how computer science brings to life so many ideas and ties together to other fields she loves such as biology and astronomy. Other than HackTJ, Saanvi is also involved in Astronomy Club, FPS, Red Cross YTF, and she plays field hockey and lacrosse for TJ.  Outside of school, she loves to read, watch lots and lots of TV, and cook.',
		portraitSrc: `${base}/teamportraits/Saanvi.JPG`
	},
	{
		name: 'Samvrit Rao',
		class: '2025',
		years: 2,
		director: false,
		description:
			'Samvrit is a junior at TJHSST and this is his second year on the HackTJ team and he joined after competing in freshman year. He is passionate about the intersection of computer science and biology and likes to pursue translational projects related to infectious and neurological diseases. Along with Hack TJ, he is an avid member of clubs such as TSA, TJ Speech, and German Honor Society.Outside of school he runs a summer stem program for elementary and middle school kids. In his free time, he likes to read, play basketball, and listen to the newest rap album.',
		portraitSrc: `${base}/teamportraits/Samvrit.JPG`
	},
	{
		name: 'Pratyasa Sinha',
		class: '2025',
		years: 1,
		director: false,
		description:
			'Pratyasa is a junior at TJHSST, and this is her first year on the team after competing in sophomore year! She loves how computer science can be used to innovate and solve problems in different fields, such as medicine and biology. Outside of HackTJ, Pratyasa is involved in FPS and Red Cross YTF. In her free time, she loves to read, bake (especially cookies), and listen to music.',
		portraitSrc: `${base}/teamportraits/Pratyasa.JPG`
	},
	{
		name: 'Kunal Bham',
		class: '2024',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/Kunal.JPG`,
		hidden: true
	},
	{
		name: 'Aanya Gupta',
		class: '2026',
		years: 1,
		director: false,
		description:
			'Aanya is a sophomore at TJHSST, and this is her first year on the team after competing in HackTJ 10.0! She enjoys finding ways to bridge gaps between computer science and biology, solving problems that impact social good. Outside of HackTJ, she is an active participant in the Bioinformatics club, Teknos, and Coding Lady Colonials! In her free time, she enjoys baking for her friends, listening to music, and rock climbing.',
		portraitSrc: `${base}/teamportraits/Aanya.JPG`
	},
	{
		name: 'Mr. Hannum',
		class: 'sponsor',
		years: 0,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/MrHannum.JPG`
	},
	{
		name: 'Mr. Kosek',
		class: 'sponsor',
		years: 0,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/MrKosek.JPG`
	}
];

teamMembers = teamMembers.filter((member) => !member.hidden);
teamMembers.sort((a, b) => {
	const ad = a.director ? 1 : 0;
	const bd = b.director ? 1 : 0;
	const ay = a.years;
	const by = b.years;
	const ac = a.class;
	const bc = b.class;
	const an = a.name;
	const bn = b.name;
	// Sort by director?, then by years on the team, then by class, then by first name
	return bd - ad || by - ay || ac.localeCompare(bc) || an.localeCompare(bn);
});

export default teamMembers;
