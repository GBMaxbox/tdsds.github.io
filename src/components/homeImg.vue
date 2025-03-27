<script setup>


import {ref} from "vue";

import BannerJpg from '@/assets/banner.jpg'
// import BannerJpg from '@/assets/banner.jpg'


const imgList = ref([
  {
    id:0,
    url:'https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    active:false,
  },
  {
    id:1,
    url:'https://images.unsplash.com/photo-1475522003475-eb5f96f1f930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    active:false,
  },
  {
    id:2,
    url:BannerJpg,
    active:false,
  }
])


</script>

<template>

  <div class="home_header">
    <h1 class="display-1 fw-bold text-muted text-center">
      <slot name="one"></slot>
    </h1>
    <p class="text-muted text-center lead fw-bold">
      <slot name="two"></slot>
    </p>
  </div>

<!--  <div class="home_body" v-for="(item,index) in imgList">-->
<!--    <img :src="item.url" :key="index" alt="">-->
<!--  </div>-->

</template>


<style scoped>

</style>