// ブランドの文言・商品・価格をここに集約しています。
// 文言や価格の変更は、原則このファイルの編集だけで完結します。

export const site = {
  name: "オフを贈ろう",
  tagline: "オフを贈ろう",
  subcopy: "頑張ったあなたに、頑張ったあの人に。",
};

export const hero = {
  note: "灯りをひとつ点けたら、今日はもう、つながらなくていい。",
  cta: "発売のお知らせを受け取る",
  ctaHref: "#newsletter",
  image: {
    src: "/images/hero.svg",
    alt: "蓋のくぼみにキャンドルを灯した木箱。中ではスマートフォンが眠っている",
  },
};

export const question = {
  label: "CONCEPT",
  title: ["一日の終わりも、", "画面の中にいませんか。"],
  body: [
    "仕事を終えて、家に着いて、湯船に浸かっても。",
    "手のひらの小さな光を、私たちはなかなか手放せません。",
    "誰かがくれる「もう休んでいいよ」の合図が、",
    "たぶん、必要なのだと思います。",
  ],
};

export const threeActs = {
  label: "ONE NIGHT, THREE ACTS",
  title: "夜に、三つの幕を。",
  lead: "「オフを贈ろう」が贈るのは、モノではなく、帰宅から眠りまでのひと晩の体験です。",
  acts: [
    {
      act: "第一幕",
      name: "帰宅",
      description:
        "玄関で靴を脱いだら、お香を一本。今日の続きではなく、今夜のはじまりの合図です。",
    },
    {
      act: "第二幕",
      name: "入浴",
      description:
        "バスソルトを湯に溶かして、少し長めのひとり時間。明日の予定は、湯気の向こうに置いておく。",
    },
    {
      act: "第三幕",
      name: "就寝",
      description:
        "キャンドルの灯りだけで、ハーブティーを一杯。灯りが揺れるあいだ、世界はあなたを呼びません。",
    },
  ],
};

export const products = {
  label: "CONTENTS",
  title: "箱の中身",
  lead: "夜のための道具を、少しずつ。どれも単品でも贈れます。",
  items: [
    {
      name: "バスソルト",
      en: "Bath Salt",
      price: "¥1,320",
      description: "湯船に沈める、ひとつまみの休符。ラベンダーと檜の香り。",
      image: {
        src: "/images/product-bathsalt.svg",
        alt: "ガラス瓶に入ったバスソルト",
      },
    },
    {
      name: "お香",
      en: "Incense",
      price: "¥1,540",
      description: "一本、およそ二十分。燃え尽きるまでが、今夜への助走です。",
      image: {
        src: "/images/product-incense.svg",
        alt: "香立てに置かれた一本のお香",
      },
    },
    {
      name: "キャンドル",
      en: "Candle",
      price: "¥2,420",
      description:
        "スマホを眠らせる箱の上で灯す、夜の主役。およそ二時間の灯り。",
      image: {
        src: "/images/product-candle.svg",
        alt: "小ぶりなキャンドル",
      },
    },
    {
      name: "ハーブティー",
      en: "Herb Tea",
      price: "¥1,650",
      description:
        "カフェインは入っていません。眠る前の一杯のためだけの配合です。",
      image: {
        src: "/images/product-tea.svg",
        alt: "ハーブティーの缶とカップ",
      },
    },
    {
      name: "ガイドの栞",
      en: "Guide",
      price: "セットに同梱",
      description: "今夜の過ごし方を綴った、小さな道しるべ。",
      image: {
        src: "/images/product-guide.svg",
        alt: "紐のついた紙の栞",
      },
    },
  ],
};

export const sleepBox = {
  label: "SIGNATURE",
  title: "スマホを、眠らせる箱。",
  lead: "このブランドの、いちばん静かな発明です。",
  description:
    "蓋のくぼみは、キャンドルの定位置。灯りをともせば、箱はもう開けられません。意思の力ではなく、小さな灯りが、あなたとスマホのあいだにそっと立ってくれます。",
  steps: [
    { title: "しまう", text: "今日のスマホを、おやすみの位置へ。" },
    { title: "灯す", text: "蓋のくぼみに、キャンドルをひとつ。" },
    { title: "離れる", text: "灯りが揺れるあいだは、あなたの時間。" },
  ],
  image: {
    src: "/images/sleep-box.svg",
    alt: "蓋のくぼみにキャンドルを置いた木箱の断面図",
  },
};

export const shiori = {
  label: "GUIDE",
  title: "今夜の過ごし方は、栞にまかせて。",
  body: [
    "すべてのセットに、一枚の栞が入っています。",
    "「湯船では、目を閉じて十まで数える」「ティーカップは、両手で持つ」。",
    "指示ではなく、提案として。今夜をどう過ごすか考えなくていいことも、贈りもののうちだと思うのです。",
  ],
  note: "栞は、季節ごとに書き下ろされます。",
};

export const plans = {
  label: "GIFT SETS",
  title: "贈りかたは、三つ。",
  note: "価格はすべて税込・予定価格です。",
  items: [
    {
      name: "ひと品から",
      price: "¥1,000〜3,000",
      description:
        "バスソルトやお香を一品ずつ。小さなお礼や、ちょっとした労いに。",
      features: ["お好きな単品ひとつ", "ギフト包装", "メッセージカード"],
      featured: false,
    },
    {
      name: "箱と、ひと晩",
      price: "¥3,000〜5,000",
      description:
        "スマホを眠らせる箱と、選べる一品。はじめての「オフ」の贈りものに。",
      features: ["スマホを眠らせる箱", "選べる単品ひとつ", "ガイドの栞"],
      featured: false,
    },
    {
      name: "まるごと、オフ",
      price: "¥8,000〜10,000",
      description:
        "箱と、夜の三幕のすべて。大切な人の、特別なひと晩のために。",
      features: [
        "スマホを眠らせる箱",
        "バスソルト・お香・キャンドル・ハーブティー",
        "ガイドの栞（季節の書き下ろし）",
      ],
      featured: true,
    },
  ],
};

export const scenes = {
  label: "OCCASIONS",
  title: "贈るのに、理由はいりません。",
  items: [
    { title: "お礼に", text: "「ありがとう」に、休息を添えて。" },
    { title: "労いに", text: "大きな仕事を終えた、あの人へ。" },
    { title: "誕生日に", text: "モノより、静かな夜をひとつ。" },
    { title: "自分に", text: "誰かを待たなくても、いいのです。" },
  ],
};

export const newsletter = {
  label: "NEWSLETTER",
  title: "発売のお知らせを、静かにお届けします。",
  body: "準備が整ったら、メールを一通だけお送りします。夜のじゃまはしません。",
  placeholder: "メールアドレス",
  button: "お知らせを受け取る",
  success: "ありがとうございます。発売の折に、一通だけお送りします。",
  privacy: "ご登録のアドレスは、発売のお知らせ以外には使いません。",
};

export const footer = {
  brand: site.name,
  copyright: `© ${new Date().getFullYear()} オフを贈ろう`,
  sns: [
    { label: "Instagram", href: "#" },
    { label: "X", href: "#" },
  ],
};
