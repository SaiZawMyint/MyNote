<template>
    <div style="z-index: 100" class="fixed top-0 left-0 w-full h-full bg-slate-500/50 backdrop-blur-sm modal" v-if="show" @click="hadlerClose">
        <Transition name="alert">
        <div @click.stop="" :class="[`${width ? width:'w-[300px]'}`,`${height ? height:'h-[fit-content]'}`]" class="absolute border-gray-300 border-2 rounded-lg bg-gray-200 modal-box overflow-hidden flex flex-col justify-between max-h-[90%]" v-if="show"
        >
            <div class="flex flex-col max-h-[80%] overflow-hidden">
                <h2 class="grow-0 text-center border-gray-100 border-b-2 py-2 px-2">
                    <span class="max-w-[80%] mx-auto truncate block">{{title}}</span>    
                </h2>
                <div class="grow-0 flex items-center justify-start">
                    <slot name="icon"></slot>
                </div>
                <div class="grow overflow-y-auto">
                    <slot name="content"></slot>
                </div>
            </div>
            <div class="max-h-[20%] flex items-center w-full px-2">
                <slot name="footer"></slot>
            </div>
            <button  @click="hadlerClose"
                class="absolute top-1 right-1 w-8 h-8 rounded-full z-50 hover:bg-[#0000004c] flex items-center justify-center close-modal">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        </Transition>
    </div>
</template>
<script setup>
const props = defineProps({
    title: String,
    width: String,
    height: String,
    classes: String,
    show: Boolean
})
const emit = defineEmits(["onClose"])
const hadlerClose = ()=>{
    emit("onClose")
}
</script>
<style>
.modal-slide-down-enter-active,
.modal-slide-down-leave-active {
    transition: all .2s cubic-bezier(1, 0.82, 0.165, 1);
}
.modal-slide-down-enter-active
.modal-slide-down-leave-active{
    opacity: 0;
}
.modal-slide-down-enter-from .modal-box
.modal-slide-down-leave-to .modal-box{
    transition: all .2s cubic-bezier(1, 0.82, 0.165, 1);
}
.modal-slide-down-enter-from .modal-box
.modal-slide-down-enter-to .modal-box{
    transform: scale(1.1);
    opacity: 0;
}
</style>