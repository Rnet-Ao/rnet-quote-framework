/**
 * dom查询封装, 返回dom数组
 *
 * @param {string} selector 查询dom的定位符
 * @returns {array} 返回查询到的dom
 */

export default function(selector: string): HTMLElement[] {
  if (!selector) {
    return [];
  }
  let arrEle: HTMLElement[] = [];
  if (document.querySelectorAll) {
    // 在 IE 11 及其以下版本，NodeList是没有类似于 Array 的方法，如 forEach
    // 因此在此处需要强制将 NodeList 转换成数组
    arrEle = Array.from(document.querySelectorAll(selector));
  } else {
    const oAll: HTMLCollectionOf<
      HTMLDivElement
    > = document.getElementsByTagName('div');
    const lAll: number = oAll.length;
    if (lAll) {
      for (let i = 0; i < lAll; i++) {
        if (/^\./.test(selector)) {
          if (oAll[i].className === selector.replace('.', '')) {
            arrEle.push(oAll[i]);
          }
        } else if (/^#/.test(selector)) {
          if (oAll[i].id === selector.replace('#', '')) {
            arrEle.push(oAll[i]);
          }
        }
      }
    }
  }
  return arrEle;
}
