<template>
  <div class="page">
    <h1 class="page-title">阿里云服务器，nodejs版本升级</h1>
    <no-ssr>
      <mavon-editor
        v-html="pageDate"
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
      pageDate: unescape(
        "%3Ch2%3E%3Ca%20id%3D%221nodejs_0%22%3E%3C/a%3E1.%u8FDE%u63A5%u670D%u52A1%u5668%u5347%u7EA7nodejs%3C/h2%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3Enpm%20install%20-g%20n%0A%3C/code%3E%3C/pre%3E%0A%3Ch2%3E%3Ca%20id%3D%222nodejs_4%22%3E%3C/a%3E2.%u4FEE%u6539nodejs%u8DEF%u5F84%3C/h2%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3Evim%20/etc/profile%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3E%u6253%u5F00%u5185%u5BB9%u5982%u4E0B%3C/p%3E%0A%3C/blockquote%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3Efor%20i%20in%20/etc/profile.d/*.sh%20%3B%20do%0A%20%20%20%20if%20%5B%20-r%20%26quot%3B%24i%26quot%3B%20%5D%3B%20then%0A%20%20%20%20%20%20%20%20if%20%5B%20%26quot%3B%24%7B-%23*i%7D%26quot%3B%20%21%3D%20%26quot%3B%24-%26quot%3B%20%5D%3B%20then%0A%20%20%20%20%20%20%20%20%20%20%20%20.%20%26quot%3B%24i%26quot%3B%0A%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20.%20%26quot%3B%24i%26quot%3B%20%26gt%3B/dev/null%0A%20%20%20%20%20%20%20%20fi%0A%20%20%20%20fi%0Adone%0Aunset%20i%0Aunset%20-f%20pathmunge%0Asource%20/root/nvm/nvm.sh%0Aexport%20PATH%3D/usr/local/mongodb/bin%3A%24PATH%0A%26quot%3B/etc/profile%26quot%3B%2084L%2C%201998C%20%20%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3E%u6DFB%u52A0%u5982%u4E0B%u4EE3%u7801%u5230%u6587%u4EF6%u5012%u6570%u7B2C%u4E8C%u884C%u4F4D%u7F6E%3C/p%3E%0A%3C/blockquote%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3Eexport%20NODE_HOME%3D/usr/local/n/versions/node/10.16.2%20%20//%uFF01%uFF01%uFF01%u8FD9%u90E8%u5206%u8981%u586B%u5199nodejs%u88AB%u89E3%u538B%u5230%u5230%u6587%u4EF6%u5939%u8DEF%u5F84%uFF01%uFF01%uFF01%0Aexport%20PATH%3D%24NODE_HOME/bin%3A%24PATH%0Aexport%20NODE_PATH%3D%24NODE_HOME/lib/node_module%3A%24PATH%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3E%u4FDD%u5B58%u9000%u51FA%uFF0C%u6267%u884C%u4E0B%u9762%u547D%u4EE4%3C/p%3E%0A%3C/blockquote%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3Esource%20/etc/profile%0A%3C/code%3E%3C/pre%3E%0A%3Ch2%3E%3Ca%20id%3D%224nodenpm_35%22%3E%3C/a%3E4.%u67E5%u770Bnode%u548Cnpm%u7248%u672C%3C/h2%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3Enode%20-v%20%u548C%20npm%20-v%3C/code%3E%3C/pre%3E%0A"
      ),
      defaultData: "preview"
    };
  }
};
</script>

<style lang="scss">
</style>