<template>
    <div class="relative w-full h-full overflow-hidden bg-gray-100">
        <div class="flex h-full overflow-auto pb-12">
            <div class="w-[80%] mx-auto my-4 h-full bg-gray-200 ring-1 ring-slate-400/60 rounded shadow-lg"></div>
        </div>
        <div class="absolute w-full left-0 bottom-0 p-2 flex justify-center items-center">
            
            <div class="flex items-center">
                <button class="w-10 h-10 mr-2 ring-1 ring-slate-200 shadow-md rounded-[13px] bg-gray-300 flex items-center justify-center hover:bg-gray-400">
                    <font-awesome-icon icon="fa-solid fa-note-sticky" />
                </button>
                <button class="w-10 h-10 mr-2 ring-1 ring-slate-200 shadow-md rounded-[13px] bg-gray-300 flex items-center justify-center hover:bg-gray-400">
                    <font-awesome-icon icon="fa-solid fa-list" />
                </button>
                <button class="w-10 h-10 mr-2 ring-1 ring-slate-200 shadow-md rounded-[13px] bg-gray-300 flex items-center justify-center hover:bg-gray-400">
                    <font-awesome-icon icon="fa-solid fa-calendar" />
                </button>
                <button class="w-10 h-10 mr-2 ring-1 ring-slate-200 shadow-md rounded-[13px] bg-gray-300 flex items-center justify-center hover:bg-gray-400">
                    <font-awesome-icon icon="fa-solid fa-boxes" />
                </button>
                <button class="w-10 h-10 mr-2 ring-1 ring-slate-200 shadow-md rounded-[13px] bg-gray-300 flex items-center justify-center hover:bg-gray-400">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </button>
            </div>
            
        </div>
    </div>
    
</template>
<script setup>
import { ref, toRef } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const data = toRef(store.state.notes, 'index')
</script>