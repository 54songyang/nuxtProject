<template>
  <div class="left-page">
    <Menu mode="horizontal" theme="light" accordion>
      <Row>
        <Col span="10">
          <Dropdown trigger="click" @on-click="changePage" style="margin-left: 20px">
            <a href="javascript:void(0)">{{title}}</a>
            <DropdownMenu slot="list" v-if="pageContent">
              <DropdownItem
                v-for="(item,index) in pageContent"
                :key="index"
                :name="index"
              >{{item.title}}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col span="14" class="user-list">
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
  data() {
    return {
      title: "阿里云学习",
      pageContent: []
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$axios({
        method: "post",
        url:
          "https://www.easy-mock.com/mock/5c1c59326fedb679d1b94a74/hwp-h5/aliyun-nuxt-detail",
        data: "123"
      })
        .then(response => {
          this.pageContent = response.data.respBizMsg.pageContent;
        })
        .catch(error => {});
    },
    changeBtn(name) {
      if (name == "signOut") {
        this.$router.replace("/testProject/logIn");
      }
    },
    changePage(name) {
      this.title = this.pageContent[name].title
      this.$emit("changePageSet", {
        arr: this.pageContent,
        index: name
      });
    },
    toEdit(){
      this.title = 'markDown 编辑器'
      this.$router.push('/testProject/home/edit')
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
    font-size: 16px;
    color: #666;
    .photo-btn {
      display: block;
      width: 40px;
      height: 40px;
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
    margin: 0 20px;
  }
}
</style>
