<template>
    <div class="w-full flex-col">
        <ViewLabel :active="route.params.id == data.id" :to="{name:'notes.details', params:{id:data.id}}" v-for="data in store.state.notes.data">
            <template v-slot:icon>
                <font-awesome-icon icon="fa-solid fa-book" />
            </template>
            <template v-slot:title>{{data.title}}</template>
            <template v-slot:subtitle>{{data.subTitle}}</template>
            <template v-slot:actions>
                <button class="rounded-full flex items-center justify-center">
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                </button>
            </template>
        </ViewLabel>
        <div class="text-center text-gray-400">
            There is nothing here..
            <div class="flex my-2 items-center justify-center">
                <button @click="addNewNoteOption.show=true" class="w-8 h-8 mr-2 flex items-center rounded-lg justify-center bg-gray-200 ring-1 ring-slate-300 hover:bg-gray-400 hover:text-gray-200">
                    <font-awesome-icon icon="fa-solid fa-plus"/>
                </button>
                <button class="w-8 h-8 flex items-center rounded-lg justify-center bg-gray-200 ring-1 ring-slate-300 hover:bg-gray-400 hover:text-gray-200">
                    <font-awesome-icon icon="fa-solid fa-file-import"/>
                </button>
            </div>
            
        </div>
    </div>
    <Transition name="alert">
        <ModalBox title="Create new Note" v-if="addNewNoteOption.show" :show="addNewNoteOption.show"
            @on-close="addNewNoteOption.show = false" width="w-[800px]">
            <template v-slot:icon>
                <div class="flex w-full justify-between items-center">
                    <div class="flex p-4 items-center w-[50%]">
                        <button class="w-10 h-10 mr-2 flex items-center justify-center text-gray-100 rounded-lg">
                            <img src="@img/img-01.svg" alt="" class="w-full h-full">
                        </button>
                        <button class="w-10 h-10 mr-2 flex items-center bg-gray-400 text-gray-100 justify-center rounded-lg">
                            <font-awesome-icon icon="fa-solid fa-list"/>
                        </button>
                        <button class="w-10 h-10 mr-2 flex items-center bg-gray-400 text-gray-100 justify-center rounded-lg">
                            <font-awesome-icon icon="fa-solid fa-calendar"/>
                        </button>
                        <button class="w-10 h-10 mr-2 flex items-center bg-gray-400 text-gray-100 justify-center rounded-lg">
                            <font-awesome-icon icon="fa-solid fa-book"/>
                        </button>
                    </div>
                    <div class="flex items-center justify-end">
                        <input type="text" class="p-2 rounded mx-2">
                        <button class="w-10 h-10 mr-2 flex items-center bg-sky-500/80 text-gray-100 justify-center rounded-lg">
                            <font-awesome-icon icon="fa-solid fa-user-plus"/>
                        </button>
                    </div>
                </div>
                
            </template>
            <template v-slot:content>
                <!-- <p class="text-center mt-2 mb-4">Create New Note</p> -->
                <div class="w-full flex items-stretch px-4 py-2">
                    <form @submit.prevent="createNewNote" class="w-[50%]">
                        <input v-model="createModel.title" type="text" class="appereance-none px-3 py-2 w-full rounded-lg" placeholder="Title">
                        <textarea v-model="createModel.description" rows="3" class="appereance-none px-3 py-2 rounded-lg my-2 w-full resize-none" placeholder="Description"/>
                        <span class="text-bold">Typography</span>
                        
                        <div class="flex w-full flex-col">
                            <div class="flex my-2 flex-col">
                                <label for="" class="text-sm">Background Color</label>
                                <div class="compile-input flex w-[300px] items-center justify-between rounded-lg bg-white">
                                    <input v-model="createModel.bgColor" type="text" class="grow appereance-none px-3 bg-transparent focus:outline-none" placeholder="Background Color">
                                    <button @click="clickColor" class="w-[25px] h-[25px] grow-0 flex m-2 rounded-lg items-center justify-center bg-gray-300 ring-2 ring-slate-400"
                                    :style="`background-color: ${createModel.bgColor}`"
                                    >
                                        <input @change="chooseColor($event, 'bg-color')" type="color" class="w-0 h-0 appereance-none outline-0 border-0 shadow-none">
                                    </button>
                                </div>
                            </div>
                            
                            <div class="flex my-2 flex-col">
                                <label for="" class="text-sm">Color</label>
                                <div class="compile-input flex w-[300px] items-center justify-between rounded-lg bg-white">
                                    <input v-model="createModel.fontColor" type="text" class="grow appereance-none px-3 bg-transparent focus:outline-none" placeholder="Color">
                                    <button @click="clickColor" class="w-[25px] h-[25px] grow-0 flex m-2 rounded-lg items-center justify-center bg-gray-300 ring-2 ring-slate-400"
                                    :style="`background-color: ${createModel.fontColor}`"
                                    >
                                        <input @change="chooseColor($event, 'color')" type="color" class="w-0 h-0 appereance-none outline-0 border-0 shadow-none">
                                    </button>
                                </div>
                            </div>
                            <div class="flex flex-col my-2 w-[300px] overflow-hidden ">
                                <label for="font-family">Font Family</label>
                                <select id="font-family" @change="changeFontFamily" name="" class="w-full p-2 appereance-none bg-gray-100 rounded-lg">
                                    <option value="">Choose Font Family</option>
                                    <option value="Arial Rounded MT">Arial Rounded MT</option>
                                    <option value="Roboto">Roboto</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <div class="w-[50%] flex items-center p-8 bg-gray-100 mx-2 rounded-lg justify-center">
                        <div id="previewer" class="w-full overflow-hidden h-full bg-gray-300 border-2 border-dashed flex flex-col"
                        :style="`background-color: ${createModel.bgColor}; color: ${createModel.fontColor}; font-family: ${createModel.fontFamily}`"
                        >
                            <div class="w-full p-2">{{createModel.title}}</div>
                            <p class="p-2 text-sm">{{createModel.description}}</p>
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <div class="flex w-full  items-center justify-end px-2 py-4">
                    <button 
                    type="submit"
                    class="px-4 py-2 ring-slate-200 ring-2 rounded-lg ml-4 btn bg-gray-300 text-slate-600">Cancle</button>
                    <button 
                    type="submit"
                    class="px-4 py-2 ring-slate-200 ring-2 rounded-lg ml-4 btn bg-sky-600 text-slate-300">Create</button>
                </div>
            </template>
        </ModalBox>
    </Transition>
</template>
<script setup>
import { useStore } from 'vuex';
import ViewLabel from '../../../components/Widgets/ViewLabel.vue';
import { useRoute } from 'vue-router';
import ModalBox from '../../../components/Widgets/ModalBox.vue'
import { ref } from 'vue';

const store = useStore()
const route = useRoute()

const createModel = ref({
    title: '',
    description: '',
    bgColor: '',
    fontColor: '',
    fontFamily: ''
})

const addNewNoteOption = ref({
    show: false
})
const clickColor = (e)=>{
    let color = e.target.firstElementChild;
    color.click();
    return;
}
const chooseColor = (e, type)=>{
    let color = e.target.value;
    switch(type){
        case 'bg-color': createModel.value.bgColor = color
        break;
        case 'color': createModel.value.fontColor = color
        break;
    }
    
}

const changeFontFamily = (e)=>{
    createModel.value.fontFamily = e.target.value
}
const createNewNote = ()=>{

}
</script>