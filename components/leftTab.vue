<template>
  <div class="left-page" :style="{opacity:leftPageOp}">
    <Menu mode="horizontal" theme="light" accordion>
      <Row>
        <Col :span="colNum">
          <Dropdown trigger="click" @on-click="changePage" style="margin-left: 20px">
            <a href="javascript:void(0)" class="title-box">{{title}}</a>
            <DropdownMenu slot="list" v-if="titleList">
              <DropdownItem v-for="(item,index) in titleList" :key="index" :name="index">{{item}}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <div :class="['pull-btn',!showUser?'ani':'']" v-if="!this.IsPC" @click="showMenu">
          <Icon size="14" color="#bbbdda" v-show="showUser" type="ios-arrow-forward" />
          <Icon size="28" color="#bbbdda" v-show="!showUser" type="ios-arrow-back" />
        </div>
        <Col span="14" class="user-list" v-if="showUser">
          <Dropdown trigger="click" @on-click="changeBtn">
            <a href="javascript:void(0)">
              <div class="user-btn-box">
                <img class="photo-btn" src="~assets/images/photo.jpeg" />
                <strong>污妖王</strong>
              </div>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="1">
                <div class="user-info">
                  <strong>污妖王</strong>
                  <div class="user-level">管理员</div>
                </div>
              </DropdownItem>
              <DropdownItem name="signOut">
                <div class="sign-out">
                  <Icon type="ios-log-out" />
                  <span class="out-word">退出登陆</span>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button class="edit-btn" size="small" type="primary" shape="circle" @click="toEdit">
            <Icon type="ios-paw-outline" />写文章
          </Button>
        </Col>
      </Row>
    </Menu>
  </div>
</template>
<script>
export default {
  props: ["titleList"],
  data() {
    return {
      index: "",
      cliShow: false,
      IsPC: false,
      leftPageOp:1,
    };
  },
  computed: {
    title() {
      if (this.index !== "") {
        return this.titleList[this.index];
      } else {
        return "文章列表";
      }
    },
    showUser() {
      return this.cliShow || this.IsPC;
    },
    colNum() {
      if (this.showUser) {
        return "10";
      } else {
        return "24";
      }
    }
  },
  mounted() {
    this.IsPC = this.$utils.IsPC();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); //清除屏幕滚动监听
  },
  methods: {
    changeBtn(name) {
      if (name == "signOut") {
        this.$router.replace("/testProject/logIn");
      }
    },
    changePage(name) {
      this.index = name;
      this.$emit("changePageSet", this.index);
    },
    toEdit() {
      this.$router.push("/testProject/home/edit");
    },
    showMenu() {
      this.cliShow = !this.cliShow;
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if(scrollTop!=0){
        this.leftPageOp = 1 - (scrollTop / 60) 
      }else{
        this.leftPageOp = 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.left-page {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  .ivu-col {
    height: 60px;
  }
  .title-box {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .user-info {
    strong {
      font-size: 18px;
      &::before {
        content: "";
        display: inline-block;
        background: url("~assets/images/photo.jpeg") no-repeat;
        background-size: 100% 100%;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        vertical-align: -7px;
        margin: 0 3px 0 0;
      }
    }
    .user-level {
      margin-top: 4px;
      font-size: 12px;
    }
  }
  .sign-out {
    .out-word {
      display: inline-block;
      margin-left: 4px;
      font-size: 13px;
    }
  }
  .user-btn-box {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
    .photo-btn {
      display: block;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .user-list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .edit-btn {
    margin: 0 40px 0 20px;
  }
  .pull-btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    right: 0px;
    width: 40px;
    height: 40px;
    background: none;
    z-index: 1000;
    transform: translateY(-50%);
  }
  .ani {
    animation: test linear infinite 0.5s;
  }
  @keyframes test {
    0% {
      top: 40%;
    }
    50% {
      top: 50%;
    }
    100% {
      top: 40%;
    }
  }
}
</style>
