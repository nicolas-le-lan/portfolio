import type { PortfolioContent } from '../types';

export const ja: PortfolioContent = {
  meta: { date: "2025年12月" },
  nav: { 
    home: "ホーム", 
    projects: "プロジェクト", 
    skills: "スキル", 
    education: "学歴", 
    contact: "お問い合わせ", 
    role: "サイバーセキュリティ・エンジニアインターン" 
  },
  hero: {
    title: "Nicolas LE LAN",
    subtitle: "次世代のデジタル世界を守る",
    desc: "ESIEA（サイバーセキュリティ専攻）のエンジニアリング学生です。インフラ防衛とインシデント対応の両面で専門性を磨いています。EDFやSNS Solutionsでの実務経験に加え、韓国やアイルランドで培った適応力を活かし、2026年4月からの4ヶ月間のインターンシップを希望しています。",
    cta: "プロジェクトを見る",
    contact: "連絡先"
  },
  sectionTitles: { 
    summary: "ホーム",
    about: "自己紹介",
    projects: "プロジェクト", 
    skills: "テクニカルスキル", 
    education: "学歴", 
    interests: "興味・関心", 
    context: "コンテキスト", 
    objectives: "目的",
    process: "アルゴリズム ＆ プロセス",
    results: "出力 / 結果", 
    back: "戻る",
    moreInfo: "詳細情報",
    conclusion: "キャリア展望",
    softSkills: "ヒューマンスキル",
    projection: "キャリア目標"
  },
  aboutMe: {
    title: "エージェントについて",
    text: [
      "幼少期からITに情熱を注ぎ、情報システムの保護と重要インフラのレジリエンス（回復力）向上をキャリアの目標としています。",
      "私の実用的（プラグマティック）なアプローチは、攻撃ベクトルを理解し、堅牢な防御を構築することです。脅威に直面しても業務を継続できるよう、設計段階からのセキュリティ（by design）を重視しています。"
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
      title: "インシデント対応 ＆ フォレンジック",
      company: "SNS Security チャレンジ",
      tags: ["フォレンジック", "Wireshark", "危機管理"],
      shortDesc: "システム侵害後のデジタルフォレンジック調査の完全シミュレーション。",
      iconName: 'shield',
      context: "企業インフラ内で重大な侵入を引き起こした架空のフィッシングキャンペーンの分析。",
      objectives: "感染ベクトルの特定、攻撃者のラテラルムーブメント（横断移行）の追跡、および侵害指標（IoC）の抽出。",
      process: [
        "ログおよびメモリダンプの詳細な分析による、悪意のあるプロセスの特定。",
        "Wiresharkを使用したネットワークセッションの再構築によるデータ漏洩経路の把握。",
        "ペイロード（マルウェア）および感染の「ペイシェント・ゼロ」の特定。"
      ],
      results: [
        "攻撃ベクトルを正式に特定し、脅威を封じ込めることに成功。",
        "対策案を含む包括的なテクニカル調査レポートを作成。",
        "時間的制約のある危機状況下での診断手法を最適化。"
      ]
    },
    {
      id: 2,
      title: "産業用バーチャライゼーション",
      company: "EDF - 原子力部門 (DIPDE)",
      tags: ["VirtualBox", "OTセキュリティ", "サンドボックス"],
      shortDesc: "ソフトウェアのプレデプロイメント（展開前テスト）用仮想環境の構築。",
      iconName: 'server',
      context: "原子力発電部門でのミッション。CADチェーンのアップデートを本番環境へ導入する前の安全確認が必要。",
      objectives: "プレデプロイ段階でアップデートを検証するため、CADチェーンを忠実に再現した仮想サンドボックス環境の設計。",
      process: [
        "既存の物理チェーンのハードウェアおよびソフトウェア構成の監査。",
        "VirtualBox上での、重要なマシンとネットワークフローを含む「ミラー」インフラの構築。",
        "エンジニアリングチームがサンドボックスを活用するための運用手順書の作成。"
      ],
      results: [
        "運用のためのプレデプロイ環境を納品し、正式に採用。",
        "サンドボックス内でのテスト分離により、アップデートサイクルの安全性を確保。",
        "検証ツールの長期的な維持を保証する、構造化された技術文書の作成。"
      ]
    },
    {
      id: 3,
      title: "住宅用熱効率の最適化",
      company: "ESIEA プロジェクト (CAPプロジェクト)",
      tags: ["Flutter", "アルゴリズム", "UI/UX"],
      shortDesc: "エネルギー効率向上のための、ラジエーターの最適な配置を提案する意思決定支援アプリ。",
      iconName: 'cpu',
      context: "潜在顧客のニーズに応える、熱の快適性と省エネ課題を解決するためのグループプロジェクト。",
      objectives: "住居内の熱源の理想的な配置を決定するためのソフトウェアソリューションの開発。",
      process: [
        "潜在顧客へのヒアリングとニーズ分析による主要機能の定義。",
        "空間の制約と熱損失に基づく、熱配置アルゴリズムの開発。",
        "家やアパートをモデリングするための、Flutterによるモバイルインターフェースの設計。",
        "暖房設定を保存するためのデータ永続化の実装。"
      ],
      results: [
        "最適な配置を視覚化する、実用的なモバイルアプリを開発。",
        "テストユーザーから使いやすさで高く評価された直感的なインターフェース。",
        "技術要件と市場の期待に対するアルゴリズムの妥当性を検証。"
      ]
    }
  ],
  education: [
    { school: "ESIEA Paris", degree: "エンジニア学位 - サイバーセキュリティ専攻", date: "2024 - 2027", location: "パリ", desc: "セキュアアーキテクチャ、暗号学、ネットワーク管理、プロジェクトマネジメント。" },
    { school: "SeoulTech", degree: "交換留学セメスター", date: "2024", location: "韓国 ソウル", desc: "バックエンド開発（サーバーサイド）、データベース、Python。文化的な没入と適応。" },
    { school: "ベジエ IUT", degree: "ネットワーク ＆ テレコム学士（サイバー専門）", date: "2022 - 2024", location: "ベジエ", desc: "情報システムセキュリティ、Ciscoネットワーク管理、フォレンジック、FTTH展開。" },
    { school: "IT Sligo", degree: "交換留学セメスター", date: "2022", location: "アイルランド スライゴ", desc: "テクニカル英語、データ分析、UX/UIデザイン。" },
    { school: "EPITA Lyon", degree: "エンジニア準備課程", date: "2019 - 2022", location: "リヨン", desc: "応用数学、アルゴリズム（C言語）、物理学、電子工学。" }
  ],
  certifications: [
    { name: "Stormshield Network Administrator (SNA)", issuer: "Stormshield" }
  ],
  interests: [
    { name: "ボルダリング", iconName: "mountain" },
    { name: "旅行（アジア、欧州、北米）", iconName: "plane" },
    { name: "ボランティア（フードバンク）", iconName: "heart" }
  ],
  skillsCategory: { languages: "言語", tools: "テクニカルツール", network: "主要スキル" },
  languages: [
    { name: "フランス語", level: "ネイティブ" },
    { name: "英語", level: "ビジネス (B2/TOEIC 850)" },
    { name: "スペイン語", level: "中級 (B1)" },
    { name: "日本語", level: "初級 (A2)" }
  ],
  conclusion: {
    softSkillsList: [
      { title: "適応力", desc: "韓国やアイルランドでの学術・文化的な生活を通じて培われた柔軟性。" },
      { title: "分析的思考", desc: "フォレンジックの実践、ログ分析、および複雑なインシデント解決を通じて磨かれた思考。" },
      { title: "チームワーク", desc: "大規模な共同プロジェクト（CAPプロジェクト、ゲーム開発）や企業実習で強化された協力体制。" }
    ],
    projectionText: "純粋な技術的専門知識と企業の戦略的目標を繋ぐことができる、実利的なサイバーセキュリティエンジニアを目指しています。ビジネスオペレーションの促進者として、設計段階から安全なアーキテクチャを構築することが私の目標です。"
  },
  footer: {
    desc: "サイバーセキュリティ・エンジニア候補。インフラ保護、インシデント対応、フォレンジックを専門としています。",
    linksTitle: "ナビゲーション",
    sysStatusTitle: "システムステータス",
    rights: "© 2025 Nicolas LE LAN. 全著作権所有。",
    operational: "2026年4月からインターンシップ可能",
    secure: "システム保護完了"
  }
};