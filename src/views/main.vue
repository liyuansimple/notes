<!--
 * @Author: your name
 * @Date: 2021-07-26 13:38:20
 * @LastEditTime: 2021-08-26 09:57:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\views\main.vue
-->
<template>
  <section>
    <search-group/>
    <div class="container">
      <catalog />
    </div>
  </section>
</template>

<script>
import searchGroup from '@/components/search'
import catalog from '@/components/catalog'
export default {
  components: { searchGroup, catalog }
}
</script>

<style scoped>
.container{
  margin: 10px auto;
  max-width: 1200px;
}
</style>