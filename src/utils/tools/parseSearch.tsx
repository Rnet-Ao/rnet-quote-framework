/**
 * 解析查询串转换为对象
 *
 * @param {string} str 传入的查询串
 * @returns {object} 解析后的对象
 */

export default function(param: string): object {
  const str: string = param.replace('?', '');
  const search: { [key: string]: string } = {};
  if (str !== '') {
    str.split('&').forEach(item => {
      const [key, val] = item.split('=');
      search[key] = val;
    });
  }
  return search;
}
