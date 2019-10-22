/**
 * 用于解析查询串的反向操作
 *
 * @param {object} obj 传入的对象
 * @returns {string} 对象转换后的字符串
 */

export default function(obj: object): string {
  if (Object.keys(obj).length === 0) return '';
  return (
    '?' +
    Object.entries(obj)
      .map(item => item.join('='))
      .join('&')
  );
}
