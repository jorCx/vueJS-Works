<script setup>
import {ref} from 'vue';
let counter = ref(0);

function add(){
   counter.value++;
}
function minus(){
  counter.value--;
}
</script>

<!--Start Header-->
<template>
  <div>
    <title>Counter App</title>
    <h2>MY WEB COUNTER</h2>
    <h1>{{ counter }}</h1>
    <button @click="add()">+</button>
    <button @click="minus()">-</button>
  </div>
</template>
<!--End Header-->

<!--Start CSS Design-->
<style>
body{
    text-align: center;
    background-color: rgb(84, 167, 226);
}
h1{
    color: rgb(255, 255, 255);
    font-family: cursive;
    border-width:3px;
    border-style:dashed;
    border-color:#ffffff;
}
h2{
    font-family: cursive;
    border-width:3px;
    border-style:solid;
    border-color:#0041e6;
    background-image:linear-gradient(to left, orange, rgb(98, 207, 250));
}
button{
    background-color: rgb(112, 230, 167);
    border-radius: 20%;
    border:5%;
    size: 50;
    padding: 23px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 4px;
    cursor: pointer;
}

</style>
<!--End CSS Design-->



 