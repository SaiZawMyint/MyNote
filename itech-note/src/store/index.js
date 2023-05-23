import { createStore } from "vuex";

export const notificationData = {
    id: null, show: false, type: null, title: null, subTitle: null
}

const notification = {
    state: () => ({
        data: []
    }),
    actions: {
        push({ state }, data = notificationData) {
            data["id"] = Date.now();
            state.data.push(data)
            return data.id
        },
        pop({ state }, id) {
            let index = state.data.findIndex((d) => d.id == id)
            if (index == -1) return;
            state.data.splice(index, 1)
        },
        clearAll({ state }) {
            state.data = []
        }
    }
}
const notes = {
    state: ()=>({
        data:[],
        index:null
    }),
    actions: {
        noteData({state}, id){
            let index = state.data.findIndex((d)=> d.id == id)
            console.log(state.data)
            if(index == -1)return null;
            state.index = state.data[index]
            return state.data[index]
        }
    }
}

const store = createStore({
    modules: {
        notification,
        notes
    }
})

export default store