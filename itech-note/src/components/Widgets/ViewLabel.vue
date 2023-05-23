<template>
    <RouterLink :to="to" class="px-2 py-1 flex items-center justify-between cursor-pointer hover:bg-gray-300/40"
        :class="active?'bg-sky-300 hover:bg-sky-300/50':''"
    >
        <div class="flex max-w-[70%] items-start">
            <span class="py-1">
                <slot name="icon"></slot>
            </span>
            <div class="flex truncate flex-col justify-start">
                <span class="truncate pl-2"><slot name="title"></slot></span>
                <p class="truncate text-sm px-2">
                    <slot name="subtitle"></slot>
                </p>
            </div>
        </div>
        <div class="flex items-center justify-end">
            <slot name="actions"></slot>
        </div>
    </RouterLink>
</template>
<script setup>
const porps = defineProps({
    to:{
        type: Object,
        default: {}
    },
    active: {
        type: Boolean,
        default: false
    }
})
console.log(porps.to)
</script>
