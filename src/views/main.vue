<!--
 * @Author: your name
 * @Date: 2021-07-26 13:38:20
 * @LastEditTime: 2021-09-10 17:19:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\views\main.vue
-->
<template>
  <section>
    <!-- <search-group/> -->
    <div class="container">
      <!-- <catalog /> -->
      <el-table :data="list">
        <el-table-column label="创建时间" prop="name"></el-table-column>
        <el-table-column prop="sex" label="标题"> </el-table-column>
        <el-table-column prop="hh" label="提示文字"> </el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script>
import searchGroup from '@/components/search'
import catalog from '@/components/catalog'
import { exportFile } from '@/api'
export default {
  components: { searchGroup, catalog },
  data() {
    return {
      list: [],
      total : 100000, // 插入十万条数据
      onceCount : 50, // 每次插入50条数据
      renderCount : 0, // 渲染次数
    }
  },
  created() {
    exportFile().then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
    // 
    this.readen()
  },
  methods: {
    add() {
      this.list.push({
        name: 'xx',
        sex: Math.random()*10,
        hh: 'x'
      })
      // this.readen()
    },
    readen() {
      if(this.list.length < this.total){
        window.requestAnimationFrame(this.add)
      }
    }
  }
}
</script>

<style scoped>
.container{
  margin: 10px auto;
  max-width: 1200px;
}
</style>