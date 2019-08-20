import { resolve } from "url";
import { reject } from "q";

const state = ({
  logType: false,
});
const getters = {
  include: (state) => (val) => {
    return state.list.indexOf(val) > -1;
  }
}
  ;
const mutations = {
  SET_VALUE(state, value) {
    state.logType = value;
  }
};
const actions = {
  async getInfo({ state, commit }, val) {
    var _this = this._vm
    _this.$Loading.start();
    return new Promise((resolve,reject)=>{
      this.$axios({
        url: "https://www.easy-mock.com/mock/5c1c59326fedb679d1b94a74/hwp-h5/code",
        method: "post",
        data: val
      })
        .then(response => {
          _this.$Message.success("登陆成功");
          _this.$Loading.finish();
          this.$router.push('/testProject/home/edit')
        })
        .catch(response => {
          console.log("error", response);
          _this.$Loading.error();
        });
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};