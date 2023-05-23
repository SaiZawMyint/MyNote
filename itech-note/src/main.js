import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@css/style.css'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faStar, faEnvelope, faTrash, faGear, faUser, faAngleRight, faSearch, faPlus, faBell, faClose, faBug, faInfo, faWarning,faNoteSticky, faList,faCalendar, faLocation,faBoxes, faFileImport, faPalette, faUserPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faBook, faStar, faEnvelope, faTrash, faGear, faUser, faAngleRight, faSearch, faPlus, faBell, faClose, faBug, faInfo, faWarning,faNoteSticky, faList,faCalendar, faLocation,faBoxes, faFileImport, faPalette, faUserPlus)
const app = createApp(App)

app.use(router).use(store).component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
