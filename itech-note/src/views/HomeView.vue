<template>
  <div class="w-full text-gray-400 h-full flex items-center justify-center">
    <div class="w-full flex flex-col items-center justify-center">
      <h2 class="text-[3em]">
        <font-awesome-icon icon="fa-solid fa-book"/>
      </h2>
      <span class="text-center">Write your important note and freely <br> sharing it here...</span>
      <div class="flex items-center justify-center text-[1.2em]">
        <button @click="showNoti">
          <font-awesome-icon icon="fa-solid fa-plus" class="m-2 cursor-pointer hover:text-sky-800"/>
        </button>
        <button><font-awesome-icon icon="fa-solid fa-envelope" class="m-2 cursor-pointer hover:text-sky-800"/></button>
        <button><font-awesome-icon icon="fa-solid fa-star" class="m-2 cursor-pointer hover:text-sky-800"/></button>
      </div>
      <div class="w-full flex my-3">
        <div class="w-[50%] flex flex-col justify-start items-end border-r px-2 border-gray-300">
          <span>Open Note</span>
          <span>Inbox</span>
        </div>
        <div class="w-[50%] flex px-2 flex-col justify-start items-start">
          <span>Ctrl + O</span>
          <span>Ctrl + Shift + I</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex';


const store = useStore()
const showNoti = ()=>{
  store.dispatch('push',{
    show: true, type: 'info', title: "Notification", subTitle: "notification message"
  }).then((res)=>{
    console.log(res,store.state.notification.data)
  })
}

</script>
