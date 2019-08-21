/*
 * @Author: songyang 
 * @Date: 2019-08-14 20:05:51 
 * @Desc: 全局公共方法
 * @Last Modified by: songyang
 * @Last Modified time: 2019-08-21 16:22:40
 */

import Vue from 'vue'
import fnObj from '~/assets/js/utils'
var utils = {
  install(Vue){
    Vue.prototype.$utils = fnObj
  }
}
Vue.use(utils)