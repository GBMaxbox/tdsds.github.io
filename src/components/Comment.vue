<script setup>

import { ref } from 'vue'
import Login from '@/views/Login.vue'
const user = ref({
  username: '小明',
  age:18
})
const arrs = ref([1,2,3])

</script>


<template>
  <div class="header">

<login :user="user" :array="arrs" />

  </div>
  <div class="comment">
    <div class="left">
      <ul>
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/login">登录</router-link>
        </li>
        <li>
          <router-link to="/UserManage">用户管理</router-link>
        </li>
        <li>
          <router-link to="/SystemManagement">系统管理</router-link>
        </li>
      </ul>

    </div>
    <div class="right">
      <router-view>

      </router-view>

    </div>
  </div>


</template>


<style scoped>
div, ul, li, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
}



.header {
  width: 100%;
  height: 105px;
  background-color: #dcd9d9;
}

.comment {
  width: 100%;
  height: calc(100vh - 105px);
  background-color: pink;
  display: flex;
}


.comment .left {
  width: 260px;
  height: calc(100vh - 105px);
  background-color: dimgray;
}

.left ul {
  width: 100%;
}

.left ul li {
  width: 100%;
  text-align: center;
  font-size: 26px;

}

a {
  text-decoration: none;
  letter-spacing: 10px;
  color: black;
  font-weight: 500;
}


.comment .right {
  flex: 1;
  height: calc(100vh - 105px);
  background-color: #a9a7ab;
  overflow: auto;
}


</style>