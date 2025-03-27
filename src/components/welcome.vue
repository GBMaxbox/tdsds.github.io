<script setup>

import {ref} from "vue";

const LenovoDesktop = ref([
  {
    id:0,
    url: 'https://img13.360buyimg.com/n1/jfs/t1/158614/11/49124/80663/670dfc24F51611a2f/aafe6ba3078fb9d2.jpg.avif',
    textdata:'联想=TRX-4060--联想(Lenovo)T4900k 黑悟空游戏台式电脑主机(酷睿14代i5-14400F RTX4060 16G DDR5 1TB)政府补贴20%',
    videoCard:'RTX-4060',
    price:'5899.00'
  },
  {
    id:1,
    url: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/192632/36/49534/148989/67165d89Fcd042bd4/b2f55eb1d2f7359d.jpg.avif',
    textdata:'联想-联想拯救者刃7000K政府补贴黑神话悟空游戏主机台式电脑 14代i7-14650HX RTX4060 8GB显卡16GDDR5',
    videoCard:'RTX-4060',
    price:'8299.00'
  },
])



</script>

<template>

  <h1>我是欢迎页</h1>
  <h3> 台式机 </h3>
  <ul class="LenovoDesktop">
    <li v-for="(item, index) in LenovoDesktop" :key="item.id" >
      <div>
        <img :src="item.url" alt="">
        <div class="Textbook">
          <p>￥{{item.price}}</p>
          <p>{{item.textdata}}</p>
        </div>
      </div>
    </li>
  </ul>



</template>

<style scoped>

div,ul,li,a,h1,h2,h3,h4,h5,h6{
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.LenovoDesktop{
  display: flex;
  justify-content: space-evenly;
  align-items: center;

}
.LenovoDesktop li{
  list-style: none;
  background-color: pink;

}

.LenovoDesktop li div{
  width: 350px;
  height: 450px;
}

.LenovoDesktop li div img{
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.LenovoDesktop li .Textbook{
  width: 100%;
  height: 100px;
  background-color: darkgoldenrod;
  font-size: 16px;
  font-weight: bolder;
}

.Textbook p:nth-child(1){
  width: 100px;
  height: 100%;
  display: inline-block;
  overflow: hidden;
  background-color: coral;
  text-align: center;
  line-height: 100px;
}
.Textbook p:nth-child(2){
  width: calc(100% - 100px);
  height: 100%;
  display: inline-block;
  overflow: hidden;
  background-color: #625de1;
}




</style>