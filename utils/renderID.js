// 获取64个大小写字符
const get64Chars = () => {
  const chars = [];
  // 获取
  for (var i = 0; i < 25; i++) {
    let upChar = String.fromCharCode(65 + i);
    let loChar = String.fromCharCode(65 + 32 + i);
    chars.push(upChar);
    chars.push(loChar);
  }
  return chars;
}

/**
 * [组合运算]
 * @param  {array} arr [进行组合运算的数组]
 * @example [1,3,2]
 * @param  {number} num [每几个元素为一组]
 * @return {array}     [返回组合集合]
 * @example [[1,3],[1,2],[3,2]]
 */
const combo = (arr, num) => {
  let result = [];
  let range = (r, _arr) => {
    if (r.length == num) {
      result.push(r)
    } else {
      let l = r.length;
      for (var i = 0, len = _arr.length - num + l; i <= len; i++) {
        range(r.concat(_arr[i]), _arr.slice(i + 1))
      }
    }
  }
  range([], arr);
  return result;
}

/**
 * 获取随机的ID值
 * @param {*} number 第几位注册的用户
 */
const renderID = (number) => {
  let chars = get64Chars();
  let res = combo(chars, 5);
  let strArr = res[number];
  let str = '';
  for (let i = 0; i < strArr.length; i++) {
    str += strArr[i];
  }
  return str;
}

module.exports = renderID
