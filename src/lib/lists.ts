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

type presentation_type = experience_type & {
  text: string;
  link: string;
};

type project_type = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

type community_type = experience_type & {
  text: string;
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
    link: "https://github.com/viiccwen/neoAcademy/",
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
    title: "Software Engineering Practice Award",
    subtitle: "2025 Coding 101",
    period: "Mar 2025",
    logo: "/coding101.png",
  },
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

export const community_list: community_type[] = [
  {
    title: "GDG on Campus NTUST",
    subtitle: "Lead",
    text: "Google Developer Groups Community",
    link: "https://gdg.community.dev/gdg-on-campus-national-taiwan-university-of-science-and-technology-taipei-taiwan/",
    period: "Sep 2024 - June 2025",
    logo: "/GDGC_NTUST.jpg",
  },
  {
    title: "Computer Science Student Association",
    subtitle: "Lead",
    text: "Instagram",
    link: "https://instagram.com/ntustcsie/",
    period: "Sep 2024 - June 2025",
    logo: "/NTUST_CSIE.png",
  },
];

export const presentation_list: presentation_type[] = [
  {
    title: "SITCON",
    subtitle: "Speaker",
    text: "從『經營』到『領導』：社群領導經驗分享",
    link: "https://sitcon.org/2025/agenda/62f54e/",
    period: "Mar 2025",
    logo: "/sitcon.jpg",
  },
  {
    title: "GDG DevFest Taipei",
    subtitle: "Speaker",
    text: "Using LIT to Analyze Gemma Models in Keras.",
    link: "https://www.facebook.com/photo.php?fbid=974863934668392&id=100064343845138&set=a.464222692399188",
    period: "Nov 2024",
    logo: "/devfest.webp",
  },
  {
    title: "COSCUP",
    subtitle: "Speaker",
    text: "破除教育鴻溝：透過開源，偏鄉職生也能跳脫舒適框架",
    link: "https://coscup.org/2024/zh-TW/session/RR9NV8",
    period: "Aug 2024",
    logo: "/coscup.png",
  },
];
