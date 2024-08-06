import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    Link,
    RocketRush,
    Nexus,
    Express,
    css,
    reactjs,
    redux,
    tailwind,
    npm,
    socketio,
    postman,
    Vercel,
    nodejs,
    mongodb,
    git,
    Studynotion,
    Speakeasy,
    Chatbuddy,
    Ecommerce,
    meta,
    starbucks,
    tesla,
    Nextjs,
    shopify,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Copywriter",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: Nextjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Express Js",
        icon: Express,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Vercel",
        icon: Vercel,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "StudyNotion",
        description:
            "StudyNotion is a fully functional ed-tech learning platform that enables users to create, consume, and rate educational content.",
        tags: [
            {
                name: "MERN Stack",
                color: "blue-text-gradient",
            },
            {
                name: "RestAPI",
                color: "green-text-gradient",
            },
            {
                name: "Vercel",
                color: "pink-text-gradient",
            },
            {
                name: "Render",
                color: "orange-text-gradient",
            },
        ],
        image: Studynotion,
        source_code_link: "https://github.com/TheChiragKhaitan/StudyNotion",
        live_link: "https://studynotion-chirag-khaitan.vercel.app",
    },
    {
        name: "Nexus",
        description:
            "Nexus is a real-time whiteboard collabaration application built using various modern web technologies and tools to provide a seamless and engaging user experience.",
        tags: [
            {
                name: "NextJs 14",
                color: "blue-text-gradient",
            },
            {
                name: "Convex",
                color: "green-text-gradient",
            },
            {
                name: "Liveblocks",
                color: "pink-text-gradient",
            },
            {
                name: "Clerk",
                color: "orange-text-gradient",
            },
        ],
        image: Nexus,
        source_code_link: "https://github.com/TheChiragKhaitan/Nexus",
        live_link: "https://nexus-chirag-khaitan.vercel.app",
    },
    {
        name: "Rocket Rush",
        description:
            "Rocket Rush is a thrilling web game inspired by the classic 'Space Impact'. Control your rocket using hand gestures, avoid meteors, and enjoy immersive sound effects.",
        tags: [
            {
                name: "NextJs 14",
                color: "blue-text-gradient",
            },
            {
                name: "MediaPipe",
                color: "green-text-gradient",
            },
            {
                name: "Tone.js",
                color: "pink-text-gradient",
            },
            {
                name: "Tailwind",
                color: "orange-text-gradient",
            },
        ],
        image: RocketRush,
        source_code_link: "https://github.com/TheChiragKhaitan/Rocket-Rush",
        live_link: "https://rocket-rush-chirag-khaitan.vercel.app",
    },
    {
        name: "ChatBuddy",
        description:
            "ChatBuddy is a real-time chat application built using various technologies to provide a seamless and engaging user experience for chatting with friends.",
        tags: [
            {
                name: "NextJs 14",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "Pusher",
                color: "pink-text-gradient",
            },
            {
                name: "Upstash",
                color: "orange-text-gradient",
            },
        ],
        image: Chatbuddy,
        source_code_link: "https://github.com/TheChiragKhaitan/ChatBuddy",
        live_link: "https://chatbuddy-chirag-khaitan.vercel.app",
    },
    {
        name: "React-Fresh-Toast",
        description:
            "React-Fresh-Toast is a npm package that allows you to add toast/notifications to your web application with ease. No more nonsense!",
        tags: [
            {
                name: "Typescript",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
            {
                name: "Rollup",
                color: "orange-text-gradient",
            },
        ],
        image: npm,
        source_code_link: "https://github.com/TheChiragKhaitan/react-fresh-toast",
        live_link: "https://www.npmjs.com/package/react-fresh-toast",
    },
    {
        name: "Ecommerce Website",
        description:
            "This comprehensive E-Commerce Website offers user authentication, a shopping cart, search functionality with category filters, an admin panel for product and category management.",
        tags: [
            {
                name: "MERN Stack",
                color: "blue-text-gradient",
            },
            {
                name: "ContextAPI",
                color: "green-text-gradient",
            },
            {
                name: "Vercel",
                color: "pink-text-gradient",
            },
        ],
        image: Ecommerce,
        source_code_link: "https://github.com/TheChiragKhaitan/Ecommerce",
        live_link: "https://chirag-khaitan-ecommerce.vercel.app",
    },
    
    {
        name: "SpeakEasy",
        description:
            "SpeakEasy is a user-friendly text-to-speech web app that converts written text into natural-sounding speech with various voice options.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
            {
                name: "Netlify",
                color: "orange-text-gradient",
            },
        ],
        image: Speakeasy,
        source_code_link: "https://github.com/TheChiragKhaitan/SpeakEasy",
        live_link: "https://speakeasy-chirag-khaitan.netlify.app",
    },
];

export { services, technologies, experiences, testimonials, projects };