<template>
  <RouterView />
  <div class="fixed bg-gray-200/30 backdrop-blur-sm bottom-[15px] right-[15px] flex flex-col">
    <Notification 
      v-for="data in store.state.notification.data"
      :title="data.title"
      :sub-title="data.subTitle"
      :type="data.type"
      :id="data.id"
      @close="closeNoti"
      />
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import Notification from './components/Widgets/Notification.vue';
import {useStore} from 'vuex';
const store = useStore();
const closeNoti = (id)=>{
  store.dispatch('pop', id)
}
</script>