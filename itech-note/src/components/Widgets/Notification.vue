<template>
    <div class="max-w-[500px] min-w-[300px] rounded shadow-lg ring-2 ring-sky-600 p-1 flex justify-between items-start m-2"
        :class="`bg-${baseProps.primary}`, `text-${baseProps.secondary}`" 
        >
        <div class="max-w-[70%] flex items-start">
            <div class="flex items-center justify-center">
                <span class="w-8 flex items-center justify-center">
                    <font-awesome-icon :icon="baseProps.icon" class="p-2"/>
                </span>
            </div>
            <div class="truncate ml-2 flex flex-col">
                <span class="truncate">{{title}}</span>
                <span class="truncate text-sm">{{subTitle}}</span>
            </div>
        </div>
        <div class="flex items-start justify-start">
            <button @click="close" class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-300/40">
                <font-awesome-icon icon="fa-solid fa-close"/>
            </button>
        </div>
    </div>
</template>
<script setup>
import { computed } from '@vue/reactivity';
const props = defineProps({
    id:{
        type: Number,
        default: 0
    },
    type: {
        type: String,
        default: "noti"
    },
    title: {
        type: String,
        default: "Notification"
    },
    subTitle: {
        type: String,
        default: "The notification widget"
    }
})
const emits = defineEmits(['close'])

const baseProps = computed(()=>{
    switch(props.type){
        case 'noti': return {primary:'sky-400', secondary: 'slate-400', icon: 'fa-solid fa-bell'};
        case 'warning': return {primary:'orange-400', secondary: 'slate-400', icon: 'fa-solid fa-warning'};
        case 'error': return {primary:'red-400', secondary: 'slate-400', icon: 'fa-solid fa-bug'};
        case 'info': return {primary:'gray-400', secondary: 'slate-400', icon: 'fa-solid fa-info'};
        default: return {primary:'sky-400', secondary: 'slate-400', icon: 'fa-solid fa-bell'};
    }
})
const close = ()=>{
    emits("close", props.id)
}
</script>