interface Project {
	title: string;
	type: string;
	technologies: string[];
	description: string;
	url: string;
	githubUrl?: string;
	stars?: number;
}

export const LINKS = [
	{
		url: "/",
		name: "About",
	},
	{
		url: "/projects",
		name: "Projects",
	},
	{
		url: "/blog",
		name: "Blog",
	},
];

export const EDUCATION = [
	{
		title: "Master in Informatics Security",
		place: "University of Coimbra",
		placeUrl: "https://www.uc.pt/en",
		description:
			"I've completed my master in Informatics Engineering at the University of Coimbra with a final grade of 18/20.",
		date: "2018 - 2020",
	},
	{
		title: "Bachelor in Computer Science",
		place: "University of Coimbra",
		placeUrl: "https://www.uc.pt/en",
		description:
			"I've completed my bachelor in Informatics Engineering at the University of Coimbra with a final grade of 16/20.",
		date: "2015 - 2018",
	},
];

export const PAST_EXPERIENCE_HOMEPAGE = [
	{
		title: "Fullstack Developer",
		place: "OpenBB",
		placeUrl: "https://openbb.co",
		description: `Currently working at OpenBB with the mission of building modern investment research platforms for everyone. In this process, I've been involved in multiple projects. Built [openbb.co](https://openbb.co), the company website, using remix.run, TailwindCSS, TypeScript, mdx-bundler. I'm involved in the development of our financial discord and telegram bot made with Python. To manage all OpenBB Products, we built a web platform - [my.openbb.co](https://my.openbb.co) also using Remix and TailwindCSS. I usually add features (normally crypto related) to our bigger and open source product called [OpenBB Terminal](https://openbb.co/github). We recently launched our enterprise product, [OpenBB Terminal Pro](https://openbb.co/github), that is a web application built with React, TailwindCSS, Zustand, and other amazing technologies. Sign up [today](https://pro.openbb.co).`,
		date: "2021 - Present",
	},
	{
		title: "Cybersecurity Researcher",
		place: "University of Coimbra",
		placeUrl: "https://www.uc.pt/en",
		description:
			"As part of my master internship, I was awarded a research scholarship from FCT (the Portuguese public agency that supports science, technology and innovation). This enabled me to work independently while having the support of my supervisor. It was a great challenge that came with a lot of freedom, but also with huge responsibilities. The focus of this internship (and my dissertation) was to assess whether web applications were already a viable alternative to native ones in mobile devices. Based on this, I delivered my master thesis, which was a comparative study between web and native applications, if you are interested in reading my master thesis DM me.",
		date: "2019 - 2020",
	},
	{
		title: "Freelance Fullstack Developer",
		place: "",
		description: `In 2018, I built the credential platform for Queima das Fitas, one of the biggest festivals in Portugal - it enabled the creation of the credentials and included an application (in Flutter) to read the QR codes at the festivals' entrance. I have also built a [native application for a high school in my hometown](https://appadvice.com/app/myesjf/1462460664) and a different [application for Queima das Fitas](https://noticias.uc.pt/multimedia/videos/queimapp-chegou-a-primeira-aplicacao-mobile-dedicada-a-queima-das-fitas/) which later evolved into [EveApp](https://www.facebook.com/EveApp2019/). All these applications were built using React Native. Later, I developed several applications professionally including a website for a nation-wide radio [ruc.pt](https://ruc.pt) using Next.js, TailwindCSS for the frontend and Wordpress, GraphQL for the backend, as well as other web applications using Next.js and Firebase for clients in Upwork freelancing platform.`,
		date: "2018 - 2020",
	},
];

export const HIGHLIGHTS_HOMEPAGE = [
	{
		title:
			"Building the first AI-Powered Financial Terminal: OpenBB Terminal Pro",
		description:
			"Main developer behind the first AI-powered financial terminal, OpenBB Terminal Pro. It's a performant web application highly customizable and tailored for professional investors. Sign up below.",
		url: "https://openbb.co/products/terminal",
	},
	{
		title: "Showcased on Cloudflare: Edge-Optimized Remix Run Stack",
		description:
			"Highlighted by Cloudflare, my project leverages the Remix stack, tailored for edge computing with Cloudflare Pages and D1.",
		url: "https://blog.cloudflare.com/d1-turning-it-up-to-11",
	},
	{
		title:
			"Comparing the Performance of Web Applications to Native Applications",
		description:
			"In my master's thesis, I conducted a comparative study between web and native applications for mobile devices, exploring their reliability and performance.",
		url: "/master_thesis.pdf",
	},
];

export const PROJECTS: Project[] = [
	{
		title: "OpenBB Website",
		type: "website",
		technologies: [
			"remix.run",
			"TailwindCSS",
			"TypeScript",
			"mdx-bundler",
			"Posthog",
			"Directus",
		],
		description: "The company website for OpenBB.",
		url: "https://openbb.co",
	},
	{
		title: "OpenBB Terminal Pro",
		type: "web app",
		technologies: ["React", "TailwindCSS", "Zustand", "Tanstack/React Query"],
		description: "An enterprise product for investment research.",
		url: "https://openbb.co/github",
	},
	{
		title: "ollama-reply",
		type: "browser extension",
		technologies: [
			"React",
			"Vite",
			"TypeScript",
			"TailwindCSS",
			"shadcn-ui",
			"Ollama",
		],
		description:
			"An open-source browser extension that leverages the power of the Ollama Llama3 model to generate engaging replies for social media growth.",
		url: "https://github.com/jose-donato/ollama-reply",
	},
	{
		title: "Race Stack",
		type: "web app",
		technologies: [
			"Remix",
			"TailwindCSS",
			"TypeScript",
			"Cloudflare Pages",
			"Cloudflare D1",
			"Drizzle ORM",
		],
		description:
			"A Remix run stack built for the edge, utilizing Cloudflare Pages and D1 for optimal performance.",
		url: "https://github.com/jose-donato/race-stack",
	},
	{
		title: "Sprite Your SVGs",
		type: "web app",
		technologies: ["SvelteKit", "TailwindCSS", "TypeScript"],
		description:
			"Transform and optimize your SVGs by generating an efficient sprite, reducing HTTP requests and externalizing icon data.",
		url: "https://github.com/jose-donato/sprite-your-svgs",
	},
	{
		title: "OpenBB Docs",
		type: "website",
		technologies: ["docussaurus", "TailwindCSS", "TypeScript", "React"],
		description: "The company website for OpenBB.",
		url: "https://docs.openbb.co",
		githubUrl: "",
	},
	{
		title: "OpenBB Hub",
		type: "website",
		technologies: ["remix.run", "TailwindCSS", "TypeScript"],
		description: "The company website for OpenBB.",
		url: "https://hub.openbb.co",
	},
	{
		title: "Financial Discord and Telegram Bot",
		type: "web app",
		technologies: ["Python"],
		description: "A bot for financial discord and telegram.",
		url: "",
	},
	{
		title: "OpenBB Terminal",
		type: "desktop app",
		technologies: ["Python", "Plotly", "Pydantic", "FastAPI"],
		description: "An open source product for investment research.",
		url: "https://openbb.co/products/terminal",
		githubUrl: "",
	},
	{
		title: "Credential Platform for Queima das Fitas",
		type: "mobile app",
		technologies: ["Flutter", "Flask", "MySQL"],
		description:
			"A platform for creating credentials for one of the biggest festivals in Portugal.",
		url: "",
	},
	{
		title: "Native Application for a High School",
		type: "mobile app",
		technologies: ["React Native", "Expo"],
		description: "A native application for a high school in my hometown.",
		url: "https://appadvice.com/app/myesjf/1462460664",
	},
	{
		title: "Application for Queima das Fitas",
		type: "mobile app",
		technologies: ["React Native"],
		description: "A mobile application dedicated to Queima das Fitas.",
		url: "https://noticias.uc.pt/multimedia/videos/queimapp-chegou-a-primeira-aplicacao-mobile-dedicada-a-queima-das-fitas/",
	},
	{
		title: "EveApp",
		type: "mobile app",
		technologies: ["React Native", "Expo"],
		description: "An evolved version of the Queima das Fitas application.",
		url: "https://www.facebook.com/EveApp2019/",
	},
	{
		title: "RUC.pt",
		type: "website",
		technologies: ["Next.js", "TailwindCSS", "Wordpress", "GraphQL"],
		description: "A website for a nation-wide radio.",
		url: "https://ruc.pt",
	},
];

export const SOCIALS = [
	{
		url: "https://github.com/jose-donato",
		icon: "mdi-github",
		name: "GitHub",
	},
	{
		url: "https://twitter.com/intent/follow?screen_name=josedonato__",
		icon: "mdi-twitter",
		name: "Twitter",
	},
	{
		url: "https://www.linkedin.com/in/jose-donato/",
		icon: "mdi-linkedin",
		name: "LinkedIn",
	},
	{
		url: "mailto:jose-donato@protonmail.com",
		icon: "mdi-email",
		name: "Email",
	},
];
