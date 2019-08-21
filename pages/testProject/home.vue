<template>
  <div class="home-page">
    <leftTab @changePageSet="changePage($event)"></leftTab>
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
      pageContent:{},
    };
  },
  methods: {
    toPath(val) {
      this.$router.push(val);
    },
    changePage(val) {
      console.log("val", val);
      this.pageContent = val;
      this.$router.push('/testProject/home/detailPage')
    }
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
