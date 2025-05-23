import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Aryan Shelke",
  initials: "AS",
  avatarUrl: "/avatar.png",
  url: "https://aryanshelke.com",
  location: "Cupertino, CA",
  locationLink: "https://www.google.com/maps/place/cupertino",
  description:
    "Full Stack Web Developer and Full Time Software Engineering Student @ SJSU. I enjoy creating helpful AI tools that you could see yourself using.",
  summary:
    "After graduating from UC Davis with a Bachelor's in Computer Science, I felt lost. I questioned whether I truly loved the tech field or merely wanted financial gain like some of my peers. My past courses and projects focused on what others wanted, not what I desired. After deep reflection and self-learning, I discovered my true preferences as an engineer. I found myself liking the simplicity and productivity of high-level languages like Python and TypeScript. I also began to enjoy picking up new frameworks and libraries to build the ideal tech stack for my apps. Starting out as a standard front-end developer, I quickly delved into the realms of back-end engineering and DevOps. This way, I could bring my ideas to production on my own.",
  skills: {
    Frontend: [
      "React",
      "Next.js",
      "Javascript",
      "TypeScript",
      "NextAuth.js",
      "TailwindCSS",
      "Shadcn UI",
      "Material UI",
      "Hero UI",
    ],
    Backend: [
      "Flask",
      "FastAPI",
      "Python",
      "Node.js",
      "Express.js",
      "Prisma",
      "Postgres",
      "MongoDB",
    ],
    DevOps: ["Docker", "Kubernetes", "AWS", "Railway", "Porkbun"],
  },
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "aryan.shelke.2003@gmail.com",
    tel: "+1 (832) 618-7391",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aryansh3lke",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aryanshelke",
        icon: Icons.linkedin,

        navbar: true,
      },
      Devpost: {
        name: "Devpost",
        url: "https://devpost.com/aryan-shelke-2003",
        icon: Icons.devpost,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/aryansh3lke",
        icon: Icons.x,
        navbar: true,
      },
    },
    other: {
      Resume: {
        name: "Resume",
        url: "/Resume.pdf",
        icon: Icons.resume,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=aryan.shelke.2003@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Calendly: {
        name: "Calendly",
        url: "https://calendly.com/aryan-shelke/30min",
        icon: Icons.calendly,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "SJSU Software and Computer Engineering Society",
      href: "https://sce.sjsu.edu",
      badges: [],
      location: "Remote",
      title: "AI/ML Officer",
      logoUrl: "/experiences/sjsusce.png",
      start: "Mar 2025",
      end: "Present",
      description: [
        "Fine-tuned a ChatGPT model to output MIDI files for a GenAI app that allows musicians to accelerate their creative process by generating measures of music for different genres and time signatures",
      ],
    },
    {
      company: "#include",
      href: "https://includedavis.com",
      badges: [],
      location: "Remote",
      title: "Frontend Web Developer",
      logoUrl: "/experiences/include.png",
      start: "Oct 2021",
      end: "Apr 2022",
      description: [
        "Developed various routes for the front-end for a client Vietnamese organization and optimized the UX and loading times by leveraging Next.js and its static site generation capabilities",
        "Worked with web designers to convert Figma designs into React components and assemble the UI",
        "Built a separate full-stack recipe app with React and Node.js, integrating a public database, to simplify the search process for finding recipes and display the ingredients and instructions with an aesthetic UI built with Bootstrap",
      ],
    },
    {
      company: "YAPA Kids",
      badges: [],
      href: "https://www.yapakids.org",
      location: "Remote",
      title: "C++ Program Founder and Curriculum Lead",
      logoUrl: "/experiences/yapakids.png",
      start: "Jul 2020",
      end: "May 2021",
      description: [
        "Led a C++ program with a team of 6 high school student teachers and 3 curriculum creators",
        "Taught weekly programming classes via Zoom to 50+ middle school students during the COVID-19 pandemic",
        "Created a beginner-friendly C++ curriculum with clear explanations and examples tailored to younger students",
      ],
    },
  ],
  education: [
    {
      school: "San Jose State University",
      href: "https://www.sjsu.edu",
      degree: "M.S. Software Engineering (Data Science Specialization)",
      logoUrl: "/education/sjsu.png",
      start: "Jan 2025",
      end: "Present",
      description: [
        "Relevant Courses: Machine Learning, Artificial Intelligence & Data Engineering",
      ],
    },
    {
      school: "University of California, Davis",
      href: "https://www.ucdavis.edu",
      degree: "B.S. Computer Science",
      logoUrl: "/education/ucdavis.png",
      start: "Sept 2021",
      end: "Dec 2023",
      description: [
        "GPA: 3.93",
        "Relevant Courses: Data Structures & Algorithms, Algorithm Design & Analysis, Operating Systems, Computer Architecture, Machine Learning, Introduction to Artificial Intelligence, Web Programming, Computational Linguistics",
      ],
    },
    {
      school: "Monta Vista High School",
      href: "https://mvhs.fuhsd.org",
      degree: "High School Diploma",
      logoUrl: "/education/mvhs.png",
      start: "Aug 2017",
      end: "June 2021",
      description: [
        "GPA: 3.97",
        "Relevant Courses: AP Computer Science A, AP Statistics, AP Calculus BC, AP Physics 1",
      ],
    },
  ],
  projects: [
    {
      title: "TrendScope",
      href: "https://trendscope.fyi",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Created an AI tool to periodically webscrape the top trends on X (Twitter) and generate summaries and sentiment scores to allow Internet users to gain instant insight on current events without having to waste time doomscrolling on social media.",
      technologies: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "Python",
        "MongoDB",
        "OpenAI",
        "Selenium",
        "TailwindCSS",
        "Shadcn UI",
        "Vanta.js",
        "Docker",
        "Vercel",
        "Railway",
      ],
      links: [
        {
          type: "Website",
          href: "https://trendscope.fyi",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aryansh3lke/trendscope",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/trendscope.png",
      video: "",
    },
    {
      title: "YT Rehashed",
      href: "https://ytrehashed.com",
      dates: "June 2024 - Mar 2025",
      active: true,
      description:
        "Developed a multi-page app to allow students, researchers, and educators to save time by generating high quality summaries of videos, download videos at any available resolution, and get a credibility analysis for creators that are foreign to them.",
      technologies: [
        "React Router",
        "TypeScript",
        "Flask",
        "Python",
        "OpenAI",
        "Youtube-DL",
        "FFmpeg",
        "TailwindCSS",
        "Material UI",
        "Vercel",
        "Railway",
      ],
      links: [
        {
          type: "Website",
          href: "https://ytrehashed.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aryansh3lke/yt-rehashed",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ytrehashed.png",
      video: "",
    },
    {
      title: "AnimeRecsAI",
      href: "https://animerecom.com",
      dates: "May 2024 - Nov 2025",
      active: true,
      description:
        "Trained anime recommender systems using large Kaggle datasets and built a website to allow anime fans to receive and save their recommendations to their watchlist.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Flask",
        "Python",
        "NextAuth.js",
        "Prisma",
        "PostgreSQL",
        "Pandas",
        "Matplotlib",
        "TailwindCSS",
        "Hero UI",
        "Vercel",
        "Railway",
      ],
      links: [
        {
          type: "Website",
          href: "https://animerecom.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aryansh3lke/anime-recommender",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/animerecsai.png",
      video: "",
    },
  ],
} as const;
