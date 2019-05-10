import { getUserInfo } from 'common/getUser'
const actions = {
  userLogin: ({commit}, userData) => commit('userLogin', userData), /* 用户信息存储 */
  getUserInfo: ({commit}) => { // 检验是否登录请求
    return getUserInfo()
  }
}
export default actions
