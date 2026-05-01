// NOTIC — bilingual copy + data
const CONTENT = {
  brand: "NOTIC",
  tagline: {
    jp: "気づき、つくる。",
    en: "Notice, and create.",
  },
  philosophy: {
    jp: "課題に気づき、\nつくることで解決する。",
    en: "Notice the problem.\nSolve it by making.",
  },

  nav: {
    jp: [
      { id: "about", label: "About", num: "01" },
      { id: "services", label: "Services", num: "02" },
      { id: "technology", label: "Technology", num: "03" },
      { id: "work", label: "Works", num: "04" },
      { id: "contact", label: "Contact", num: "05" },
      { id: "value", label: "Value", num: "06" },
    ],
    en: [
      { id: "about", label: "About", num: "01" },
      { id: "services", label: "Services", num: "02" },
      { id: "technology", label: "Technology", num: "03" },
      { id: "work", label: "Works", num: "04" },
      { id: "contact", label: "Contact", num: "05" },
      { id: "value", label: "Value", num: "06" },
    ],
  },

  ticker: {
    jp: [
      "NEWS — 2026.04 — Q-CUBE 新モデル発表",
      "EXHIBITION — 2026.03 — Art Panel 展示会",
      "PARTNERSHIP — 2026.02 — 新規クライアント2社導入",
      "RELEASE — 2026.01 — SDGs Products ラインナップ拡充",
    ],
    en: [
      "NEWS — 2026.04 — Q-CUBE new model announced",
      "EXHIBITION — 2026.03 — Art Panel showcase",
      "PARTNERSHIP — 2026.02 — Two new client engagements",
      "RELEASE — 2026.01 — SDGs Products lineup expanded",
    ],
  },

  about: {
    jp: {
      eyebrow: "N—01 / ABOUT",
      title: "気づき、\nつくる。",
      body:
        "NOTICは、滋賀県に拠点を置くクリエイティブチームです。\n3Dプリンティングとコンピュテーショナルデザインを軸に、\nかたちある価値をつくることで、人と社会に届けていきます。\n\n小さな違和感を見逃さない。\n異なる専門性を掛け算にする。\n手を動かすことで、答えを出す。\n\n得体の知れないものではなく、\n触れて、体験して、意味がわかるものをつくる。\nそれが、NOTICの在り方です。",
    },
    en: {
      eyebrow: "N—01 / ABOUT",
      title: "Notice,\nand make.",
      body:
        "NOTIC is a creative team based in Shiga, Japan.\nCentered on 3D printing and computational design,\nwe deliver value that has form — something you can hold, experience, and believe in.\n\nWe don't let small frictions pass.\nWe multiply what's different.\nWe find answers by making.\n\nNot intangible promises.\nThings that can be touched, felt, and understood.\nThat's how we work.",
    },
  },

  services: {
    jp: {
      eyebrow: "N—03 / TECHNOLOGY",
      title: "わたしたちに\nできること",
      items: [
        {
          id: "3d-printing",
          num: "S—01", title: "3D Printing",
          body: "デザインから造形、生産まで、短期間での伴走が可能。\n素材・精度・用途に応じた最適なプロセスを設計します。",
          detail: {
            tagline: "デザインから生産まで、\nひとつのチームで。",
            lead: "アイデアの段階から造形、検証、量産まで、3Dプリンティングを軸に短いサイクルで伴走します。\n素材・精度・用途に応じてプロセスを組み立て、つくりながら最適解を見つけていきます。",
            sections: [
              { h: "対応領域", body: "・コンセプトモデル・プロトタイプ\n・最終製品としての小ロット量産\n・空間装飾・什器・ノベルティ\n・メーカーや設計事務所との共同開発" },
              { h: "扱う素材", body: "・PLA / PETG / TPU / ABS\n・再生樹脂（リサイクルPLA・PETG 等）\n・透明・光拡散素材\n・特殊素材は要件に応じて選定" },
              { h: "プロセス", body: "01 ヒアリング・要件整理\n02 設計・データ作成\n03 試作・素材検証\n04 本制作・仕上げ・納品" },
            ],
            specs: [
              { k: "造形方式", v: "FDM 中心 / 他方式は要相談" },
              { k: "造形サイズ", v: "最大 約 W400 × D400 × H500mm" },
              { k: "ロット", v: "1点〜小ロット量産" },
              { k: "納期", v: "ご相談より最短数日〜" },
            ],
          },
        },
        {
          id: "computational-design",
          num: "S—02", title: "Computational Design / Engineering",
          body: "パラメトリックデザインとエンジニアリングを組み合わせ、\n従来設計では得られない形状と機能を実現します。",
          detail: {
            tagline: "計算でかたちを\n引き出す。",
            lead: "パラメトリックデザインとエンジニアリング思考を組み合わせ、要件と制約から最適な形状・構造を導き出します。\n意匠と機能の両立、数量バリエーションへの対応、再現性のある設計プロセスをご提供します。",
            sections: [
              { h: "対応領域", body: "・パラメトリックモデリング（Grasshopper 等）\n・構造・流体・熱の検証を踏まえた形状設計\n・大量バリエーションのジェネレーティブ生成\n・3Dプリント前提の設計最適化" },
              { h: "活用例", body: "・建築ファサード・インテリアパネルの意匠設計\n・プロダクト形状の最適化（軽量化・剛性確保）\n・1点ずつ異なるカスタムノベルティの自動生成" },
              { h: "プロセス", body: "01 要件・制約のヒアリング\n02 アルゴリズム設計\n03 検証・パラメータチューニング\n04 出力データ納品 or 製造まで一貫対応" },
            ],
            specs: [
              { k: "ツール", v: "Rhino / Grasshopper / Blender 他" },
              { k: "成果物", v: "3Dデータ / 図面 / 製造データ" },
              { k: "対応", v: "設計のみ〜製造まで一貫対応" },
              { k: "納期", v: "ご相談より約2〜6週間" },
            ],
          },
        },
        {
          id: "visualization",
          num: "S—03", title: "Visualization",
          body: "内観・外観パースをはじめとしたデザインのビジュアライズ、\nAIを活用した新しい表現手法の提案・導入まで。",
          detail: {
            tagline: "「まだ無いもの」を、\n見えるかたちに。",
            lead: "建築・空間・プロダクトの設計データから、伝わるビジュアルを制作します。\n従来のレンダリング表現に加え、AIを活用した新しい表現手法の提案・導入も行います。",
            sections: [
              { h: "対応領域", body: "・内観・外観パース（建築・店舗・住宅）\n・プロダクトCG・ライフスタイルカット\n・アニメーション・ウォークスルー\n・AI画像生成を活用した表現開発" },
              { h: "活用シーン", body: "・コンペ・プレゼンテーション資料\n・販促・SNS・Web向けビジュアル\n・施主・クライアント向け合意形成資料\n・新規事業・コンセプト検討フェーズの可視化" },
              { h: "プロセス", body: "01 ヒアリング・参考イメージ共有\n02 構図・ライティング案の提示\n03 ドラフト → フィードバック → 仕上げ\n04 納品（静止画・動画・各種解像度）" },
            ],
            specs: [
              { k: "ツール", v: "Blender / V-Ray / Twinmotion / 各種AIツール" },
              { k: "成果物", v: "静止画 / 動画 / 360°ビュー" },
              { k: "対応", v: "1カット〜シリーズ制作" },
              { k: "納期", v: "ご相談より約1〜4週間" },
            ],
          },
        },
      ],
    },
    en: {
      eyebrow: "N—03 / TECHNOLOGY",
      title: "What we do",
      items: [
        {
          id: "3d-printing",
          num: "S—01", title: "3D Printing",
          body: "End-to-end support from design to fabrication and production, on tight timelines.\nWe tailor the process to material, precision, and intended use.",
          detail: {
            tagline: "From design to delivery,\none team.",
            lead: "We move with you from idea to fabrication, validation, and small-batch production — built around 3D printing. We tune the process to material, precision, and intended use, and find the right answer by making.",
            sections: [
              { h: "What we cover", body: "- Concept models and prototypes\n- Small-batch production as final product\n- Spatial decor, fixtures, and novelties\n- Co-development with manufacturers and design firms" },
              { h: "Materials", body: "- PLA / PETG / TPU / ABS\n- Recycled polymers (rPLA, rPETG, etc.)\n- Transparent and light-diffusing materials\n- Specialty materials selected per project" },
              { h: "Process", body: "01 Briefing and scoping\n02 Design and data preparation\n03 Prototyping and material checks\n04 Final fabrication, finishing, and delivery" },
            ],
            specs: [
              { k: "Method", v: "FDM primarily; others on request" },
              { k: "Build size", v: "Up to ~W400 × D400 × H500mm" },
              { k: "Scale", v: "One-off to small-batch" },
              { k: "Lead time", v: "From a few days" },
            ],
          },
        },
        {
          id: "computational-design",
          num: "S—02", title: "Computational Design / Engineering",
          body: "Combining parametric design with engineering,\nwe realize forms and functions beyond conventional design.",
          detail: {
            tagline: "Letting computation\ndraw out the form.",
            lead: "We combine parametric design with engineering thinking to derive optimal forms and structures from requirements and constraints — balancing aesthetics and function, supporting variation at scale, and giving you a reproducible design process.",
            sections: [
              { h: "What we cover", body: "- Parametric modeling (Grasshopper, etc.)\n- Form-finding informed by structural, fluid, and thermal checks\n- Generative variation at scale\n- Design optimization assuming 3D-printed output" },
              { h: "Applications", body: "- Facades and interior panels for architecture\n- Product form optimization (weight, stiffness)\n- Custom novelties where every piece is different" },
              { h: "Process", body: "01 Requirements and constraints\n02 Algorithm design\n03 Validation and parameter tuning\n04 Data delivery, or end-to-end through manufacturing" },
            ],
            specs: [
              { k: "Tools", v: "Rhino / Grasshopper / Blender, etc." },
              { k: "Deliverables", v: "3D data / drawings / production data" },
              { k: "Scope", v: "Design only, or end-to-end" },
              { k: "Lead time", v: "2–6 weeks" },
            ],
          },
        },
        {
          id: "visualization",
          num: "S—03", title: "Visualization",
          body: "From interior and exterior renderings that bring designs to life,\nto the proposal and integration of AI-driven visualization methods.",
          detail: {
            tagline: "Make the unbuilt\nvisible.",
            lead: "We turn design data for architecture, spaces, and products into visuals that communicate. Alongside traditional rendering, we propose and integrate new AI-driven visualization methods.",
            sections: [
              { h: "What we cover", body: "- Interior and exterior renderings (architecture, retail, residential)\n- Product CG and lifestyle imagery\n- Animation and walkthroughs\n- Visual development with AI image generation" },
              { h: "Where it fits", body: "- Competitions and presentations\n- Sales, social, and web visuals\n- Alignment material for clients and stakeholders\n- Visualization for early-stage business and concept work" },
              { h: "Process", body: "01 Briefing and reference sharing\n02 Composition and lighting proposals\n03 Draft → feedback → final\n04 Delivery (stills, video, multiple resolutions)" },
            ],
            specs: [
              { k: "Tools", v: "Blender / V-Ray / Twinmotion / various AI tools" },
              { k: "Deliverables", v: "Stills / video / 360° views" },
              { k: "Scope", v: "Single shot to a full series" },
              { k: "Lead time", v: "1–4 weeks" },
            ],
          },
        },
      ],
    },
  },

  products: {
    jp: {
      eyebrow: "N—02 / SERVICES",
      title: "わたしたちが\nつくっているもの",
      items: [
        {
          id: "q-cube",
          num: "P—01", name: "Q-CUBE", type: "サービス", year: "2026–",
          body: "空間に調和するQRオブジェ。\n自発的な読み取りを促し、\n口コミ獲得・HP閲覧・SNSフォロワー獲得に貢献する。",
          color: "accent", image: "assets/q-cube.jpg",
          detail: {
            tagline: "空間に気づきを、置く。",
            taglineSub: "Place a moment of curiosity in the room.",
            concept: "QRコードは、ただ読み取るためのものじゃない。\n\nQ-CUBEは、6面すべてがQRコードの立体オブジェ。\n空間に溶け込むインテリアとして置かれながら、\n訪れた人が自然と手を伸ばし、スキャンしたくなる。\n\n「なんだろう、これ。」\nその小さな気づきが、口コミになり、\nフォロワーになり、あなたのブランドへの入り口になる。",
            conceptEn: "A QR code doesn't have to look like one.\n\nQ-CUBE is a sculptural object — all six faces are QR codes.\nIt sits in your space as a piece of the interior,\nuntil someone notices it, reaches for it, and scans.\n\nThat small moment of curiosity becomes a review,\na follow, a new connection to your brand.",
            why: [
              "6面すべてがQRコードの、3D立体オブジェ",
              "「なんだろう？」を引き出す、自発的な読み取り設計",
              "紙のQRと違い、目を引き、触りたくなり、読まれる",
              "素材・カラー・ロゴ、すべてフルカスタム対応",
            ],
            whyEn: [
              "All six faces are QR codes — a sculptural 3D object",
              "Designed to spark curiosity; scans happen naturally",
              "Unlike paper QR: it gets noticed, touched, and read",
              "Fully customizable: material, color, and logo",
            ],
            features: [
              { num: "機能 01", plus: false, title: "URLはいつでも変更できる", body: "買い切りなのに、ずっと使い続けられる。\nキャンペーン期間だけ特設ページに切り替えたり、\n季節メニューに合わせて更新したり。\nオブジェはそのまま、中身だけ変えられる。" },
              { num: "機能 02", plus: true, title: "マルチリンク機能", body: "Instagram・LINE・Googleマップ・予約サイトなど、\nバラバラだったQRをこれ一台にまとめられる。\nリンクは最大7つまで登録可能。\n読んだお客さんが、行き先を自分で選べる。" },
              { num: "機能 03", plus: true, title: "読み取り数通知機能", body: "何人が読んだか、どのリンクが押されたか。\n日次・週次・月次のレポートで数字が見える。\nデータをもとに、次の一手が打てる。" },
              { num: "機能 04", plus: false, title: "すべて、LINEで完結", body: "URL変更も、レポート確認も、LINEから。\nアプリ不要、難しい操作なし。" },
            ],
            effects: [
              { title: "置くだけで、お客さんが自分から動く", body: "スタッフが声をかけなくても、興味を持った人が自然にスキャンする導線ができる。" },
              { title: "口コミ・フォロワー・サイト流入が、同時に増える", body: "1台で複数のリンクを集約できるから、Googleマップの口コミもフォロワーも、どちらも取りこぼさない。" },
              { title: "数字で見えるから、次の手が打てる", body: "誰がいつ読んだか、どのリンクが押されたか。感覚ではなくデータで、集客の精度を上げていける。" },
              { title: "買い切りで、ずっと使い続けられる", body: "本体は買い切り。URLは後から何度でも変更可能。\nリンク3個までは無料。マルチリンク（最大7個）・読み取り数通知は有料プランQ-CUBE Plus+で対応。" },
            ],
            specs: [
              { k: "素材 / Material", v: "PLA / PETG / 再生樹脂（選択可）" },
              { k: "カラー / Color", v: "全7色展開" },
              { k: "サイズ / Size", v: "1サイズ（標準）" },
              { k: "価格 / Price", v: "¥8,000〜（税別・買い切り・月額費用なし）" },
              { k: "納期 / Lead time", v: "ご相談より最短2週間" },
              { k: "ロット / Scale", v: "小ロット〜量産" },
            ],
            original: {
              tagline: "あなただけのQ-CUBEを、つくる。",
              taglineSub: "Make one that's entirely yours.",
              lead: "既製の7色・標準サイズにはない、あなただけのQ-CUBEをオーダーメイドで制作します。\nカラー・サイズ・ロゴ・形状まで、空間やブランドに合わせてフルカスタム対応。\n個人のギフトから、法人のブランデッドグッズ・ノベルティまで幅広く対応します。",
              options: [
                { k: "カラー / Color", v: "7色以外の任意カラー（DIC・Pantone・参考画像での指定可）" },
                { k: "サイズ / Size", v: "標準以外の大小サイズに対応" },
                { k: "ロゴ・テキスト", v: "ブランドロゴ・店名・メッセージの刻印" },
                { k: "形状 / Form", v: "キューブ以外の形状（球・多面体・オリジナル形状など）" },
              ],
              usecases: [
                { title: "個人向け", items: ["誕生日・結婚祝いなどのギフト", "自分のSNSやポートフォリオへ誘導するオリジナルオブジェ", "記念品・パーソナルグッズ"] },
                { title: "法人向け", items: ["店舗・ホテルのブランドカラーに合わせた設置用", "展示会・イベントのノベルティ", "企業ロゴ入りのブランデッドグッズ", "複数店舗への統一デザインでの導入"] },
              ],
              pricing: [
                { item: "Q-CUBE（標準7色）", price: "¥8,000〜" },
                { item: "Original — カラー変更", price: "¥12,000〜" },
                { item: "Original — サイズ変更", price: "要見積もり" },
                { item: "Original — ロゴ・形状カスタム", price: "要見積もり" },
              ],
              note: "※価格はすべて税別。ロット・仕様により変動します。",
              cta: "まずは1台から。",
              ctaSub: "Q-CUBE Originalのご相談・ご注文もお気軽に。\n下記メールアドレスよりお問い合わせください。",
            },
          },
        },
        {
          id: "art-panel",
          num: "P—02", name: "Art Panel", type: "空間装飾", year: "2026–",
          body: "見る角度や光の当たり方で表情が変わる3Dプリント製インテリアパネル。\n空間に「体験」を生む、完全オーダーメイドの装飾。",
          color: "ink", image: "assets/art-panel.jpg",
          detail: {
            tagline: "その空間を、体験にする。",
            taglineSub: "Turn the space into an experience.",
            concept: "光と影を設計する、という発想から生まれたインテリアパネル。\n\nArt Panelは、コンピュテーショナルデザインで緻密に設計されたパターンが、見る角度や光の入り方によって、絶えず表情を変えるインテリアパネルです。\n\nホテルのロビー、レストランの壁面、ブライダル会場のエントランス——そこを訪れた人が、思わず目を止め、近づき、触れる。そんな「体験」を空間に埋め込むことが、Art Panelの役割です。\n\n素材はPLA・PETG・アクリルなどから選択。パターン・サイズ・カラーはすべて完全オーダーメイドで対応します。",
            why: [
              "見る角度で変わる、光と陰影の視覚体験",
              "コンピュテーショナルデザインによる緻密なパターン",
              "PLA / PETG / アクリルなど素材を選択可能",
              "パターン・サイズ・カラーすべて完全オーダーメイド",
              "ホテル・店舗・ブライダルなど業態を問わず対応",
              "連結パネルで大型壁面への設置も可能",
            ],
            designs: [
              { id: "mosamosa", name: "MOSAMOSA", jp: "もさもさ", desc: "植物の葉が重なり合うような、ふさふさとした立体感。有機的な動きが空間に柔らかさをもたらす。", pricePerPanel: 6000 },
              { id: "naminami", name: "NAMINAMI", jp: "なみなみ", desc: "波のうねりを抽象化した流れるようなライン。光の当たり方で水面のように輝く。", pricePerPanel: 6000 },
              { id: "horohoro", name: "HOROHORO", jp: "ほろほろ", desc: "細かな粒子が舞い散るような繊細でランダムなテクスチャ。光を受けて宝石のようにきらめく。", pricePerPanel: 6500 },
              { id: "shitoshito", name: "SHITOSHITO", jp: "しとしと", desc: "雨粒が落ちる瞬間を閉じ込めたような、静かで均整のとれたパターン。落ち着いた空間に合う。", pricePerPanel: 6500 },
              { id: "kakukaku", name: "KAKUKAKU", jp: "かくかく", desc: "幾何学的な角ばった造形が整列する、シャープでモダンなデザイン。建築的な空間と相性がよい。", pricePerPanel: 7000 },
              { id: "custom", name: "CUSTOM", jp: "フルオーダー", desc: "上記パターン以外の完全オリジナルデザイン。空間コンセプトや世界観に合わせてゼロからデザイン。", pricePerPanel: null },
            ],
            specs: [
              { k: "素材", v: "PLA / PETG / アクリル複合" },
              { k: "パネルサイズ", v: "300mm × 300mm（連結可）" },
              { k: "厚み", v: "約15〜25mm（パターンによる）" },
              { k: "カラー", v: "全7色スタンダード / カスタムカラー対応" },
              { k: "取付方法", v: "壁面ビス留め / 両面テープ（壁面状況による）" },
              { k: "納期", v: "ご相談より約4〜8週間" },
            ],
            pricing: [
              { k: "ベース価格（300×300mm / 枚）", v: "¥6,000〜（パターン・素材により変動）" },
              { k: "ロゴ・文字入れ", v: "+¥15,000〜" },
              { k: "カスタムカラー", v: "+¥5,000〜" },
              { k: "フルオーダーデザイン", v: "別途お見積もり" },
              { k: "設置工事", v: "別途お見積もり（エリア・規模による）" },
            ],
            delivery: {
              steps: [
                { num: "01", title: "ヒアリング・コンセプト設計", body: "空間の雰囲気、用途、設置環境をヒアリングし、パターン・素材・カラーの方向性をご提案します。" },
                { num: "02", title: "デザイン確認・サンプル制作", body: "提案デザインをもとに小サンプルを制作。実際の素材感・光の当たり方をご確認いただいてから本制作へ。" },
                { num: "03", title: "本制作・品質確認", body: "承認後、本制作に入ります。完成品は品質確認を経て、丁寧に梱包・出荷します。" },
                { num: "04", title: "納品・設置", body: "配送または現地設置（別途ご相談）。設置後の微調整にも対応します。" },
              ],
            },
          },
        },
        {
          id: "sdgs",
          num: "P—03", name: "SDGs Products", type: "プロダクト", year: "2026–",
          body: "再生素材を用いた製品ライン。\n環境負荷と表現力の両立を探る。",
          color: "bg2", image: "assets/sdgs.jpg",
          detail: {
            tagline: "つくることが、\n環境への気づきになる。",
            lead: "SDGs Productsは、再生素材を主体にした3Dプリントプロダクトのラインです。\n環境負荷を抑えつつ、意匠性・機能性を両立させるための素材・形状・プロセスを継続的に研究しています。",
            sections: [
              { h: "取り組み", body: "・リサイクルPLA・再生PETGなどの再生素材活用\n・造形廃材の再利用プロセス\n・形状最適化による材料使用量の削減" },
              { h: "対応領域", body: "・企業ノベルティ・ブランドプロダクト\n・ホテル・店舗のアメニティ、什器\n・教育・啓発イベント用のプロトタイプ" },
              { h: "進め方", body: "01 課題・想いのヒアリング\n02 素材・構造・意匠の提案\n03 試作・改良\n04 小ロット量産・納品" },
            ],
            specs: [
              { k: "素材", v: "再生PLA / 再生PETG / 他素材検証中" },
              { k: "ロット", v: "1点〜小ロット量産" },
              { k: "納期", v: "ご相談より約3〜6週間" },
              { k: "対応", v: "OEM / 共同開発も可" },
            ],
          },
        },
      ],
    },
    en: {
      eyebrow: "N—02 / SERVICES",
      title: "What we make",
      items: [
        {
          id: "q-cube",
          num: "P—01", name: "Q-CUBE", type: "Service", year: "2026–",
          body: "A QR object that lives in the space.\nInvites a spontaneous scan,\nturning attention into reviews, visits, and followers.",
          color: "accent", image: "assets/q-cube.jpg",
          detail: {
            tagline: "Place a moment of curiosity in the room.",
            taglineSub: "空間に気づきを、置く。",
            concept: "A QR code doesn't have to look like one.\n\nQ-CUBE is a sculptural object — all six faces are QR codes.\nIt sits in your space as a piece of the interior,\nuntil someone notices it, reaches for it, and scans.\n\nThat small moment of curiosity becomes a review,\na follow, a new connection to your brand.",
            conceptEn: "QRコードは、ただ読み取るためのものじゃない。\n\nQ-CUBEは、6面すべてがQRコードの立体オブジェ。\n空間に溶け込むインテリアとして置かれながら、\n訪れた人が自然と手を伸ばし、スキャンしたくなる。",
            why: [
              "All six faces are QR codes — a sculptural 3D object",
              "Designed to spark curiosity; scans happen naturally",
              "Unlike paper QR: it gets noticed, touched, and read",
              "Fully customizable: material, color, and logo",
            ],
            whyEn: [
              "6面すべてがQRコードの、3D立体オブジェ",
              "「なんだろう？」を引き出す、自発的な読み取り設計",
              "紙のQRと違い、目を引き、触りたくなり、読まれる",
              "素材・カラー・ロゴ、すべてフルカスタム対応",
            ],
            features: [
              { num: "Feature 01", plus: false, title: "Change the URL anytime", body: "Buy it once, use it forever. Swap to a campaign page for a limited run, update for a seasonal menu — the object stays, the content changes." },
              { num: "Feature 02", plus: true, title: "Multi-link", body: "Consolidate all your QR codes into one cube — Instagram, LINE, Google Maps, booking site, and more. Up to 7 links. Guests choose where they want to go." },
              { num: "Feature 03", plus: true, title: "Scan notifications", body: "See how many people scanned and which links they tapped. Daily, weekly, and monthly reports to act on." },
              { num: "Feature 04", plus: false, title: "Everything runs through LINE", body: "Change URLs, check reports — all from LINE. No app needed. No complicated setup." },
            ],
            effects: [
              { title: "Guests move on their own — no prompting needed", body: "The object creates a natural flow: curiosity leads to a scan, without a word from your staff." },
              { title: "Reviews, followers, and site traffic — all at once", body: "Multiple links in one cube means nothing gets missed. Google Maps, Instagram, LINE — one scan covers it all." },
              { title: "Data you can act on", body: "See who scanned, when, and which link they chose. Move from intuition to evidence, and sharpen every next step." },
              { title: "Buy it once. Use it forever.", body: "The object is a one-time purchase. URLs can be updated anytime, and up to 3 links are free.\nMulti-link (up to 7) and scan notifications are available on Q-CUBE Plus+." },
            ],
            specs: [
              { k: "Material", v: "PLA / PETG / recycled polymers (selectable)" },
              { k: "Color", v: "7 standard colors" },
              { k: "Size", v: "1 standard size" },
              { k: "Price", v: "From ¥8,000 (ex. tax, one-time, no monthly fee)" },
              { k: "Lead time", v: "From 2 weeks" },
              { k: "Scale", v: "Small batch to production" },
            ],
            original: {
              tagline: "Make one that's entirely yours.",
              taglineSub: "あなただけのQ-CUBEを、つくる。",
              lead: "Q-CUBE Original is a fully bespoke service for those who want something the standard line can't offer.\nYour color, your size, your logo — or an entirely different form.\nFrom personal gifts to branded corporate goods, one object made entirely for you.",
              options: [
                { k: "Color", v: "Any color beyond the standard 7 (DIC, Pantone, or reference image)" },
                { k: "Size", v: "Larger or smaller than standard" },
                { k: "Logo / Text", v: "Brand logo, shop name, or custom message" },
                { k: "Form", v: "Any shape beyond the cube (sphere, polyhedron, original form)" },
              ],
              usecases: [
                { title: "Personal", items: ["Birthday and wedding gifts", "An original object linking to your SNS or portfolio", "Commemorative items and personal goods"] },
                { title: "Business", items: ["In-store and hotel placements in brand colors", "Novelties for exhibitions and events", "Branded corporate goods with company logo", "Unified design rollout across multiple locations"] },
              ],
              pricing: [
                { item: "Q-CUBE (standard, 7 colors)", price: "From ¥8,000" },
                { item: "Original — color change", price: "From ¥12,000" },
                { item: "Original — size change", price: "Quote on request" },
                { item: "Original — logo / form custom", price: "Quote on request" },
              ],
              note: "※ All prices ex. tax. Varies by quantity and spec.",
              cta: "Start with one.",
              ctaSub: "Inquiries and orders for Q-CUBE Original are welcome.\nContact us at the address below.",
            },
          },
        },
        {
          id: "art-panel",
          num: "P—02", name: "Art Panel", type: "Spatial", year: "2026–",
          body: "A 3D-printed interior panel whose surface shifts with angle and light.\nFully bespoke to any space.",
          color: "ink", image: "assets/art-panel.jpg",
          detail: {
            tagline: "Turn the space into an experience.",
            taglineSub: "その空間を、体験にする。",
            concept: "Born from the idea of designing with light and shadow.\n\nArt Panel is a 3D-printed interior panel with computationally designed patterns that shift continuously as viewing angle and light change.\n\nHotel lobbies, restaurant walls, wedding venue entrances — Art Panel makes people stop, approach, and reach out. Embedding that moment of experience into a space is what Art Panel is for.\n\nAvailable in PLA, PETG, and acrylic composites. Pattern, size, and color are all fully bespoke.",
            why: [
              "Visuals that shift with angle — light and shadow in motion",
              "Intricate patterns through computational design",
              "Choice of material: PLA / PETG / acrylic",
              "Fully bespoke: pattern, size, and color",
              "Fits hotels, restaurants, retail, and wedding venues",
              "Modular panels for large-scale wall installations",
            ],
            designs: [
              { id: "mosamosa", name: "MOSAMOSA", jp: "もさもさ", desc: "Dense, overlapping layers like lush foliage. Organic movement that softens any space.", pricePerPanel: 6000 },
              { id: "naminami", name: "NAMINAMI", jp: "なみなみ", desc: "Flowing lines abstracted from the motion of waves. Catches light like a water surface.", pricePerPanel: 6000 },
              { id: "horohoro", name: "HOROHORO", jp: "ほろほろ", desc: "Fine particles scattered in a delicate, random texture. Catches light like scattered gems.", pricePerPanel: 6500 },
              { id: "shitoshito", name: "SHITOSHITO", jp: "しとしと", desc: "Quietly balanced geometry, like rainfall frozen in a moment. Well-suited to calm interiors.", pricePerPanel: 6500 },
              { id: "kakukaku", name: "KAKUKAKU", jp: "かくかく", desc: "Sharp geometric forms arranged with precision. Modern and architectural.", pricePerPanel: 7000 },
              { id: "custom", name: "CUSTOM", jp: "フルオーダー", desc: "A design built entirely from scratch — around your space's concept and world.", pricePerPanel: null },
            ],
            specs: [
              { k: "Material", v: "PLA / PETG / acrylic composite" },
              { k: "Panel size", v: "300mm × 300mm (modular)" },
              { k: "Thickness", v: "Approx. 15–25mm (varies by pattern)" },
              { k: "Color", v: "7 standard colors / custom colors available" },
              { k: "Mounting", v: "Wall screws / double-sided tape (subject to surface)" },
              { k: "Lead time", v: "4–8 weeks from consultation" },
            ],
            pricing: [
              { k: "Base price (per 300×300mm panel)", v: "From ¥6,000 (varies by pattern and material)" },
              { k: "Logo / lettering", v: "+¥15,000 and up" },
              { k: "Custom color", v: "+¥5,000 and up" },
              { k: "Full custom design", v: "Quote on request" },
              { k: "Installation", v: "Quote on request (by area and scope)" },
            ],
            delivery: {
              steps: [
                { num: "01", title: "Briefing and concept", body: "We ask about the space, its atmosphere, purpose, and environment — then propose a direction for pattern, material, and color." },
                { num: "02", title: "Design review and sample", body: "We build a small sample from the proposed design. Check the actual texture and how light falls before we move to full production." },
                { num: "03", title: "Production and QC", body: "Once approved, we go into full production. Finished panels are quality-checked, then carefully packed and shipped." },
                { num: "04", title: "Delivery and installation", body: "Shipped to you or installed on-site (by arrangement). Fine adjustments after installation are welcome." },
              ],
            },
          },
        },
        {
          id: "sdgs",
          num: "P—03", name: "SDGs Products", type: "Product", year: "2026–",
          body: "A product line built around recycled materials —\nbalancing footprint and expression.",
          color: "bg2", image: "assets/sdgs.jpg",
          detail: {
            tagline: "Making itself becomes\nan act of awareness.",
            lead: "SDGs Products is a 3D-printed product line grounded in recycled materials. We keep exploring materials, forms, and processes that lower impact while keeping design and function sharp.",
            sections: [
              { h: "What we work on", body: "- Recycled PLA and PETG, among others\n- Re-use of print waste\n- Form optimization to reduce material use" },
              { h: "Where it fits", body: "- Corporate novelties and branded goods\n- Hotel and store amenities and fixtures\n- Prototypes for educational and awareness events" },
              { h: "Process", body: "01 Briefing — the problem and the intent\n02 Proposal — material, structure, and look\n03 Prototyping and refinement\n04 Small-batch production and delivery" },
            ],
            specs: [
              { k: "Material", v: "Recycled PLA / PETG / others in testing" },
              { k: "Scale", v: "One-off to small-batch" },
              { k: "Lead time", v: "3–6 weeks" },
              { k: "Scope", v: "OEM and co-development available" },
            ],
          },
        },
      ],
    },
  },

  work: {
    jp: {
      eyebrow: "N—04 / WORKS",
      title: "わたしたちが\n手がけたもの",
      items: [
        {
          id: "hospitality-k",
          num: "01", client: "宿泊 K社", sector: "Hospitality", year: "2025", tag: "Art Panel",
          desc: "ドラゴンクエストコンセプトハウスの幻想アートパネル。",
          image: "assets/hospitality-k.jpg",
          detail: {
            overview: "宿泊施設K社が企画するドラゴンクエスト・コンセプトハウスに、\n世界観を象徴する幻想的なアートパネルを制作・設置しました。",
            role: "コンセプト設計 / パターンデザイン / 3Dプリント制作 / 設置",
            body: "世界観を象徴する光と陰影の表現を、\nコンピュテーショナルデザインで起こし、3Dプリントで造形。\n空間に入った瞬間に物語が立ち上がる、\nインテリア一体型のアートパネルとして仕上げました。",
          },
        },
        {
          id: "institution-r",
          num: "02", client: "教育機関 R", sector: "Education", year: "2025", tag: "Installation",
          desc: "学園祭の周年インスタレーションの制作。",
          image: "assets/institution-r.jpg",
          detail: {
            overview: "教育機関Rの周年学園祭における、\nシンボリックなインスタレーションの企画・制作を担当しました。",
            role: "コンセプト開発 / 造形設計 / 3Dプリント / 設営",
            body: "来場者の記憶に残る「体験の中心」を置くことを目的に、\n大型の造形物を3Dプリントで制作。\n短期間・設置可能な分割構造で、\n現場での組み立てまで一貫して担当しました。",
          },
        },
        {
          id: "sports-f",
          num: "03", client: "スポーツ F様", sector: "Product", year: "2026", tag: "Order Made",
          desc: "サッカーのオリジナル作戦版の駒のオーダーメイド。",
          image: "assets/coming-soon.jpg",
          detail: {
            overview: "サッカー指導者F様のオリジナル作戦ボード用に、\nチームを表現する駒をオーダーメイドで制作しました。",
            role: "ヒアリング / 形状設計 / 3Dプリント制作",
            body: "チームカラー・役割ごとに識別しやすく、\n手に馴染むサイズ感と視認性を両立。\n小ロット・複数バリエーションに柔軟に対応し、\n現場でそのまま使える仕上げで納品しました。",
          },
        },
        {
          id: "creator-y",
          num: "04", client: "クリエイター Y様", sector: "Creator", year: "2026", tag: "Product",
          desc: "展示会出展におけるノベルティ制作。",
          image: "assets/coming-soon.jpg",
          detail: {
            overview: "クリエイターY様の展示会出展に合わせたノベルティを、\n少量多品種で制作しました。",
            role: "形状提案 / 素材選定 / 3Dプリント制作 / 仕上げ",
            body: "作家性を損なわず、量産感を避けるため、\n1点ごとに微差のある形状をジェネレーティブに設計。\n会場で手に取ってもらえるサイズと質感に調整し、\n配布・販売どちらにも対応できるかたちで仕上げました。",
          },
        },
        {
          id: "interior-o",
          num: "05", client: "インテリア・雑貨 O社", sector: "Interior", year: "2026", tag: "Q-CUBE",
          desc: "Q-CUBEのギフト向け店頭販売。",
          image: "assets/coming-soon.jpg",
          detail: {
            overview: "インテリア・雑貨を取り扱うO社にて、\n当社プロダクト「Q-CUBE」のギフト向け店頭販売を開始しました。",
            role: "商品企画調整 / パッケージ設計 / 小ロット生産",
            body: "ギフト用途に合わせて配色・サイズ・パッケージを再設計。\nQR先の体験までを商品価値に含める設計で、\n贈る側・受け取る側、双方にとって意味のあるプロダクトに仕上げました。",
          },
        },
        {
          id: "cafe-i",
          num: "06", client: "珈琲焙煎所 I社", sector: "Cafe", year: "2025", tag: "Prototyping",
          desc: "オリジナルコーヒードリッパー企画におけるプロトタイピング。",
          image: "assets/cafe-i.jpg",
          detail: {
            overview: "珈琲焙煎所I社のオリジナルコーヒードリッパー開発に、\nプロトタイピングパートナーとして参画しました。",
            role: "形状検討 / 試作品制作 / 抽出検証サポート",
            body: "リブ形状・注ぎ口・全体バランスなどを、\n短いサイクルで何度も3Dプリントして検証。\nつくる → 淹れる → 調整する、を高速で回すことで、\n商品化に向けた確度を段階的に高めていきました。",
          },
        },
        {
          id: "bridal-w",
          num: "07", client: "ブライダル W式場", sector: "Bridal", year: "2026", tag: "Art Panel",
          desc: "エントランスロビーのウェルカムアートパネル制作。",
          image: "assets/coming-soon.jpg",
          detail: {
            overview: "ブライダル施設Wのエントランスロビーに、\n光と陰影が揺れるウェルカムアートパネルを設置しました。",
            role: "空間ヒアリング / パターンデザイン / 3Dプリント制作 / 設置",
            body: "新郎新婦と参列者を迎える最初の空間に、\n視覚的な「特別感」を埋め込むことを目的に制作。\nパターンは会場の雰囲気に合わせてゼロからデザインしました。",
          },
        },
        {
          id: "hotel-h",
          num: "08", client: "ホテル H", sector: "Hospitality", year: "2026", tag: "Art Panel",
          desc: "客室廊下の壁面を彩るアートパネルの連続設置。",
          image: "assets/coming-soon.jpg",
          detail: {
            overview: "ホテルHの客室階廊下に、\n連続するアートパネルを設置しました。",
            role: "設計監修 / パターン制作 / 連結設置",
            body: "歩くごとに光と影のうつろいが変わる体験をつくることを目的に、\n連結パネルで壁面全体をデザイン。\n滞在の記憶に残る廊下を実現しました。",
          },
        },
        {
          id: "apparel-c",
          num: "09", client: "アパレル C社", sector: "Retail", year: "2026", tag: "Q-CUBE",
          desc: "ポップアップストアにおけるQ-CUBEの空間設置。",
          image: "assets/coming-soon.jpg",
          detail: {
            overview: "アパレルブランドCのポップアップストアに、\nブランドカラーのQ-CUBEを設置しました。",
            role: "カラー調整 / 小ロット制作 / 設置サポート",
            body: "SNSフォロー・オンラインストアへの誘導を目的に、\nブランドの世界観に合わせたカスタムカラーで制作。\n来店客が自然と手を伸ばす設置位置を提案しました。",
          },
        },
      ],
    },
    en: {
      eyebrow: "N—04 / WORKS",
      title: "What we have made",
      items: [
        {
          id: "hospitality-k",
          num: "01", client: "Hospitality K", sector: "Hospitality", year: "2025", tag: "Art Panel",
          desc: "Fantasy art panels for a Dragon Quest concept house.",
          image: "assets/hospitality-k.jpg",
          detail: {
            overview: "For K's Dragon Quest concept house, we designed and installed fantasy art panels that carry the world of the IP into the physical space.",
            role: "Concept / pattern design / 3D-printed fabrication / installation",
            body: "The visual language of light and shadow was developed through computational design and realized in 3D print. The result is an interior-integrated art panel where the story rises up the moment guests step in.",
          },
        },
        {
          id: "institution-r",
          num: "02", client: "Institution R", sector: "Education", year: "2025", tag: "Installation",
          desc: "Anniversary installation for a university festival.",
          image: "assets/institution-r.jpg",
          detail: {
            overview: "A symbolic installation for Institution R's anniversary festival, scoped and produced end-to-end.",
            role: "Concept development / form design / 3D printing / on-site setup",
            body: "The goal was to give guests a clear experiential center. We produced a large-scale 3D-printed piece built from sections so it could be transported quickly and assembled on site — and handled the setup ourselves.",
          },
        },
        {
          id: "sports-f",
          num: "03", client: "Sports F", sector: "Product", year: "2026", tag: "Order Made",
          desc: "Custom-made pieces for an original soccer tactics board.",
          image: "assets/coming-soon.jpg",
          detail: {
            overview: "Bespoke pieces for F's original soccer tactics board, designed to represent their team.",
            role: "Briefing / form design / 3D-printed fabrication",
            body: "Pieces were easy to identify by color and role, sized to feel comfortable in the hand, and finished to a level where the coach could use them straight out of the box. Small-batch variation was handled flexibly.",
          },
        },
        {
          id: "creator-y",
          num: "04", client: "Creator Y", sector: "Creator", year: "2026", tag: "Product",
          desc: "Novelty production for an exhibition.",
          image: "assets/coming-soon.jpg",
          detail: {
            overview: "Novelties for Creator Y's exhibition, produced in a small-batch but varied run.",
            role: "Form proposal / material selection / 3D-printed fabrication / finishing",
            body: "To preserve the artist's signature while avoiding a mass-produced feel, each piece was generated with subtle variation. Size and finish were tuned for the venue, and the run worked both as give-aways and for sale.",
          },
        },
        {
          id: "interior-o",
          num: "05", client: "Interior & Lifestyle O", sector: "Interior", year: "2026", tag: "Q-CUBE",
          desc: "In-store retail of Q-CUBE as gift items.",
          image: "assets/coming-soon.jpg",
          detail: {
            overview: "Q-CUBE began retail at Interior & Lifestyle store O, repositioned as a gift item.",
            role: "Product adaptation / packaging / small-batch production",
            body: "Colors, sizes, and packaging were redesigned for gifting. The scan destination is part of the gift — the product carries meaning for both the giver and the recipient.",
          },
        },
        {
          id: "cafe-i",
          num: "06", client: "Coffee roaster I", sector: "Cafe", year: "2025", tag: "Prototyping",
          desc: "Prototyping for an original coffee dripper project.",
          image: "assets/cafe-i.jpg",
          detail: {
            overview: "Prototyping partner for roaster I's original coffee dripper.",
            role: "Form exploration / prototype fabrication / brewing validation support",
            body: "Rib geometry, spout shape, and overall balance were iterated in short cycles through 3D printing. Make → brew → adjust — keeping the loop tight let us steadily close in on a shape ready for product.",
          },
        },
        {
          id: "bridal-w",
          num: "07", client: "Bridal venue W", sector: "Bridal", year: "2026", tag: "Art Panel",
          desc: "Welcome art panel for a bridal venue entrance lobby.",
          image: "assets/coming-soon.jpg",
          detail: {
            overview: "An art panel was designed and installed in the entrance lobby of bridal venue W — panels of light and shadow shifting as guests arrive.",
            role: "Space brief / pattern design / 3D fabrication / installation",
            body: "The brief was to build a sense of occasion into the very first space couples and guests enter. The pattern was designed from scratch to match the venue's atmosphere.",
          },
        },
        {
          id: "hotel-h",
          num: "08", client: "Hotel H", sector: "Hospitality", year: "2026", tag: "Art Panel",
          desc: "Continuous art panel installation along a guest-room corridor.",
          image: "assets/coming-soon.jpg",
          detail: {
            overview: "A run of connected art panels was installed along a guest-floor corridor at Hotel H.",
            role: "Design direction / panel fabrication / modular installation",
            body: "The goal was to make the corridor itself part of the stay — light and shadow shifting as guests walk through. Modular panels covered the full wall run.",
          },
        },
        {
          id: "apparel-c",
          num: "09", client: "Apparel brand C", sector: "Retail", year: "2026", tag: "Q-CUBE",
          desc: "Q-CUBE placement in a pop-up store setting.",
          image: "assets/coming-soon.jpg",
          detail: {
            overview: "Q-CUBE was placed inside apparel brand C's pop-up store, produced in the brand's signature color.",
            role: "Color customization / small-batch production / installation support",
            body: "The goal was to drive SNS follows and online store traffic. The cube was produced in brand color and positioned where shoppers would naturally reach for it.",
          },
        },
      ],
    },
  },

  value: {
    jp: {
      eyebrow: "N—06 / VALUE",
      title: "大切にすること",
      lead: "違いに気づき、つくることで価値に変える。NOTICが日々の判断で大切にしている姿勢です。",
      items: [
        {
          num: "V—01",
          title: "掛け算で、可能性を拡張する。",
          body: "違いを活かすことで「掛け算」が始まる。\n異なる専門性・視点・背景を持つ人との出会いを大切にし、\nひとりでは届かない場所へ、一緒にたどり着く。",
          enTitle: "Multiply possibilities.",
          enBody: "Difference is where the multiplication begins.\nWe value every encounter — different skills, perspectives, backgrounds —\nand reach places together that neither of us could alone.",
        },
        {
          num: "V—02",
          title: "ひらめきを大切に。（Notice）",
          body: "気づくことで始まる。\n小さな違和感を見逃さず、そこからアイデアを引き出す。\n常に独創的で、オリジナルであり続ける。",
          enTitle: "Stay curious. Notice.",
          enBody: "We believe everything starts with noticing.\nWe don’t let small frictions pass — we pull ideas from them.\nAlways original. Always our own.",
        },
        {
          num: "V—03",
          title: "つくることで、解決する。（Create）",
          body: "かたちのある価値を届けたい。\n実体のないものではなく、手に取れる、体験できる、\n本当に意味のあるものをつくることで、\nお客様とエンドユーザー、双方を幸せにする。",
          enTitle: "Solve it by making.",
          enBody: "We want to deliver value you can hold.\nNot intangible promises — but things you can touch, experience, and believe in.\nMade well enough to make both our clients and their users genuinely happy.",
        },
      ],
      cta: "Valueページへ",
    },
    en: {
      eyebrow: "N—06 / VALUE",
      title: "What we value",
      lead: "By noticing differences and shaping them through making, we turn friction into real value.",
      items: [
        {
          num: "V—01",
          title: "Multiply possibilities.",
          body: "Difference is where the multiplication begins.\nWe value every encounter — different skills, perspectives, backgrounds —\nand reach places together that neither of us could alone.",
          enTitle: "Multiply possibilities.",
          enBody: "Difference is where the multiplication begins.\nWe value every encounter — different skills, perspectives, backgrounds —\nand reach places together that neither of us could alone.",
        },
        {
          num: "V—02",
          title: "Stay curious. Notice.",
          body: "We believe everything starts with noticing.\nWe don’t let small frictions pass — we pull ideas from them.\nAlways original. Always our own.",
          enTitle: "Stay curious. Notice.",
          enBody: "We believe everything starts with noticing.\nWe don’t let small frictions pass — we pull ideas from them.\nAlways original. Always our own.",
        },
        {
          num: "V—03",
          title: "Solve it by making.",
          body: "We want to deliver value you can hold.\nNot intangible promises — but things you can touch, experience, and believe in.\nMade well enough to make both our clients and their users genuinely happy.",
          enTitle: "Solve it by making.",
          enBody: "We want to deliver value you can hold.\nNot intangible promises — but things you can touch, experience, and believe in.\nMade well enough to make both our clients and their users genuinely happy.",
        },
      ],
      cta: "Go to Value page",
    },
  },

  members: {
    jp: {
      eyebrow: "N—01.5 / MEMBERS",
      title: "わたしたち",
      sideLabel: "チーム紹介",
      sideBody: "NOTICは、それぞれ異なる専門領域を持つメンバーが集まる、\n滋賀発の小さなクリエイティブチームです。",
      members: [
        {
          id: "yosei-usami",
          name: "Yosei Usami",
          role: "Co-founder / Design Director",
          bio: "",
          image: "",
        },
        {
          id: "seigo-kuriyama",
          name: "Seigo Kuriyama",
          role: "Co-founder / Director of Business",
          bio: "",
          image: "",
        },
        {
          id: "reo-kinjo",
          name: "Reo Kinjo",
          role: "Director of Engineer",
          bio: "",
          image: "",
        },
        {
          id: "kengo-kojima",
          name: "Kengo Kojima",
          role: "Designer / Sales",
          bio: "",
          image: "",
        },
        {
          id: "yugo-umezu",
          name: "Yugo Umezu",
          role: "Director of Visualization",
          bio: "",
          image: "",
        },
        {
          id: "aguri-endo",
          name: "Aguri Endo",
          role: "Designer / Architect",
          bio: "",
          image: "",
        },
        {
          id: "madoka-inoue",
          name: "Madoka Inoue",
          role: "Designer / Architect",
          bio: "",
          image: "",
        },
        {
          id: "masaya-tanaka",
          name: "Masaya Tanaka",
          role: "Engineer",
          bio: "",
          image: "",
        },
        {
          id: "misaki-wada",
          name: "Misaki Wada",
          role: "Marketer",
          bio: "",
          image: "",
        },
      ],
    },
    en: {
      eyebrow: "N—01.5 / MEMBERS",
      title: "Us",
      sideLabel: "TEAM",
      sideBody: "NOTIC is a small creative team based in Shiga,\nbringing together members with different disciplines.",
      members: [
        {
          id: "yosei-usami",
          name: "Yosei Usami",
          role: "Co-founder / Design Director",
          bio: "",
          image: "",
        },
        {
          id: "seigo-kuriyama",
          name: "Seigo Kuriyama",
          role: "Co-founder / Director of Business",
          bio: "",
          image: "",
        },
        {
          id: "reo-kinjo",
          name: "Reo Kinjo",
          role: "Director of Engineer",
          bio: "",
          image: "",
        },
        {
          id: "kengo-kojima",
          name: "Kengo Kojima",
          role: "Designer / Sales",
          bio: "",
          image: "",
        },
        {
          id: "yugo-umezu",
          name: "Yugo Umezu",
          role: "Director of Visualization",
          bio: "",
          image: "",
        },
        {
          id: "aguri-endo",
          name: "Aguri Endo",
          role: "Designer / Architect",
          bio: "",
          image: "",
        },
        {
          id: "madoka-inoue",
          name: "Madoka Inoue",
          role: "Designer / Architect",
          bio: "",
          image: "",
        },
        {
          id: "masaya-tanaka",
          name: "Masaya Tanaka",
          role: "Engineer",
          bio: "",
          image: "",
        },
        {
          id: "misaki-wada",
          name: "Misaki Wada",
          role: "Marketer",
          bio: "",
          image: "",
        },
      ],
    },
  },

  about_cta: {
    jp: { label: "メンバーを見る", arrow: "→" },
    en: { label: "Meet the team", arrow: "→" },
  },

  contact: {
    jp: {
      eyebrow: "N—05 / CONTACT",
      title: "お気づきのことを、\n聞かせてください。",
      body: "課題・構想・雑談、いずれも歓迎します。",
      email: "contact@notic.jp",
      reply: "通常、2営業日以内にご返信いたします。",
      cta: "メールを送る →",
      info: [
        { label: "所在地", value: "〒525-8577 滋賀県草津市野路東1-1-1 立命館大学BKC Startup Lounge" },
        { label: "営業時間", value: "10:00 - 18:00（土日祝を除く）" },
      ],
    },
    en: {
      eyebrow: "N—05 / CONTACT",
      title: "Tell us what\nyou've noticed.",
      body: "Briefs, ideas, or a quick conversation — all welcome.",
      email: "contact@notic.jp",
      reply: "We usually reply within 2 business days.",
      cta: "Send an email →",
      info: [
        { label: "Address", value: "〒525-8577 滋賀県草津市野路東1-1-1 立命館大学BKC Startup Lounge" },
        { label: "Hours", value: "10:00 - 18:00 (Mon–Fri)" },
      ],
    },
  },

  footer: {
    jp: {
      copy: "© 2026 NOTIC",
      socialLinks: [
        { label: "Instagram", href: "https://www.instagram.com/notice_and_create?igsh=MWV4ajhseGxmejdscg%3D%3D&utm_source=qr" },
        { label: "X (Twitter)", href: "https://x.com/awai_design_?s=21&t=DH1af4BUA8x3-h0il-2lWQ" },
      ],
      legalLinks: [
        { label: "プライバシーポリシー", href: "privacy-policy.html" },
        { label: "利用規約", href: "terms.html" },
        { label: "特定商取引法に基づく表記", href: "commercial-transactions.html" },
      ],
    },
    en: {
      copy: "© 2026 NOTIC",
      socialLinks: [
        { label: "Instagram", href: "https://www.instagram.com/notice_and_create?igsh=MWV4ajhseGxmejdscg%3D%3D&utm_source=qr" },
        { label: "X (Twitter)", href: "https://x.com/awai_design_?s=21&t=DH1af4BUA8x3-h0il-2lWQ" },
      ],
      legalLinks: [
        { label: "Privacy Policy", href: "privacy-policy.html" },
        { label: "Terms of Service", href: "terms.html" },
        { label: "Legal Notice", href: "commercial-transactions.html" },
      ],
    },
  },
};

window.CONTENT = CONTENT;
