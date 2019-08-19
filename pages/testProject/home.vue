<template>
  <div class="home-page">
    <leftTab :option="option" @toPath="toPath($event)"></leftTab>
    <div class="main-body">
      <nuxt-child keep-alive></nuxt-child>
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
      option: {
        "1": {
          content: "阿里云服务器学习",
          type: "ios-paper",
          menu: [
            {
              id: "1-1",
              co: "vue项目部署",
              path: "/testProject/home/test1"
            },
            {
              id: "1-2",
              co: "pm2使用",
              path: "/testProject/home/test2"
            },
            {
              id: "1-3",
              co: "服务器node版本升级",
              path: "/testProject/home/test3"
            },
            {
              id: "1-4",
              co: "nuxt 项目部署到服务器",
              path: "/testProject/home/test4"
            },
            {
              id: "1-5",
              co: "markDown编辑器",
              path: "/testProject/home/edit"
            }
          ]
        },
        "2": {
          content: "用户管理",
          type: "ios-people",
          menu: [
            {
              id: "2-1",
              co: "新增用户"
            },
            {
              id: "2-2",
              co: "活跃用户"
            }
          ]
        },
        "3": {
          content: "统计分析",
          type: "ios-stats",
          menu1: [
            {
              menuTitle: "使用",
              menuList: [
                {
                  id: "3-1",
                  co: "新增和启动"
                },
                {
                  id: "3-2",
                  co: "活跃分析"
                },
                {
                  id: "3-3",
                  co: "时段分析"
                }
              ]
            },
            {
              menuTitle: "留存",
              menuList: [
                {
                  id: "3-4",
                  co: "用户留存"
                },
                {
                  id: "3-5",
                  co: "流失用户"
                }
              ]
            }
          ]
        }
      }
    };
  },
  methods: {
    toPath(val) {
      this.$router.push(val);
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
