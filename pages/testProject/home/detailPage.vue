<template>
  <div class="page">
    <!-- <h1 class="page-title">{{pageContent.title}}</h1> -->
    <no-ssr>
      <mavon-editor
        v-html="pageData"
        :subfield="false"
        :defaultOpen="defaultData"
        :toolbarsFlag="false"
        :boxShadow="false"
      />
    </no-ssr>
  </div>
</template>

<script>
export default {
  props:['pageContent'],
  data() {
    return {
      defaultData: "preview"
    };
  },
  computed:{
    pageData(){
      if(this.pageContent){
        return unescape(this.pageContent.content)
      }
    }
  }
};
</script>

<style lang="scss">
</style>