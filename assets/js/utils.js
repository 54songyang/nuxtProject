/*
 * @Author: songyang 
 * @Date: 2019-08-14 20:05:51 
 * @Desc: 全局公共方法
 * @Last Modified by: songyang
 * @Last Modified time: 2019-08-20 16:14:03
 */

export default {
  /**
   * 设置cookie
   * @param {String} name cookie键名
   * @param {String} value cookie键值
   * @param {String} day cookie失效日期
   */
  setCookie: function (name, value, day) {
    var date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = name + '=' + value + ';expires=' + date;
  },
  /**
   * 获取cookie
   * @param {String} name cookie键名
   */
  getCookie: function (name) {
    var reg = RegExp(name + '=([^;]+)');
    var arr = document.cookie.match(reg);
    if (arr) {
      return arr[1];
    } else {
      return '';
    }
  },
  /**
   * 删除cookie
   * @param {String} name 键名
   */
  delCookie: function (name) {
    this.setCookie(name, null, -1);
  },
  /**
   * 判断是否是pc端打开
   */
  IsPC: function () {
    let userAgentInfo = navigator.userAgent;
    let Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
    return !Agents.some(el => {
      return userAgentInfo.indexOf(el) > 0
    })
  }
}