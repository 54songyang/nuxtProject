<template>
  <div class="page">
    <h1 class="page-title">nodejs(express)部署vue项目</h1>
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
        "%3Ch2%3E%3Ca%20id%3D%221nodejsexpressexpress_0%22%3E%3C/a%3E1.%u670D%u52A1%u5668%u5B89%u88C5nodejs%u548Cexpress%uFF0C%u5E76%u521B%u5EFAexpress%u9879%u76EE%3C/h2%3E%0A%3Ch2%3E%3Ca%20id%3D%222expressappjs_1%22%3E%3C/a%3E2.%u4FEE%u6539express%u9879%u76EE%u4E2D%3Ccode%3Eapp.js%3C/code%3E%u6587%u4EF6%3C/h2%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3Evar%20createError%20%3D%20require%28%27http-errors%27%29%3B%0Avar%20express%20%3D%20require%28%27express%27%29%3B%0Avar%20path%20%3D%20require%28%27path%27%29%3B%0Avar%20cookieParser%20%3D%20require%28%27cookie-parser%27%29%3B%0Avar%20logger%20%3D%20require%28%27morgan%27%29%3B%0A%0Avar%20indexRouter%20%3D%20require%28%27./routes/index%27%29%3B%0Avar%20usersRouter%20%3D%20require%28%27./routes/users%27%29%3B%0Avar%20ejs%20%3D%20require%28%27ejs%27%29%0Avar%20app%20%3D%20express%28%29%3B%0A%0A//%20view%20engine%20setup%0Aapp.set%28%27views%27%2C%20path.join%28__dirname%2C%20%27views%27%29%29%3B%0A//app.set%28%27view%20engine%27%2C%20%27ejs%27%29%3B%0A%0A//////////////////////////////%0Aapp.engine%28%27html%27%2C%20require%28%27ejs%27%29.renderFile%29%3B%0Aapp.set%28%27view%20engine%27%2C%20%27html%27%29%3B%0A//////////////////////////////%0A%0Aapp.use%28logger%28%27dev%27%29%29%3B%0Aapp.use%28express.json%28%29%29%3B%0Aapp.use%28express.urlencoded%28%7B%20extended%3A%20false%20%7D%29%29%3B%0Aapp.use%28cookieParser%28%29%29%3B%0A//app.use%28express.static%28path.join%28__dirname%2C%20%27public%27%29%29%29%3B%0A//////////%0Aapp.use%28express.static%28path.join%28__dirname%2C%20%27dist%27%29%29%29%3B%0A////////////%0A%0Aapp.use%28%27/%27%2C%20indexRouter%29%3B%0Aapp.use%28%27/users%27%2C%20usersRouter%29%3B%0A%0A//%20catch%20404%20and%20forward%20to%20error%20handler%0Aapp.use%28function%28req%2C%20res%2C%20next%29%20%7B%0A%20%20next%28createError%28404%29%29%3B%0A%7D%29%3B%0A%0A//%20error%20handler%0Aapp.use%28function%28err%2C%20req%2C%20res%2C%20next%29%20%7B%0A%20%20//%20set%20locals%2C%20only%20providing%20error%20in%20development%0A%20%20res.locals.message%20%3D%20err.message%3B%0A%20%20res.locals.error%20%3D%20req.app.get%28%27env%27%29%20%3D%3D%3D%20%27development%27%20%3F%20err%20%3A%20%7B%7D%3B%0A%0A%20%20//%20render%20the%20error%20page%0A%20%20res.status%28err.status%20%7C%7C%20500%29%3B%0A%20%20res.render%28%27error%27%29%3B%0A%7D%29%3B%0A%0Amodule.exports%20%3D%20app%3B%0A%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3E%u5176%u4E2D%u66F4%u6539%u4E86express%u7684%u6A21%u7248%u89E3%u6790%u65B9%u5F0F%uFF0C%u9700%u8981%u4E0B%u8F7D%3Ccode%3Eejs%3C/code%3E%3C/p%3E%0A%3C/blockquote%3E%0A%3Cpre%3E%3Ccode%20class%3D%22lang-%22%3Enpm%20install%20ejs%20--save%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3E%u4FEE%u6539%u4E86express%u5F15%u5165%u9759%u6001%u6587%u4EF6%u7684%u4F4D%u7F6E%u4E3A%3Ccode%3Edist%3C/code%3E%uFF08%u539F%u4E3A%3Ccode%3Epublic%3C/code%3E%uFF09%3C/p%3E%0A%3C/blockquote%3E%0A%3Ch2%3E%3Ca%20id%3D%223vuenpm_run_builddistexpress_59%22%3E%3C/a%3E3.vue%u9879%u76EE%3Ccode%3Enpm%20run%20build%3C/code%3E%u6253%u5305%uFF0C%3Ccode%3Edist%3C/code%3E%u6587%u4EF6%u5939%u62F7%u8D1D%u5230express%u9879%u76EE%u6839%u76EE%u5F55%3C/h2%3E%0A%3Ch2%3E%3Ca%20id%3D%224expressnpm_starthttplocalhost3000_60%22%3E%3C/a%3E4.%u542F%u52A8express%u9879%u76EE%3Ccode%3Enpm%20start%3C/code%3E%uFF0C%u5982%u679C%u662F%u672C%u5730%u5230%u8BDD%u76F4%u63A5%u67E5%u770Bhttp%3A//localhost%3A3000/%3C/h2%3E%0A"
      ),
      defaultData: "preview"
    };
  }
};
</script>

<style lang="scss">
</style>