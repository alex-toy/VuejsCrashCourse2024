import { createRouter, createWebHistory } from 'vue-router';

import CoachList from './pages/coaches/CoachList.vue'
import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestReceived from './pages/requests/RequestReceived.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        { path : '/', redirect : '/coaches' },
        { path : '/coaches', component : CoachList },
        { path : '/coaches/:id', props : true, component : CoachDetail, children : [
            { path : 'contact', component : ContactCoach }
        ]},
        { path : '/register', component : CoachRegistration },
        { path : '/requests', component : RequestReceived },
        { path : '/:notfound(.*)', component : NotFound },
    ]
});

export default router;