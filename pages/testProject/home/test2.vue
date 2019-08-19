<template>
  <div class="page">
    <h1 class="page-title">pm2使用</h1>
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
      pageData: unescape(
        "%3Ch2%3E%3Ca%20id%3D%221_0%22%3E%3C/a%3E1.%u4E0B%u8F7D%3C/h2%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3Enpm%20install%20pm2%20-g%0A%3C/code%3E%3C/pre%3E%0A%3Ch2%3E%3Ca%20id%3D%222_4%22%3E%3C/a%3E2.%u751F%u6210%u914D%u7F6E%u6587%u4EF6%uFF08%u670D%u52A1%u5668%u6839%u76EE%u5F55%uFF09%23%23%3C/h2%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3Epm2%20ecosystem%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3E%u6267%u884C%u4E0A%u9762%u4EE3%u7801%u540E%u4F1A%u751F%u6210ecosystem.config.js%u6587%u4EF6%3C/p%3E%0A%3C/blockquote%3E%0A%3Ch2%3E%3Ca%20id%3D%223ecosystemconfigjs_9%22%3E%3C/a%3E3.%u914D%u7F6E%u542F%u52A8%u9879%uFF08ecosystem.config.js%u6587%u4EF6%uFF09%23%23%3C/h2%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3E//ecosystem.config.js%u6587%u4EF6%0Amodule.exports%20%3D%20%7B%0A%20%20apps%20%3A%20%5B%7B%0A%20%20%20%20name%3A%20%26quot%3Bapp%26quot%3B%2C%0A%20%20%20%20script%3A%20%26quot%3B./app.js%26quot%3B%2C%0A%20%20%20%20env%3A%20%7B%0A%20%20%20%20%20%20NODE_ENV%3A%20%26quot%3Bdevelopment%26quot%3B%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20env_production%3A%20%7B%0A%20%20%20%20%20%20NODE_ENV%3A%20%26quot%3Bproduction%26quot%3B%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%20%7B%0A%20%20%20%20%20name%3A%20%27worker%27%2C%0A%20%20%20%20%20script%3A%20%27worker.js%27%0A%20%20%7D%5D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch2%3E%3Ca%20id%3D%224_28%22%3E%3C/a%3E4.%u542F%u52A8%u8BE5%u914D%u7F6E%u6587%u4EF6%3C/h2%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3Epm2%20start%20process.yml%0A%3C/code%3E%3C/pre%3E%0A%3Ch1%3E%3Ca%20id%3D%22httpspm2keymetricsiodocsusagequickstart_32%22%3E%3C/a%3E%3Ca%20href%3D%22https%3A//pm2.keymetrics.io/docs/usage/quick-start/%22%20target%3D%22_blank%22%3E%u5B98%u65B9%u6587%u6863%u8FDE%u63A5%3C/a%3E%3C/h1%3E%0A"
      ),
      defaultData: "preview"
    };
  }
};
</script>

<style lang="scss">
</style>