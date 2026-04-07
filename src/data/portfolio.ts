export const profileData = {
  name: "吉野 琴音",
  nameEn: "Kotone Yoshino",
  title: "Software Engineer",
  catchphrase: "ユーザー体験を大切にするエンジニア",
  introduction:
    "北海道情報専門学校卒業後、日本アイ・ビー・エムデジタルサービスにて金融系システム開発やモバイルアプリ開発・QAに従事。チームワークを重視し、品質の高いプロダクト作りに貢献しています。",
  currentPosition: "日本アイ・ビー・エムデジタルサービス（2023年4月〜）",
  education: "北海道情報専門学校（2023年3月卒業）",
};

export const aboutData = {
  summary:
    "2023年に北海道情報専門学校を卒業後、日本アイ・ビー・エムデジタルサービスに入社。金融系基幹システムの開発から、モバイルアプリの開発まで幅広い経験を積んできました。特にアジャイル開発やスクラムに興味があり、認定スクラムマスター資格を取得しています。",
  strengths: [
    "金融系システム開発の経験",
    "モバイルアプリ（Android/iOS）の開発経験",
    "アジャイル/スクラム開発の実践経験",
    "AWSクラウド基盤の知識",
  ],
};

export const skillsData = {
  languages: [
    { name: "Java", level: 80 },
    { name: "Kotlin", level: 70 },
    { name: "Spring Boot", level: 60 },
    { name: "Python", level: 60 },
    { name: "JavaScript", level: 60 },
  ],
  databases: [
    { name: "DB2", level: 70 },
    { name: "PostgreSQL", level: 60 },
  ],
  mobile: [
    { name: "Android", level: 70 },
    { name: "iOS", level: 60 },
  ],
  infrastructure: [
    { name: "AWS", level: 70 },
    { name: "Docker", level: 60 },
    { name: "Podman", level: 50 },
  ],
  tools: ["Git", "Jenkins", "Jira", "Confluence", "Monday", "Firebase", "ProxyMan"],
};

export const certificationsData = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "aws",
  },
  {
    name: "Certified Scrum Master (CSM)",
    issuer: "Scrum Alliance",
    icon: "scrum",
  },
  {
    name: "基本情報技術者",
    issuer: "IPA",
    icon: "ipa",
  },
];

export const projectsData = [
  {
    title: "モバイルアプリQA",
    period: "2025年10月〜現在",
    client: "大手クレジットカード会社向け",
    description:
      "金融系モバイルアプリのQAを担当。3Dセキュア・FIDO認証など高セキュリティ要件の機能を中心にテストを実施。",
    technologies: ["Android", "iOS", "Jira", "Confluence", "Monday", "ProxyMan"],
    role: "QAエンジニア",
  },
  {
    title: "Androidアプリ開発",
    period: "2025年5月〜2025年10月",
    client: "大手リテール企業向け",
    description:
      "2,000万DL超の大規模リテールアプリの開発に参加。Kotlin/MVVM/Clean Architectureを採用し、GAM広告連携・Beacon機能の実装を担当。UI/UX改善に貢献。",
    technologies: ["Kotlin", "Android", "Firebase", "Git"],
    role: "開発メンバー",
  },
  {
    title: "Androidアプリ開発",
    period: "2024年12月〜2025年4月",
    client: "家族向け見守りアプリ",
    description:
      "家族向け見守りアプリのAndroid開発を担当。Kotlin/MVVM/Clean Architectureを採用し、位置情報共有・プッシュ通知・チャット機能の実装を担当。UI/UX改善に貢献。",
    technologies: ["Kotlin", "Android", "Firebase", "Git"],
    role: "開発メンバー",
  },
  {
    title: "モバイルアプリQA",
    period: "2024年9月〜2024年11月",
    client: "家族向け見守りアプリ",
    description:
      "家族向け見守りアプリのQAを担当。",
    technologies: ["Android", "iOS", "Jira", "Confluence", "Monday", "ProxyMan"],
    role: "QAエンジニア",
  },
  {
    title: "勘定系Java開発",
    period: "2023年6月〜2024年8月",
    client: "大手メガバンク向け",
    description:
      "銀行の勘定系システムにおいて、基本設計から詳細設計・実装・テストまで一貫して担当。ホスト連携部品の開発や基盤構築に従事し、大規模金融システムの品質向上に貢献。",
    technologies: ["Java", "Spring Boot", "Jenkins","DB2", "Git"],
    role: "開発メンバー",
  },
];

export const contactData = {
  email: "vrkotoneyoshino23@gmail.com",
  github: "https://github.com/SnowyMontBlanc",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
