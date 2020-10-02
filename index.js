#!/usr/bin/env node

const pickRandFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const gen = (strs, ...sources) => {
	let acc = "";

	let perms = 1;

	strs.forEach((str, i) => {
		const source =
			(typeof sources[i] === "function" ? sources[i]() : sources[i]) ||
			[];
		const x = pickRandFrom(source) || "";
		perms = perms * (source.length || 1);
		acc = acc + str + x;
	});

	console.log(perms);

	return acc;
};

const preamble = [
	"can't wait until there's",
	"Here's a world I'd like to see:",
	"Hey, how 'bout",
	"How much longer until we have",
	"just had a beautiful thought...",
	"think it's about time for",
	"We'll never #resist @realdonaldtrump without",
	"what's the best way to #disrupt #startups? Simple:",
	"When will @elonmusk have",
];

const number = [
	"10X",
	"a few",
	"a fucking butt tonne",
	"a handful",
	"juuuuuusst a few",
	"lots",
	"many",
	"many many",
	"many many many",
	"many many many many",
	"oodles",
	"some",
	"tonnes",
];

const xx = [
	"broards",
	"chiquitas",
	"cuties",
	"dames",
	"females",
	"gurls",
	"honey bunnies",
	"hoochie coochie mammas",
	"laaadies",
	"ladies",
	"lovely ladies",
	"lovely lovely ladies",
	"lovely lovely lovely ladies",
	"lovely lovely lovely lovely ladies",
	"of the fairer sex",
	"senioritas",
	"skirts",
	"spicy mamma jammas",
	"womenfolk",
];

const job = [
	"behind keyboards",
	"boshing out a some serverless apps",
	"coordinating a load of goroutines",
	"crunching numbers",
	"crunching the numbers",
	"defining schemas",
	"depricating some perl codebases",
	"doing git merges",
	"doing git pulls",
	"doing git rebases",
	"doing programming",
	"programming something",
	"pushing to production",
	"down the old code hole",
	"fucking about with mercurial",
	"generating varadic types",
	"having a go at WASM",
	"making web apps",
	"managaging databases",
	"on the blockchain",
	"orchestrating kubernetes",
	"plugging in USBs",
	"publishing to NPM",
	"running the numbers",
	"smashing out some c++",
	"thinking about codes",
	"throwing errors",
	"training some neural nets",
	"using webpack",
	"watching robot wars",
	"writing bash scripts",
	"writing some ruby koans",
	"talking about react",
	"banging on about angular",
	"advocating for vue.js",
	"explaining monads to people",
	"opening issues",
];

const postamble = [
	"... Awooooogaa",
	". But hey, what do I know?!?",
	". But maybe that's just me, what do you think?",
	", don't you think..?",
	". do you feel me?",
	". #femenism",
	". #FridayIsGuyday",
	"; if not now, then when?",
	"... Lovely",
	". #MotivationMonday",
	"... nice",
	". #progressive #JustMyTake",
	". Retweet if you agree",
	". #SaturdayWomenMatterToday",
	". #SundayFunday",
	". #ThoughtLeadership",
	". #ThursdayThoughts",
	". #TuesdayTutelage",
	". #WisdomWednesday",
	". @ycombinator",
];

console.log(gen`${preamble} ${number} more ${xx} ${job}${postamble}`);
