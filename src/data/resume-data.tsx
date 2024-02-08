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
  BdriveLogo,
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
      url: "https://hpi.de/en/",
      logo: HPILogo,
      degree: "IT Systems Engineering M.Sc.",
      grade: "discontinued",
      focus: "Information security",
      start: "2019",
      end: "2021",
    },
    {
      school: "Hasso Plattner Institute",
      logo: HPILogo,
      url: "https://hpi.de/en/",
      degree: "IT Systems Engineering B.Sc.",
      grade: "1.5",
      start: "2013",
      end: "2017",
    },
    {
      school: "Albert-Schweitzer-Gymnasium",
      url: "https://www.asg-ehst.de/",
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
      technologies: ["Python", "Scrapy", "AWS", "React"],
    },
  ],
  certificates: [
    {
      title: "Certified Professional for Usability Engineering",
      abbreviation: "CPUE",
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
    "Next.js",
    "React",
    "Redux",
    "React Query",
    "Node.js",
    "Webpack",
    "Vite",
    "Jest",
    "RTL",
    "Storybook",
    "Cypress",
    "Core Web Vitals",
    "CI/CD",
  ],
  projects: [
    {
      title: "NordLayer",
      logo: NordLayerLogo,
      description:
        "NordLayer provides flexible and easy-to-implement cybersecurity tools for a business of any size or work model.",
      techStack: [
        "TypeScript",
        "React",
        "React Query",
        "Vite",
        "Vitest",
        "Cypress",
        "RTL",
        "Storybook",
      ],
      link: {
        label: "nordlayer.com",
        href: "https://nordlayer.com/",
      },
    },
    {
      title: "Bdrive",
      logo: BdriveLogo,
      description:
        "Bdrive uses high-end encryption and fragmentation (RAID-technology) to securely store and share documents.",
      techStack: [
        "TypeScript",
        "WebAssembly",
        "React",
        "Redux",
        "Redux Saga",
        "Webpack",
        "Jest",
        "Cypress",
        "RTL",
      ],
      link: {
        label: "Bdrive Security Whitepaper",
        href: "https://www.datocms-assets.com/9477/1574811850-bdrive-security-whitepaper-en.pdf",
      },
    },
  ],
} as const;
