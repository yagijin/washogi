export type 駒 =
  | "歩兵"
  | "香車"
  | "桂馬"
  | "金将"
  | "銀将"
  | "角行"
  | "飛車"
  | "王将"
  | "玉将";

export type 成駒 = "と金" | "成香" | "成桂" | "成銀" | "龍馬" | "龍王";

export const どの駒に成るのか = (駒: any): 成駒 | undefined => {
  switch (駒) {
    case "歩兵":
      return "と金";
    case "香車":
      return "成香";
    case "桂馬":
      return "成桂";
    case "銀将":
      return "成銀";
    case "角行":
      return "龍馬";
    case "飛車":
      return "龍王";
    default:
      return undefined;
  }
};

export type プレイヤー = "先手" | "後手";

export type マス = { 駒: 駒 | 成駒; 持ち主: プレイヤー } | undefined;

// todo: いい感じに書く
export type 盤 = [
  [マス, マス, マス, マス, マス, マス, マス, マス, マス],
  [マス, マス, マス, マス, マス, マス, マス, マス, マス],
  [マス, マス, マス, マス, マス, マス, マス, マス, マス],
  [マス, マス, マス, マス, マス, マス, マス, マス, マス],
  [マス, マス, マス, マス, マス, マス, マス, マス, マス],
  [マス, マス, マス, マス, マス, マス, マス, マス, マス],
  [マス, マス, マス, マス, マス, マス, マス, マス, マス],
  [マス, マス, マス, マス, マス, マス, マス, マス, マス],
  [マス, マス, マス, マス, マス, マス, マス, マス, マス]
];

export type 持ち駒 = { 先手: 駒[]; 後手: 駒[] };

export type ゲーム = {
  盤: 盤;
  持ち駒: 持ち駒;
  手番: プレイヤー;
};

export type 横符号 = "9" | "8" | "7" | "6" | "5" | "4" | "3" | "2" | "1";

export type 縦符号 =
  | "一"
  | "二"
  | "三"
  | "四"
  | "五"
  | "六"
  | "七"
  | "八"
  | "九";

export type 手 =
  | "投了"
  | "宣言"
  | {
      移動元: [横符号, 縦符号];
      移動先: [横符号, 縦符号];
      成り: boolean;
    };

type index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
const 横符号: 横符号[] = ["9", "8", "7", "6", "5", "4", "3", "2", "1"];
const 縦符号: 縦符号[] = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];

export const 符号をindexに変換 = (
  indices: [横符号, 縦符号]
): [index, index] => {
  return [
    横符号.findIndex((val) => val === indices[0]) as index,
    縦符号.findIndex((val) => val === indices[1]) as index,
  ];
};

export const indexを符号に変換 = (
  indices: [index, index]
): [横符号, 縦符号] => {
  return [横符号[indices[0]], 縦符号[indices[1]]];
};

export const 初期配置: ゲーム = {
  盤: [
    [
      { 駒: "香車", 持ち主: "後手" },
      { 駒: "桂馬", 持ち主: "後手" },
      { 駒: "銀将", 持ち主: "後手" },
      { 駒: "金将", 持ち主: "後手" },
      { 駒: "王将", 持ち主: "後手" },
      { 駒: "金将", 持ち主: "後手" },
      { 駒: "銀将", 持ち主: "後手" },
      { 駒: "桂馬", 持ち主: "後手" },
      { 駒: "香車", 持ち主: "後手" },
    ],
    [
      undefined,
      { 駒: "飛車", 持ち主: "後手" },
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      { 駒: "角行", 持ち主: "後手" },
      undefined,
    ],
    [
      { 駒: "歩兵", 持ち主: "後手" },
      { 駒: "歩兵", 持ち主: "後手" },
      { 駒: "歩兵", 持ち主: "後手" },
      { 駒: "歩兵", 持ち主: "後手" },
      { 駒: "歩兵", 持ち主: "後手" },
      { 駒: "歩兵", 持ち主: "後手" },
      { 駒: "歩兵", 持ち主: "後手" },
      { 駒: "歩兵", 持ち主: "後手" },
      { 駒: "歩兵", 持ち主: "後手" },
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      { 駒: "歩兵", 持ち主: "先手" },
      { 駒: "歩兵", 持ち主: "先手" },
      { 駒: "歩兵", 持ち主: "先手" },
      { 駒: "歩兵", 持ち主: "先手" },
      { 駒: "歩兵", 持ち主: "先手" },
      { 駒: "歩兵", 持ち主: "先手" },
      { 駒: "歩兵", 持ち主: "先手" },
      { 駒: "歩兵", 持ち主: "先手" },
      { 駒: "歩兵", 持ち主: "先手" },
    ],
    [
      undefined,
      { 駒: "角行", 持ち主: "先手" },
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      { 駒: "飛車", 持ち主: "先手" },
      undefined,
    ],
    [
      { 駒: "香車", 持ち主: "先手" },
      { 駒: "桂馬", 持ち主: "先手" },
      { 駒: "銀将", 持ち主: "先手" },
      { 駒: "金将", 持ち主: "先手" },
      { 駒: "王将", 持ち主: "先手" },
      { 駒: "金将", 持ち主: "先手" },
      { 駒: "銀将", 持ち主: "先手" },
      { 駒: "桂馬", 持ち主: "先手" },
      { 駒: "香車", 持ち主: "先手" },
    ],
  ],
  持ち駒: { 先手: [], 後手: [] },
  手番: "先手",
};
