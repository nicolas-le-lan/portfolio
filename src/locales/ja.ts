import type { PortfolioContent } from '../types';

export const ja: PortfolioContent = {
  // --- PORTFOLIO SECTION ---
  meta: { date: "2025年12月" },
  nav: { 
    home: "ホーム", 
    projects: "プロジェクト", 
    skills: "スキル", 
    education: "経歴", 
    contact: "コンタクト", 
    role: "サイバーセキュリティ・エンジニア（インターン）" 
  },
  hero: {
    title: "ニコラ・ル・ラン",
    subtitle: "明日のデジタル社会を守る",
    desc: "ESIEA（エシエア）でサイバーセキュリティを専攻するエンジニア学生です。インフラ防衛とインシデントレスポンスの専門知識を深めています。EDFおよびSNS Solutionsでの経験を活かし、技術力と国際的な適応力を兼ね備えています。2026年4月からの4ヶ月インターンシップを探しています。",
    cta: "プロジェクトを見る",
    contact: "連絡する"
  },
  sectionTitles: { 
    summary: "ホーム",
    about: "私について",
    projects: "プロジェクト", 
    skills: "技術スキル", 
    education: "学歴", 
    interests: "趣味・関心", 
    context: "背景", 
    objectives: "目的",
    process: "アルゴリズムとプロセス",
    results: "成果・アウトプット", 
    back: "戻る",
    moreInfo: "詳細情報",
    conclusion: "展望",
    softSkills: "ソフトスキル",
    projection: "キャリア目標"
  },
  aboutMe: {
    title: "エージェントについて",
    text: [
      "幼い頃からITに情熱を注ぎ、情報システムの保護と重要インフラの強靭化にキャリアを定めています。",
      "私のアプローチは実践的です。攻撃経路を理解し、堅牢な防衛を構築します。「セキュリティ・バイ・デザイン」の設計と、脅威に直面した際の運用継続性の確保に努めています。"
    ],
    stats: [
      { label: "年齢", value: "24歳" },
      { label: "経験", value: "3年" },
      { label: "ミッション", value: "EDF / SNS" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "インシデントレスポンス & フォレンジック",
      company: "SNS Security チャレンジ",
      tags: ["フォレンジック", "Wireshark", "危機管理"],
      shortDesc: "システム侵害後のデジタル調査（フォレンジック）の完全シミュレーション。",
      iconName: 'shield',
      context: "企業インフラへの重大な侵入を引き起こした架空のフィッシング攻撃の分析。",
      objectives: "感染経路の特定、攻撃者のラテラルムーブメント（横断的侵害）の追跡、および侵害指標（IoC）の抽出。",
      process: [
        "ログとメモリダンプの詳細分析による悪意あるプロセスの隔離。",
        "Wiresharkを使用したネットワークセッションの再構築によるデータ流出の把握。",
        "ペイロード（マルウェア）および感染の「ペイシェント・ゼロ（発端）」の特定。"
      ],
      results: [
        "攻撃経路を正式に特定し、脅威を封じ込め。",
        "推奨事項を含む完全な技術調査報告書の作成。",
        "時間制約下での診断方法論の最適化。"
      ]
    },
    {
      id: 2,
      title: "産業システムの仮想化",
      company: "EDF - 原子力部門 (DIPDE)",
      tags: ["VirtualBox", "OTセキュリティ", "サンドボックス"],
      shortDesc: "ソフトウェアのプレデプロイメント（事前展開）用の仮想化された「本番同等」環境の作成。",
      iconName: 'server',
      context: "原子力発電所エンジニアリング部門でのミッション。本番稼働前にCADチェーンのソフトウェア更新を安全に行う必要性。",
      objectives: "CADチェーンを忠実に再現した仮想サンドボックスを設計し、プレデプロイメント段階での変更検証を行う。",
      process: [
        "既存の物理ハードウェアおよびソフトウェア構成の監査。",
        "重要マシンとネットワークフローを含む「ミラー」インフラをVirtualBox上に展開。",
        "エンジニアリングチームによるサンドボックス利用のための運用手順書の作成。"
      ],
      results: [
        "運用可能なプレデプロイメント環境の納品と採用。",
        "隔離されたサンドボックス・テストによる更新サイクルの安全性確保。",
        "検証ツールの長期利用を保証する構造化された技術文書。"
      ]
    },
    {
      id: 3,
      title: "住宅用熱最適化",
      company: "ESIEA プロジェクト (CAP Project)",
      tags: ["Flutter", "アルゴリズム", "UI/UX"],
      shortDesc: "エネルギー効率のための最適なラジエーター配置を支援するアプリ。",
      iconName: 'cpu',
      context: "潜在顧客の熱的快適性と省エネ問題に対応するグループプロジェクト。",
      objectives: "住宅内の熱源（ヒーター等）の理想的な配置場所を決定するソフトウェアソリューションの開発。",
      process: [
        "主要機能を定義するための潜在顧客からの要件収集と分析。",
        "空間的制約と熱損失に基づく配置アルゴリズムの開発。",
        "アパートや家をモデリングするためのFlutterを使用したモバイルインターフェースの設計。",
        "暖房設定を保存するためのデータ永続化の実装。"
      ],
      results: [
        "最適な配置を明確に可視化できる機能的なモバイルアプリケーション。",
        "使いやすさに関してテストユーザーから高く評価された直感的なインターフェース。",
        "技術要件および市場の期待に対するアルゴリズムの検証。"
      ]
    }
  ],
  education: [
    { school: "ESIEA パリ", degree: "エンジニアリング修士 - サイバーセキュリティ専攻", date: "2024 - 2027", location: "パリ", desc: "セキュアアーキテクチャ、暗号技術、ネットワーク管理、プロジェクトマネジメント。" },
    { school: "ソウル科学技術大学", degree: "交換留学", date: "2024", location: "韓国、ソウル", desc: "バックエンド開発（サーバーサイド）、データベース、Python。多文化体験。" },
    { school: "ベジエ工科短期大学 (IUT)", degree: "ネットワーク・通信工学 学士（セキュリティ専攻）", date: "2022 - 2024", location: "ベジエ", desc: "情報システムセキュリティ、Ciscoネットワーク管理、フォレンジック、FTTH展開。" },
    { school: "ITスライゴ", degree: "交換留学", date: "2022", location: "アイルランド、スライゴ", desc: "技術英語、データ分析、UX/UIデザイン。" },
    { school: "EPITA リヨン", degree: "工学準備課程", date: "2019 - 2022", location: "リヨン", desc: "応用数学、アルゴリズム (C)、物理学、電子工学。" }
  ],
  certifications: [
    { name: "Stormshield Network Administrator (SNA)", issuer: "Stormshield" }
  ],
  interests: [
    { name: "ボルダリング", iconName: "mountain" },
    { name: "旅行 (アジア、ヨーロッパ、アメリカ)", iconName: "plane" },
    { name: "ボランティア (フードバンク)", iconName: "heart" }
  ],
  skillsCategory: { languages: "語学", tools: "技術ツール", network: "主要スキル" },
  languages: [
    { name: "フランス語", level: "ネイティブ" },
    { name: "英語", level: "ビジネスレベル (B2/TOEIC 850)" },
    { name: "スペイン語", level: "日常会話レベル (B1)" },
    { name: "日本語", level: "初級 (A2)" }
  ],
  conclusion: {
    softSkillsList: [
      { title: "適応力", desc: "韓国とアイルランドでの学術的・文化的な没入経験により実証済み。" },
      { title: "分析的思考", desc: "フォレンジックの実践、ログ分析、複雑なインシデント解決を通じて開発。" },
      { title: "チームワーク", desc: "大規模な共同プロジェクト（IoT、ゲーム開発）や企業経験を通じて強化。" }
    ],
    projectionText: "純粋な技術と企業の戦略的課題との架け橋となれる、実践的なサイバーセキュリティエンジニアを目指しています。ビジネス部門のパートナーでありながら、「セキュリティ・バイ・デザイン」のアーキテクチャを設計することが私の目標です。"
  },
  footer: {
    desc: "サイバーセキュリティエンジニア（研修中）。インフラ保護、インシデントレスポンス、フォレンジックを専門としています。",
    linksTitle: "ナビゲーション",
    sysStatusTitle: "システムステータス",
    rights: "© 2025 Nicolas LE LAN. All rights reserved.",
    operational: "インターン可能 (2026年4月)",
    secure: "システム・セキュア"
  },

  // --- RESUME SECTION ---
  resume: {
    labels: {
      download: "PDFとして保存 / 印刷",
      back: "ポートフォリオに戻る",
      skills: "技術スキル",
      langs: "語学",
      exp: "職歴",
      edu: "学歴",
      interests: "趣味・関心",
      contact_note: "個人情報保護のため詳細は省略しています。詳細はお問い合わせください。"
    },
    profile: {
      name: "ニコラ・ル・ラン",
      title: "サイバーセキュリティ・エンジニア（学生）",
      summary: "2026年4月からの4ヶ月間インターンシップを探しています。真面目で意欲的であり、チームワークを重視し、厳しい環境にも迅速に適応します。マルセイユ在住。",
      location: "フランス、マルセイユ",
      driverLicense: "運転免許 (B)"
    },
    contact: {
      linkedin_url: "https://linkedin.com/in/le-lan-nicolas",
      github_url: "https://github.com/nicolas-le-lan",
      email_placeholder: "LinkedIn経由で連絡",
      phone_placeholder: "+33 6 79 16 96 86"
    },
    skills: [
      "Office Suite", "Python", "LaTeX", "Docker", 
      "C言語", "Wireshark", "C#", "Packet Tracer", 
      "Java", "Git", "Stormshield (認定)"
    ],
    languages: [
      { name: "英語", level: "B2 (TOEIC: 850)" },
      { name: "スペイン語", level: "B1" },
      { name: "日本語", level: "A2" },
      { name: "フランス語", level: "ネイティブ" }
    ],
    experience: [
      {
        role: "ITテクニシャン",
        company: "SNS SOLUTIONS",
        location: "マルセイユ",
        date: "2024年 (インターン4ヶ月 + 契約1ヶ月)",
        details: [
          "テクニカルサポート N1: ユーザーインシデントの診断と対応。",
          "インシデント解決: リモートでのハードウェアおよびソフトウェアのトラブルシューティング。",
          "資産管理: B2Bユーザー向けに30台のワークステーション（PC/ラップトップ）の準備と展開。",
          "文書化: チケット管理ツールの使用とナレッジベースの強化。"
        ],
        tags: []
      },
      {
        role: "サイバーセキュリティ・エンジニア・アシスタント",
        company: "EDF - 原子力工学部門",
        location: "マルセイユ",
        date: "2023年 (インターン2ヶ月)",
        details: [
          "仮想化プロジェクト: 安全なテスト環境を作成するために、VirtualBox上でCADチェーンを完全に再現。",
          "技術文書: ソリューションの持続性を確保するためのインストールおよび運用手順書の作成。"
        ],
        tags: []
      }
    ],
    education: [
      {
        school: "ESIEA (エシエア) パリ",
        degree: "エンジニアリング課程 (サイバーセキュリティ専攻)",
        location: "パリ",
        date: "2024 - 2027",
        details: [
          "授業: オブジェクト指向 (Java), C, Python, Oracle SQL, サイバーセキュリティ。",
          "交換留学 (ソウル科学技術大学): バックエンド開発、データベース、Python。",
          "IoTプロジェクト (Flutter/Dart): 熱管理ソリューション、UI/UX設計。",
          "アルゴリズムプロジェクト (C): テキストアナライザー、メモリ管理。"
        ]
      },
      {
        school: "ベジエ工科短期大学 (IUT)",
        degree: "ネットワーク・通信工学 学士",
        location: "ベジエ",
        date: "2022 - 2024",
        details: [
          "授業: システムセキュリティ, Ciscoネットワーク, プロジェクト管理。",
          "SNS Security チャレンジ: フィッシングとフォレンジックのシミュレーション。",
          "FTTH展開: 光ファイバーエンジニアリング研究。"
        ]
      },
      {
        school: "EPITA (エピタ) リヨン",
        degree: "工学準備課程",
        location: "リヨン",
        date: "2019 - 2022",
        details: [
          "授業: アルゴリズム, 数学, 物理学, 電子工学。",
          "交換留学 (ITスライゴ, アイルランド): 技術英語, バックエンド, UX/UI。",
          "C/C# プロジェクト: OCR, 数独ソルバー, ゲームエンジン。"
        ]
      }
    ],
    interests: "ボランティア, ボルダリング, 旅行 (欧州, 北米, アジア)."
  }
};