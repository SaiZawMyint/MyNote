<template>
    <header class="z-10 relative w-full py-2 backdrop-blur-sm flex justify-between items-center">
        <nav class="flex items-center">
            <h1 class="px-2">
                <font-awesome-icon icon="fa-solid fa-book"/>
            </h1>
            <div tabindex="-1" class="menu z-10 relative px-2 rounded hover:bg-gray-400"
            @focusout="focusOut">
                <button @click="menuAction">File</button>
                <div class="menu-items z-10 absolute min-w-[200px] overflow-hidden ring-1 ring-slate-400 rounded flex flex-col top-[100%] left-0 bg-gray-300 shadow-lgrounded">
                    <button class="w-full px-2 py-1 border-b flex items-center justify-between hover:bg-gray-500/40">
                        <span>Open</span>
                        <span class="text-sm">Ctrl + O</span>
                    </button>
                    <button class="w-full px-2 py-1 flex items-center justify-between hover:bg-gray-500/40">
                        <span>Open</span>
                        <span class="text-sm">Ctrl + O</span>
                    </button>
                </div>
            </div>
            <div tabindex="-1" class="menu relative px-2 rounded hover:bg-gray-400"
            @focusout="focusOut">
                <button @click="menuAction">Edit</button>
                <div class="menu-items absolute min-w-[200px] overflow-hidden ring-1 ring-slate-400 rounded flex flex-col top-[100%] left-0 bg-gray-300 shadow-lgrounded">
                    <button class="w-full px-2 py-1 border-b flex items-center justify-between hover:bg-gray-500/40">
                        <span>Open</span>
                        <span class="text-sm">Ctrl + O</span>
                    </button>
                    <button class="w-full px-2 py-1 border-b flex items-center justify-between hover:bg-gray-500/40">
                        <span>Open</span>
                        <span class="text-sm">Ctrl + O</span>
                    </button>
                </div>
            </div>
            <div tabindex="-1" class="menu relative px-2 rounded hover:bg-gray-400"
            @focusout="focusOut">
                <button @click="menuAction">Tools</button>
                <div class="menu-items absolute min-w-[200px] overflow-hidden ring-1 ring-slate-400 rounded flex flex-col top-[100%] left-0 bg-gray-300 shadow-lgrounded">
                    <button class="w-full px-2 py-1 border-b flex items-center justify-between hover:bg-gray-500/40">
                        <span>Open</span>
                        <span class="text-sm">Ctrl + O</span>
                    </button>
                    <button class="w-full px-2 py-1 flex items-center justify-between hover:bg-gray-500/40">
                        <span>Open</span>
                        <span class="text-sm">Ctrl + O</span>
                    </button>
                </div>
            </div>
            <div tabindex="-1" class="menu relative px-2 rounded hover:bg-gray-400"
            @focusout="focusOut">
                <button @click="menuAction">Help</button>
                <div class="menu-items absolute min-w-[200px] overflow-hidden ring-1 ring-slate-400 rounded flex flex-col top-[100%] left-0 bg-gray-300 shadow-lgrounded">
                    <button class="w-full px-2 py-1 border-b flex items-center justify-between hover:bg-gray-500/40">
                        <span>Open</span>
                        <span class="text-sm">Ctrl + O</span>
                    </button>
                    <button class="w-full px-2 py-1 border-b flex items-center justify-between hover:bg-gray-500/40">
                        <span>Open</span>
                        <span class="text-sm">Ctrl + O</span>
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>
<script setup>
const menuAction = (e)=>{
    let parent = e.target.parentElement;
    parent.focus();
    let menus = document.getElementsByClassName('menu')
    for(let e of menus){
        e.classList.remove('active')
    }
    parent.classList.add('active')
}
const focusOut = (e)=>{
    e.target.classList.remove('active')
}
</script>