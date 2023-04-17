import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About me",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Team Manager",
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
      title: "UX / UI Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Project Manager",
      company_name: "Swing28",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2014 - Jul 2022",
      points: [
        "Experience leading teams to develop +150 IT projects, including extranets, e-commerce, websites and databases migrations.",
        "Developing and maintaining webs/software using different technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Chief Operating Officer",
      company_name: "Square Foundation",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Nov 2014 - Jul 2022",
      points: [
        "Development of +20 social and environmental innovation projects aligned with the United Nations and the Sustainable Development Goals.",
        "Projects with a global vision: more than 30 countries in the 5 continents.",
        "+25 national and international awards, including the Gold Medal to the Civil Merit.",
        "+18 Million of food rations distributed to families in need, including Ukrainian War, Sirian Earhquakes and other 15 countries.",
        "+180.000 trees planted to reduce carbon footprint of companies with sense.",
      ],
    },
  ];
  
  const courses = [
    {
      course: "Agile & Scrum",
      center: "Coursera",
      year: "2023",
    },
    {
      course: "MongoDB Course",
      center: "Codecademy",
      year: "2023",
    },
    {
      course: "Web Development",
      center: "Mimo_dev",
      year: "2023",
    },
    {
      course: "SQL Management",
      center: "Mimo_dev",
      year: "2023",
    },
    {
      course: "Complete Web Developer",
      center: "Zero to Mastery Academy",
      year: "2022",
    },
    {
      course: "MBA",
      center: "EUDE",
      year: "2012",
    },
    {
      course: "Master in Marketing",
      center: "EUDE",
      year: "2013",
    },
    {
      course: "Bachelor's Degree",
      center: "La Laguna University",
      year: "2007",
    },
  ];
  
  const projects = [
    {
      name: "Bank Apps + Main Site",
      description:
        "Web-based platform that allows users to access their banking accounts, providing a convenient and efficient solution for finance needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.bancopichincha.es/",
    },
    {
      name: "Architects Extranet",
      description:
        "Web application with extranet, that enables users to search for architect and design projects, download content and save it in their own repository.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://thus-newswire.com/",
    },
    {
      name: "Interactive Startup Site",
      description:
        "Website development, differentiating itself from their competitors with a careful, innovative & powerful image, improving UX for a cibersecurity and AI startup.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "ux design",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://cibinar.com/en/",
    },
  ];
  
  export { services, technologies, experiences, courses, projects };