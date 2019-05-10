const mutations = {
  userLogin (state, userData) {
    userData.privilege = userData.privilege.split(',')
    userData.template_ids = userData.template_ids.split(',')
    state.userInfo = Object.assign({}, state.userInfo, userData)
  },
  navList (state, navList) {
    state.navList = navList
  }
}
export default mutations
