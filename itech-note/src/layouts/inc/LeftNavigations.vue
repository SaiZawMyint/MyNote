<template>
    <aside id="aside-bar" class="h-full grow-0 relative flex items-stretch" :style="'width: ' + sizing.width + 'px;min-width: 350px'">
        <div class="flex w-[35px] h-full items-center justify-between flex-col">
            <div class="flex flex-col items-center grow-0">
                <button
                    class="w-8 h-8 flex items-center justify-center appearence-none cursor-pointer hover:bg-gray-500/40"
                    :class="(route.meta.name == 'note')?'text-sky-800':''"
                    >
                    <font-awesome-icon icon="fa-solid fa-note-sticky" />
                </button>
                <button
                    class="w-8 h-8 flex items-center justify-center appearence-none text-gray-600 cursor-pointer hover:bg-gray-500/40">
                    <font-awesome-icon icon="fa-solid fa-star" />
                </button>
                <button
                    class="w-8 h-8 flex items-center justify-center appearence-none text-gray-600 cursor-pointer hover:bg-gray-500/40">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                </button>
                <button
                    class="w-8 h-8 flex items-center justify-center appearence-none text-gray-600 cursor-pointer hover:bg-gray-500/40">
                    <font-awesome-icon icon="fa-solid fa-trash" />
                </button>
            </div>
            <div class="flex flex-col items-center">
                <button
                    class="w-8 h-8 flex items-center justify-center appearence-none text-gray-600 cursor-pointer hover:bg-gray-500/40">
                    <font-awesome-icon icon="fa-solid fa-gear" />
                </button>
                <button
                    class="w-8 h-8 flex items-center justify-center appearence-none text-gray-600 cursor-pointer hover:bg-gray-500/40">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </button>
            </div>
        </div>
        <div class="h-full bg-gray-300 v-panel flex flex-col overflow-hidden">
            <div class="flex justify-center relative items-center p-4">
                <input type="search" name="" id="" class="truncate text-gray-500 appearence-none w-full px-2 py-1 rounded bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow focus:ring-sky-400 focus:ring-1" placeholder="Search">
                <!-- <button class="absolute right-[10px] top-[50%] translate-y-[-50%] text-sm rounded-full w-[30px] h-[30px] bg-gray-300">
                    <font-awesome-icon icon="fa-solid fa-search" />
                </button> -->
            </div>
            <div class="overflow-y-auto">
                <slot></slot>
            </div>
        </div>
        <div @mousedown="resize" class="resizer absolute right-0 hover:bg-gray-300 w-[5px] cursor-col-resize h-full"
            :class="isDragging ? 'bg-gray-300' : ''"></div>
    </aside>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route.meta)

const sizing = ref({
    initialX: 0,
    width: 350,
})
const isDragging = ref(false);
const resize = (e) => {
    let asidebar = document.getElementById("aside-bar");
    const rect = asidebar.getBoundingClientRect();
    sizing.value.width = parseFloat(asidebar.style.width);
    sizing.value.initialX = e.clientX - rect.left;
    const onMouseMove = (e) => {
        const dx = e.clientX - rect.left - sizing.value.initialX;
        const newWidth = sizing.value.width + dx;
        asidebar.style.width = newWidth + "px";
    };
    const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        isDragging.value = false;
        document.body.classList.remove("cursor-col-resize");
        document.body.classList.remove("select-none");
    };
    isDragging.value = true;
    document.body.classList.add("cursor-col-resize");
    document.body.classList.add("select-none");
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
};


</script>