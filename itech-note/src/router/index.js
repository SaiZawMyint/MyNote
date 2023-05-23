import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoteSideBar from '../layouts/inc/sidebars/NoteSideBar.vue'
import Layout from '../layouts/MainLayout.vue'
import NoteDetail from '../components/notes/NoteDetail.vue'
import { useStore } from 'vuex'
import store from '../store'
const routes = [
  {
    path: '/', name: 'top', component: Layout,
    redirect: { name: 'notes' },
    meta: {
      requireAuth: true,
      name: 'note'
    },
    children: [
      {
        path: 'notes', name: 'notes', components: {
          default: HomeView,
          sidebar: NoteSideBar
        }
      },
      {
        path: '/notes/:id', name: 'notes.details', components: {
          default: NoteDetail,
          sidebar: NoteSideBar
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.name == 'notes.details'){
    store.dispatch('noteData', to.params.id).then((res)=>{
      console.log(res)
      if(res == null){
       next({name: 'top'})
      }else{
        next()
      }
    })
  }else{
    next()
  }
 
});
export default router
