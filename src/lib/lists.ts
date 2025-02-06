export const skill_list = [
  "Machine Learning",
  "Deep Learning",
  "Front-end development",
  "Back-end development",
  "Blockchain",
];

type experience_type = {
  title: string;
  subtitle: string;
  period: string;
  logo: string;
};

type project_type = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export const experience_list: experience_type[] = [
  {
    title: "Intern",
    subtitle: "Kiwis Security",
    period: "Mar 2024 - July 2024",
    logo: "/kiwissec.png",
  },
];

export const education_list: experience_type[] = [
  {
    title: "National Taiwan University of Science and Technology",
    subtitle: "Bachelor of Science in Computer Science",
    period: "Sep 2023 - June 2027",
    logo: "/ntust.png",
  },
];

export const project_list: project_type[] = [
  {
    title: "PartyTimes",
    description:
      "A web application that helps users to arrange their meeting, party schedules.",
    imageUrl: "/partytimes.jpg",
    link: "https://partytimes.org/",
  },
  {
    title: "NeoAcademy AI",
    description:
      "An AI-powered platform that helps students to learn knowledge more effectively.",
    imageUrl: "/neoacademy.jpg",
    link: "https://neoacademy.vicwen.app/",
  },
  {
    title: "Emoji Store",
    description:
      "A NFT marketplace that allows users to buy and sell emojis based on Ethereum.",
    imageUrl: "/emoji-store.png",
    link: "https://emoji-store.vicwen.app/",
  },
  {
    title: "GPA Calculator",
    description:
      "A web application that helps students to calculate their GPA easily.",
    imageUrl: "/gpa-calculator.png",
    link: "https://gpa-calculator.vicwen.app/",
  },
];

export const honor_list: experience_type[] = [
  {
    title: "5th",
    subtitle: "2023 ITSA National Software Development Contest",
    period: "Dec 2023",
    logo: "/itsa.png",
  },
  {
    title: "Outstanding Youth",
    subtitle: "National Taiwan University of Science and Technology",
    period: "Dec 2024",
    logo: "/ntust.png",
  },
];

export const techstack_list = [
  { name: "Nextjs", logo: "/nextjs.png" },
  {
    name: "TypeScript",
    logo: "/typescript.png",
  },
  {
    name: "javascript",
    logo: "/javascript.png",
  },
  {
    name: "fastapi",
    logo: "/fastapi.png",
  },
  {
    name: "prisma",
    logo: "/prisma.png",
  },
  {
    name: "postgresql",
    logo: "/postgresql.png",
  },
  {
    name: "mysql",
    logo: "/mysql.svg",
  },
  {
    name: "mongodb",
    logo: "/mongo_db.png",
  },
  {
    name: "python",
    logo: "/python.png",
  },
  {
    name: "langchain",
    logo: "/langchain.jpg",
  },
  {
    name: "wagmi",
    logo: "/wagmi.png",
  },
  {
    name: "docker",
    logo: "/docker.png",
  },
  {
    name: "github-actions",
    logo: "/github-actions.png",
  },
];

export const community_list: experience_type[] = [
  {
    title: "Lead",
    subtitle: "GDG on Campus NTUST",
    period: "Sep 2024 - June 2025",
    logo: "/GDGC_NTUST.jpg",
  },
  {
    title: "Lead",
    subtitle: "Computer Science Student Association",
    period: "Sep 2024 - June 2025",
    logo: "/NTUST_CSIE.png",
  },
];

export const presentation_list: experience_type[] = [
  {
    title: "SITCON",
    subtitle: "Speaker",
    period: "Mar 2025",
    logo: "/sitcon.jpg",
  },
  {
    title: "GDG DevFest Taipei",
    subtitle: "Speaker",
    period: "Nov 2024",
    logo: "/devfest.webp",
  },
  {
    title: "COSCUP",
    subtitle: "Speaker",
    period: "Aug 2024",
    logo: "/coscup.png",
  },
];
