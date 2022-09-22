<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-09-22 16:43:26
 * @Description: 文件介绍
-->
<template>
  <div id="qiankunDom"></div>
</template>
<script>
import { onMounted, computed, defineComponent } from "vue";
import microAppStart from "@/qiankun/index.js";
export default defineComponent({
  name: "MicroUserApp",
  components: {},
  setup() {
    onMounted(() => {
      microAppStart();
    });
  },
});
</script>
<style lang="less" scoped>
#qiankunDom {
  width: 100%;
  height: calc(100% - 57px);
}
</style>
