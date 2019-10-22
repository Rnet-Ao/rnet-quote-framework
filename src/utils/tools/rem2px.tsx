/**
 * 将rem单位值转换成px单位值
 *
 * @param {number} value rem单位值
 * @returns {number} px单位值
 */

export default function(value: number): number {
  return (window as any).baseFontSize * value;
}
