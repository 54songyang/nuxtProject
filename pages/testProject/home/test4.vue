<template>
  <div class="page">
    <h1 class="page-title">nuxt 项目部署到服务器</h1>
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
  data() {
    return {
      pageData:unescape("%3Ch2%3E%3Ca%20id%3D%221_0%22%3E%3C/a%3E1.%u9879%u76EE%u6253%u5305%3C/h2%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3Enpm%20run%20build%0A%3C/code%3E%3C/pre%3E%0A%3Ch2%3E%3Ca%20id%3D%222_4%22%3E%3C/a%3E2.%u63D0%u53D6%u9879%u76EE%u4E2D%u6587%u4EF6%u5230%u670D%u52A1%u5668%3C/h2%3E%0A%3Cblockquote%3E%0A%3Cp%3E%u9700%u8981%u63D0%u53D6%3Ccode%3E.nuxt%3C/code%3E%2C%3Ccode%3Estatic%3C/code%3E%2C%3Ccode%3Enuxt.config.js%3C/code%3E%2C%3Ccode%3Epackage.json%3C/code%3E%u8FD94%u4E2A%u6587%u4EF6%u5939%3C/p%3E%0A%3C/blockquote%3E%0A%3Ch2%3E%3Ca%20id%3D%223cd4npm_install_6%22%3E%3C/a%3E3.%u670D%u52A1%u5668%u4E2D%3Ccode%3Ecd%3C/code%3E%u5230%u653E%u8FD94%u4E2A%u6587%u4EF6%u5939%u5230%u4F4D%u7F6E%3Ccode%3Enpm%20install%3C/code%3E%u5B89%u88C5%u4F9D%u8D56%3C/h2%3E%0A%3Ch2%3E%3Ca%20id%3D%224packagejson_7%22%3E%3C/a%3E4.%u4FEE%u6539%3Ccode%3Epackage.json%3C/code%3E%3Cem%3E%28%u91CD%u70B9%29%3C/em%3E%3C/h2%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3E%7B%0A%20%20%26quot%3Bname%26quot%3B%3A%20%26quot%3BnuxtProject%26quot%3B%2C%0A%20%20%26quot%3Bversion%26quot%3B%3A%20%26quot%3B1.0.0%26quot%3B%2C%0A%20%20%26quot%3Bdescription%26quot%3B%3A%20%26quot%3BMy%20awesome%20Nuxt.js%20project%26quot%3B%2C%0A%20%20%26quot%3Bauthor%26quot%3B%3A%20%26quot%3Bitw_songyang%26quot%3B%2C%0A%20%20%26quot%3Bprivate%26quot%3B%3A%20true%2C%0A%20%20%26quot%3Bscripts%26quot%3B%3A%20%7B%0A%20%20%20%20%26quot%3Bdev%26quot%3B%3A%20%26quot%3Bcross-env%20NODE_ENV%3Ddevelopment%20nodemon%20server/index.js%20--watch%20server%26quot%3B%2C%0A%20%20%20%20%26quot%3Bbuild%26quot%3B%3A%20%26quot%3Bnuxt%20build%26quot%3B%2C%0A%20%20%20%20%26quot%3Bstart%26quot%3B%3A%20%26quot%3Bnuxt%20start%26quot%3B%2C%20//%u6B64%u5904%u4FEE%u6539%u4E3Anuxt%20start%20%u539F%u914D%u7F6E%u4F1A%u62A5%u9519%0A%20%20%20%20%26quot%3Bgenerate%26quot%3B%3A%20%26quot%3Bnuxt%20generate%26quot%3B%0A%20%20%7D%2C%0A%20%20%26quot%3Bdependencies%26quot%3B%3A%20%7B%0A%20%20%20%20%26quot%3Bnuxt%26quot%3B%3A%20%26quot%3B%5E2.0.0%26quot%3B%2C%0A%20%20%20%20%26quot%3Bcross-env%26quot%3B%3A%20%26quot%3B%5E5.2.0%26quot%3B%2C%0A%20%20%20%20%26quot%3Bexpress%26quot%3B%3A%20%26quot%3B%5E4.16.4%26quot%3B%2C%0A%20%20%20%20%26quot%3Biview%26quot%3B%3A%20%26quot%3B%5E3.1.5%26quot%3B%0A%20%20%7D%2C%0A%20%20%26quot%3BdevDependencies%26quot%3B%3A%20%7B%0A%20%20%20%20%26quot%3Bnode-sass%26quot%3B%3A%20%26quot%3B%5E4.12.0%26quot%3B%2C%0A%20%20%20%20%26quot%3Bnodemon%26quot%3B%3A%20%26quot%3B%5E1.18.9%26quot%3B%2C%0A%20%20%20%20%26quot%3Bsass-loader%26quot%3B%3A%20%26quot%3B%5E7.2.0%26quot%3B%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch2%3E%3Ca%20id%3D%225npm_start_34%22%3E%3C/a%3E5.%u542F%u52A8%u9879%u76EE%3Ccode%3Enpm%20start%3C/code%3E%3C/h2%3E%0A"),
      defaultData: "preview"
    };
  }
};
</script>

<style lang="scss">

</style>