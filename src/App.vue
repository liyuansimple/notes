<!--
 * @Author: your name
 * @Date: 2021-08-25 15:22:47
 * @LastEditTime: 2021-08-31 09:51:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\notes\src\App.vue
-->
<template>
  <div id="app">
    <transition mode="out-in"
                enter-active-class="fadeInDownBig"
                leave-active-class="fadeOutUpBig">
      <router-view class="animated" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
