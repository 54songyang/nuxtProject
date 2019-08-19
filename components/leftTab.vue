<template>
  <div class="left-page">
    <Menu mode="horizontal" @on-select="menuEv" theme="light" accordion>
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
      let arr = val.split('-')
      console.log('arr',);
      this.$emit('toPath',this.option[arr[0]].menu[Number(arr[1])-1].path)
    }
  }
};
</script>

<style lang="scss" scoped>
.left-page{
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 999;
}
</style>
