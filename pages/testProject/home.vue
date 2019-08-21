<template>
  <div class="home-page">
    <leftTab @changePageSet="changePage($event)" :titleList="titleList"></leftTab>
    <div class="main-body">
      <nuxt-child :pageContent="pageContent" keep-alive></nuxt-child>
    </div>
  </div>
</template>
<script>
import leftTab from "~/components/leftTab";
export default {
  components: {
    leftTab
  },
  data() {
    return {
      info:'',
      pageIndex:0,
      titleList:'',
    };
  },
  computed:{
    pageContent(){
      return this.info[this.pageIndex]
    },
  },
  mounted(){
    this.getInfo()
  },
  methods: {
    toPath(val) {
      this.$router.push(val);
    },
    changePage(val) {
      this.$router.push('/testProject/home/detailPage');
      this.pageIndex = val;
    },
    getInfo() {
      this.$axios({
        method: "post",
        url:
          "https://www.easy-mock.com/mock/5c1c59326fedb679d1b94a74/hwp-h5/aliyun-nuxt-detail",
        data: "123"
      })
        .then(response => {
          this.info = response.data.respBizMsg.pageContent;
          this.titleList = this.info.map(el=>{
            return el.title
          })
        })
        .catch(error => {});
    },
  }
};
</script>

<style lang="scss">
.home-page {
  .home-title {
    display: block;
    font-size: 30px;
    color: #000;
  }
  .main-body {
    position: relative;
    top: 50px;
    z-index: 998;
    padding: 20px;
    .page {
      .page-title {
        font-size: 40px;
        color: #333;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
