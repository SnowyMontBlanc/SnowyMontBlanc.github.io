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
    "2023年に北海道情報専門学校を卒業後、日本アイ・ビー・エムデジタルサービスに入社。金融系基幹システムの開発から、モバイルアプリのQA・開発まで幅広い経験を積んできました。特にアジャイル開発やスクラムに興味があり、認定スクラムマスター資格を取得しています。",
  strengths: [
    "金融系システム開発の経験",
    "モバイルアプリ（Android/iOS）のQA・開発経験",
    "アジャイル/スクラム開発の実践経験",
    "AWSクラウド基盤の知識",
  ],
};

export const skillsData = {
  languages: [
    { name: "Java", level: 80 },
    { name: "Kotlin", level: 70 },
    { name: "Python", level: 60 },
    { name: "JavaScript", level: 60 },
  ],
  databases: [
    { name: "DB2", level: 70 },
    { name: "PostgreSQL", level: 60 },
  ],
  infrastructure: [
    { name: "AWS", level: 70 },
    { name: "Docker", level: 60 },
    { name: "Podman", level: 50 },
  ],
  tools: ["Git", "Jenkins", "Jira", "Confluence", "Monday", "Firebase"],
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
      "金融系モバイルアプリのQAを担当。12名のQAチームでiOS/Android両プラットフォームのテストを実施。決済機能の正確性とセキュリティ要件の両面から品質を検証し、安全なリリースに貢献。",
    technologies: ["Android", "iOS", "Jira", "Confluence", "Monday"],
    role: "QAエンジニア",
  },
  {
    title: "Androidアプリ開発",
    period: "2025年5月〜2025年10月",
    client: "大手リテール企業向け",
    description:
      "2,000万DL超の大規模リテールアプリの開発に参加。Kotlin/MVVM/Clean Architectureを用いて3〜5機能のUI実装・API連携を担当。6名のAndroidチームでコードレビューを通じて品質の高い実装を実現。",
    technologies: ["Kotlin", "Android", "Firebase", "Git"],
    role: "開発メンバー",
  },
  {
    title: "モバイルアプリQA",
    period: "2024年9月〜2025年4月",
    client: "家族向け見守りアプリ",
    description:
      "家族向け見守りアプリのQAを担当。2名体制でiOS/Android両プラットフォームをカバーし、1スプリントあたり50件以上のテストケースを作成し、アプリ品質の向上に貢献。",
    technologies: ["Android", "iOS", "Jira", "Confluence", "Monday"],
    role: "QAエンジニア",
  },
  {
    title: "勘定系Java開発",
    period: "2023年6月〜2024年8月",
    client: "大手メガバンク向け",
    description:
      "銀行の勘定系システムにおいて、基本設計から詳細設計・実装・テストまで一貫して担当。ホスト連携部品の開発や基盤構築に従事し、大規模金融システムの品質向上に貢献。",
    technologies: ["Java", "DB2", "Git"],
    role: "開発メンバー",
  },
];

export const contactData = {
  email: "kotoneyoshino23@gmail.com",
  github: "https://github.com/SnowyMontBlanc",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
