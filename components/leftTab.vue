<template>
  <div class="left-page">
    <Menu mode="horizontal" @on-select="menuEv" theme="light" accordion>
      <Row>
        <Col span="16">
          <Submenu v-for="(item1,index1) in option" :key="index1" :name="index1">
            <template slot="title">
              <Icon :type="item1.type" />
              {{item1.content}}
            </template>
            <MenuItem
              v-for="(item2,index2) in item1.menu"
              :key="index2"
              :name="item2.id"
            >{{item2.co}}</MenuItem>
            <MenuGroup v-for="(item2,index2) in item1.menu1" :key="index2" :title="item2.menuTitle">
              <MenuItem
                v-for="(item3,index3) in item2.menuList"
                :key="index3"
                :name="item3.id"
              >{{item3.co}}</MenuItem>
            </MenuGroup>
          </Submenu>
        </Col>
        <Col span="8" class="user-list">
          <Dropdown trigger="click" @on-click="changeBtn" class="name-part">
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
        </Col>
      </Row>
    </Menu>
  </div>
</template>
<script>
export default {
  props: ["option"],
  data() {
    return {};
  },
  mounted() {
    // console.log("option", this.option);
  },
  methods: {
    menuEv(val) {
      let arr = val.split("-");
      this.$emit("toPath", this.option[arr[0]].menu[Number(arr[1]) - 1].path);
    },
    changeBtn(name) {
      if (name == "signOut") {
        this.$router.replace('/testProject/logIn')
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
      // text-align: center;
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
  .user-list{
    display: flex;
    justify-content: flex-end;
    .name-part{
      margin-right: 18px;
    }
  }
}
</style>
