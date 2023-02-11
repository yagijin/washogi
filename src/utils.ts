import type { 駒, 成駒, 横符号, 縦符号, index, 盤 } from "./types";

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

export const マスを盤から取り出す = (
  盤: 盤,
  位置: [横符号, 縦符号] | [index, index]
) => {
  if (typeof 位置[0] === "string") {
    const index = 符号をindexに変換(位置);
    return 盤[index[0]][index[1]];
  } else {
    return 盤[位置[0]][位置[1]];
  }
};

const 駒 = [
  "歩兵",
  "香車",
  "桂馬",
  "金将",
  "銀将",
  "角行",
  "飛車",
  "王将",
  "玉将",
];

const 成駒 = ["と金", "成香", "成桂", "成銀", "龍馬", "龍王"];

export const 成駒かどうか = (駒: 駒 | 成駒) => {
  return 成駒.includes(駒);
};
