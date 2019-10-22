/**
 * 将px单位值转换成rem单位值
 *
 * @param {number} value px单位值
 * @returns {number} rem单位值
 */

export default function(value: number): number {
  return value / (window as any).baseFontSize;
}
