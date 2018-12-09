import * as moment from "moment";

export interface ButtonInterface {
  "file-name": string;
  value: string;
}

/**
 * @example
 * ```json
 * [ // 1つの配信ごとに、1要素
 *   [ // 1行ごとに、1要素
 *     // ここの下にある複数の配列は、1つの配列にマージする。
 *     [ // 1つのボタンごとに、1要素
 *        { "file-name": "せんせえとないしょばなし/10..9..8..7", "value": "10..9..8..7" },
 *        { "file-name": "せんせえとないしょばなし/6..5..4", "value": "6..5..4" },
 *        { "file-name": "せんせえとないしょばなし/5..4..3", "value": "5..4..3" },
 *     ],
 *     [
 *       {"file-name": "せんせえとないしょばなし/ドワンゴさん？","value": "ドワンゴのお仕事"}
 *     ]
 *   ],
 *   [
 *     [
 *       { "file-name": "てすと/ありがとナス！", "value": "ありがとなす！" }
 *     ]
 *   ]
 * ]
 * ```
 */
export type ButtonsInterface = ButtonInterface[][][];
export type UpdatedListInterface = Map<string, moment.Moment>;

export default interface SanabuttonClientInterface {
  buttons(): Promise<ButtonsInterface>;
  updatedList(): Promise<UpdatedListInterface>;
}
