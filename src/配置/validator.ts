import type { ゲーム, 局面, 手 } from "../types";
import {
  符号をindexに変換,
  成駒かどうか,
  マスを盤から取り出す,
} from "../utils";

export const validate = (ゲーム: ゲーム, 局面: 局面, 手: 手) => {
  // 投了の場合、終了
  if (手 === "投了") {
    return;
  }

  // 宣言の判定
  if (手 === "宣言") {
    // Todo
    return;
  }
  // 王手放置の判定: TODO
  // 王手になる場所へのコマの移動の判定

  // 自分の駒がある場所かどうか
  const 移動マス = マスを盤から取り出す(局面.盤, 手.移動先);
  if (移動マス?.持ち主 === 手.手番) {
    return { 反則: "自分の駒の場所に駒を打つことはできません" };
  }
  // その後、移動できない場所へは駒を移動できない
  const text = "その後に移動できない場所へは駒を移動できない";
  switch (手.駒) {
    case "歩兵":
    case "香車":
      if (手.成り) break;
      if (手.手番 == "先手" && 手.移動先[1] === "一") return { 反則: text };
      if (手.手番 == "後手" && 手.移動先[1] === "九") return { 反則: text };
      break;
    case "桂馬":
      if (手.成り) break;
      if (手.手番 == "先手" && ["一", "二"].includes(手.移動先[1]))
        return { 反則: text };
      if (手.手番 == "後手" && ["八", "九"].includes(手.移動先[1]))
        return { 反則: text };
      break;
    default:
      break;
  }

  // 二歩の判定
  if (手.駒 === "歩兵") {
    const 縦のindex = 符号をindexに変換(手.移動先)[1];
    const 二歩 =
      局面.盤.filter((横一列) => {
        横一列[縦のindex]?.持ち主 === 手.手番 &&
          横一列[縦のindex]?.駒 === "歩兵";
      }).length === 0;
    if (二歩) {
      return { 反則: "二歩です" };
    }
  }
  // 連続王手の千日手の判定
  // 千日手の判定
  // 打ち歩詰めの判定
};
