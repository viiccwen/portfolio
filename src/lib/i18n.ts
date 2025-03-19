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
