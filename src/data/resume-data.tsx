import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  NordLayerLogo,
  NordSecurityLogo,
  NexenioLogo,
  HPILogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Marvin Gorecki",
  initials: "MG",
  location: "Berlin, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Berlin",
  about:
    "Frontend Engineer focused on building accessible user interfaces with extra attention to UX",
  summary:
    "As a Frontend Engineer and Technical Lead, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/6815357?v=4",
  personalWebsiteUrl: "https://gorecki.cc",
  contact: {
    email: "marvin@gorecki.cc",
    tel: "+491774424396",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/slayerpart",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "www.linkedin.com/in/marvin-go",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Hasso Plattner Institute",
      degree: "IT Systems Engineering M.Sc.",
      grade: "discontinued",
      focus: "Information security",
      start: "2019",
      end: "2021",
    },
    {
      school: "Hasso Plattner Institute",
      degree: "IT Systems Engineering B.Sc.",
      grade: "1.5",
      start: "2013",
      end: "2017",
    },
    {
      school: "Albert-Schweitzer-Gymnasium",
      degree: "A-Levels",
      grade: "1.3",
      start: "2010",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Nord Security",
      link: "https://nordsecurity.com",
      badges: [],
      title: "Technical Lead",
      logo: NordSecurityLogo,
      start: "12/2022",
      end: "now",
      description:
        "Accountable for technical product decisions, led team of 3 FE engineers and came up with their individual development plans, improved core web vitals of various web apps, sped up CI pipelines and introduced automated transitive dependency vulnerability detection.",
      technologies: [
        "React",
        "TypeScript",
        "React Query",
        "Styled Components",
        "Cypress",
        "Gitlab CI",
      ],
    },
    {
      company: "Nord Security",
      link: "https://nordsecurity.com",
      badges: [],
      title: "Senior Frontend Engineer",
      logo: NordSecurityLogo,
      start: "04/2022",
      end: "12/2022",
      description:
        "Implemented new product features, design system and worked on improving the way developers ship the code. Taught advanced TypeScript concepts to colleagues.",
      technologies: [
        "React",
        "TypeScript",
        "React Query",
        "Styled Components",
        "Cypress",
        "Gitlab CI",
      ],
    },
    {
      company: "neXenio",
      link: "https://nexenio.com",
      badges: [],
      title: "Senior Frontend Engineer",
      logo: NexenioLogo,
      start: "04/2020",
      end: "03/2022",
      description: "",
      technologies: [
        "React",
        "TypeScript",
        "Redux",
        "Redux Saga",
        "Styled Components",
        "Jenkins",
      ],
    },
    {
      company: "neXenio",
      link: "https://nexenio.com",
      badges: [],
      title: "Frontend Engineer",
      logo: NexenioLogo,
      start: "04/2017",
      end: "03/2020",
      description: "",
      technologies: [
        "React",
        "TypeScript",
        "Redux",
        "Redux Saga",
        "Styled Components",
        "Jenkins",
      ],
    },
    {
      company: "Inspora",
      link: "https://inspora.com",
      badges: [],
      title: "Junior Frontend Engineer",
      start: "04/2016",
      end: "03/2017",
      description:
        "Developed and maintained internal internal tool to leverage machine learning algorithms with tagged input data",
      technologies: ["React", "Flow", "Redux", "Styled Components"],
    },
    {
      company: "Information Systems Research Group",
      link: "https://hpi.de/naumann/home.html",
      badges: [],
      title: "Student Assistant",
      logo: HPILogo,
      start: "04/2014",
      end: "03/2016",
      description:
        "Implement an automated data scraping and aggregation system integrating multiple heterogeneous public data sets to uncover the bigger picture.",
      technologies: ["React.js", "Python", "Scrapy", "AWS"],
    },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description:
    //     "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Creating and testing software for LTE base stations",
    // },
  ],
  certificates: [
    {
      title: "Certified Professional for Usability Engineering",
      id: "210255",
      url: "https://uxqcc.com/uxcertifications/foundation-level/",
      verification: {
        url: "https://www.gasq.org/en/certification/check-a-certificate.html",
        details: "Number of Certificate: 210255, Last Name: Gorecki",
      },
      badges: ["Foundation Level"],
      institution: "UXQCC - User Experience Quality Certification Center",
      year: "2021",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React/Next.js",
    "Redux",
    "React Query",
    "Node.js",
    "Webpack",
    "Vite",
    "Jest",
    "RTL",
    "CI/CD",
  ],
  projects: [
    {
      title: "NordLayer",
      techStack: ["TypeScript", "Vite", "Vitest", "Cypress", "RTL"],
      description: "A platform to build and grow your online business",
      logo: NordLayerLogo,
      link: {
        label: "nordlayer.com",
        href: "https://nordlayer.com/",
      },
    },
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //   ],
    //   description: "A platform to build and grow your online business",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
    // {
    //   title: "Monito",
    //   techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
    //   description:
    //     "Browser extension that records everything happening in a web application",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "monito.dev",
    //     href: "https://monito.dev/",
    //   },
    // },
    // {
    //   title: "Jarocki.me",
    //   techStack: ["Side Project", "Next.js", "MDX"],
    //   description:
    //     "My personal website and blog. Built with Next.js and Notion API",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://jarocki.me/",
    //   },
    // },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
