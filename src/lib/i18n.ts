import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Kiwis Security": "Kiwis Security",
    },
  },
  "zh-TW": {
    translation: {
      "Kiwis Security": "七維思資安",
      ABOUT: "關於",
      SKILLS: "技能",
      EXPERIENCE: "經驗",
      PROJECT: "專案",
      EDUCATION: "教育背景",
      HONOR: "榮譽",
      COMMUNITY: "社群",
      PRESENTATION: "演講",
      "I am Vic Wen, a passionate Software Engineer residing in the city of Taipei, Taiwan. My expertise lies at the intersection of software development and community building. I am currently expanding my skills in Machine Learning /Deep Learning.":
        "我是 Vic Wen，一位對軟體開發和社群經營有熱忱的軟體工程師。除了全端開發外，現在正擴展自己的技能樹至機器學習、深度學習領域！",
      "I am always open to new opportunities and collaborations. Feel free to reach out—let’s connect and grow together! 🚀":
        "我一直對新機會和合作機會持開放態度。歡迎與我 connect！🚀",
      Intern: "實習生",
      "National Taiwan University of Science and Technology":
        "國立臺灣科技大學",
      "Software Engineering Practice Award": "軟體工程實踐獎",
      "2025 Coding 101": "2025 Coding 101 大學軟體創作競賽",
      "5th": "第五名",
      "2023 ITSA National Software Development Contest":
        "2023 ITSA 全國大專程式設計極客挑戰賽",
      "Outstanding Youth": "第十九屆校園傑出青年",
      "Bachelor of Science in Computer Science": "資訊工程系學士",
      "Computer Science Student Association": "資訊工程學系學生會",
      PartyTimes: "PartyTimes 都不揪？",
      "NeoAcademy AI": "NeoAcademy AI",
      "GPA Calculator": "GPA 計算機",
      "Emoji Store": "Emoji Store",
      "A web application that helps users to arrange their meeting, party schedules.":
        "幫助使用者輕鬆安排多人會議、派對行程，讓你不再為找不到時間、溝通成本而煩惱！",
      "An AI-powered platform that helps students to learn knowledge more effectively.":
        "一個 AI 驅動的學習平台，幫助學生更有效率地學習知識以及分析學習狀況。",
      "A web application that helps students to calculate their GPA easily.":
        "提供 GPA 計分方式以及幫助學生輕鬆計算自己的 GPA，目前僅支援 GPA 4.3 制。",
      "A NFT marketplace that allows users to buy and sell emojis based on Ethereum.":
        "基於 Ethereum 的 NFT 基礎買賣網站，讓使用者可以買賣自己的 Emoji。",
      "Click to view": "查看",
      "CV (Mandarin)": "履歷 (中文)",
      "CV (English)": "履歷 (英文)",
      "Utilized PHP, JavaScript, MySQL, and Burp Suite to design real-world web application vulnerabilities. Created attack scenarios to showcase how these vulnerabilities are exploited.":
        "運用 PHP、JavaScript、MySQL 與 Burp Suite 等工具設計網頁安全漏洞。",
      "Developed over five entry-to-intermediate level web penetration testing courses. Each course included handson labs that covered key topics such as network security, session management flaws, and web application firewall bypass techniques, ensuring students received practical exposure to web security challenges.":
        "協助開發並測試網頁滲透測試課程，涵蓋網頁安全、資料庫漏洞主題知識和攻擊環境。",
      "Currently pursuing a second year in the Department of Computer Science and Information Engineering, with a GPA of 4.20/4.30, ranking third in the department (Top 5%).":
        "目前就讀於資訊工程學系二年級，GPA 為 4.20/4.30，為系上第三名（Top 5%）。",
      "Delivered an AI-Workshop at DevFest Taipei 2024, teaching LIT to analyze gemma model in keras.":
        "擔任 2024 DevFest Taipei AI 工作坊講者，主題為：「Using LIT to analyze gemma models in keras」。",
      "Sharing fundamental knowledge and applications of ML/DL, Frontend, Backend, Google Cloud, Linux, Git.":
        "帶領社員學習 ML/DL、前後端開發、Google Cloud、Linux 與 Git 等知識及應用。",
      "Developed an AI-powered full-stack learning platform using React.js, TypeScript, TailwindCSS, Express.js, MongoDB, and Langchain, enabling personalized quizzes and adaptive learning recommendations.":
        "開發結合 AI 應用的全端學習平台，使用 React.js、TypeScript、TailwindCSS、Express.js、MongoDB 和 Langchain 等技術，實現個性化測驗和適應性學習建議。",
      "Implemented CI/CD pipelines with GitHub Actions and Docker, integrating and deploying the application as Docker image on Zeabur for seamless and scalable hosting.":
        "使用 GitHub Actions 和 Docker 實現 CI/CD Pipeline，將應用程序部署為 Docker 映像，實現無縫且可擴展的部署。",
      "Collaborated with a team using Git and GitHub for version control, ensuring efficient code management and smooth project coordination throughout the development lifecycle.":
        "與團隊使用 Git 和 GitHub 進行版本控制，確保高效程式碼管理及項目開發過程順利進行。",
      "Leading a team of 10+ members to organize events and activities for the Computer Science Department.":
        "帶領超過 10 位系學會幹部籌備跨系、跨校之中小型活動。",
      "Organizing events such as hackathons, workshops with GDG On Campus NTUST to promote technical skills and teamwork.":
        "與 GDG On Campus NTUST 合作，籌辦黑客松、工作坊等活動，推廣技術知識。",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "zh-TW",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
