<template>
    <div class="flex h-full absolute w-full flex-col bg-slate-400">
        <Header/>
        <div class="flex h-full items-stretch">
            <LeftNavifations>
                <RouterView name="sidebar"></RouterView>
            </LeftNavifations>
            <RightPanel>
                <RouterView/>
            </RightPanel>
        </div>
    </div>
</template>
<script setup>
import Header from './inc/Header.vue';
import LeftNavifations from './inc/LeftNavigations.vue'
import RightPanel from './inc/RightPanel.vue';
import { RouterView } from 'vue-router';
</script>