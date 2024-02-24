/**
 * This file contains all the sponsor information for the sponsor section of the index
 */

import { base } from '$app/paths';

const sponsors = {
	platinum: [],
	gold: [
		{
			src: `${base}/sponsorlogos/roam.png`,
			alt: 'Roam Logo',
			href: 'https://ro.am/'
		}
	],
	silver: [
		{
			src: `${base}/sponsorlogos/janestreet.png`,
			alt: 'Jane Street Logo',
			href: 'https://www.janestreet.com/'
		}
	],
	bronze: [
		{
			src: `${base}/sponsorlogos/collegeramp.png`,
			alt: 'College Ramp Logo',
			href: 'https://www.collegeramp.org/'
		},
		{
			src: `${base}/sponsorlogos/teoco.png`,
			alt: 'TEOCO Logo',
			href: 'https://www.teoco.com/'
		}
	],
	prize: [
		{
			src: `${base}/sponsorlogos/quantinuum.png`,
			alt: 'Quantinuum Logo',
			href: 'https://www.quantinuum.com'
		},
		{
			src: `${base}/sponsorlogos/venturecamp.png`,
			alt: 'Venture Camp Logo',
			href: ''
		}
	],
	partners: [
		{
			src: `${base}/sponsorlogos/cvent.png`,
			alt: 'Cvent Logo',
			href: 'https://www.cvent.com/'
		},
		{
			src: `${base}/sponsorlogos/tjpartnership.png`,
			alt: 'TJ Partnership Fund Logo',
			href: 'https://www.tjpartnershipfund.org/'
		}
	]
};

const platinumTierData = {
	title: 'PLATINUM TIER',
	bg: 'bg-[#C9D4E5]',
	cards: sponsors.platinum
};
const goldTierData = {
	title: 'GOLD TIER',
	bg: 'bg-[#D6B570]',
	cards: sponsors.gold
};
const silverTierData = {
	title: 'SILVER TIER',
	bg: 'bg-zinc-400',
	cards: sponsors.silver
};
const bronzeTierData = {
	title: 'BRONZE TIER',
	bg: 'bg-[#AF7A6D]',
	cards: sponsors.bronze
};
const prizeTierData = {
	title: 'PRIZE TIER',
	bg: 'bg-[#DEDBD2]',
	cards: sponsors.prize
};
const partnershipData = {
	title: 'PARTNERS',
	bg: 'bg-spruce-200',
	cards: sponsors.partners
};
const sponsorData = [
	platinumTierData,
	goldTierData,
	silverTierData,
	bronzeTierData,
	prizeTierData,
	partnershipData
];

export default sponsorData;
