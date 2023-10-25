import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonnalisationView from '@/views/PersonnalisationView.vue';
import ConnexionView from '@/views/ConnexionView.vue';
import InscriptionView from '@/views/InscriptionView.vue';


// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
const pb = new PocketBase("http://127.0.0.1:8090");


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',              name: 'HomeView',           component: HomeView },
    { path: '/personnalisation',         name: 'PersonnalisationView',          component: PersonnalisationView },
    { path: '/connexion',        name: 'ConnexionView',         component: ConnexionView },
    { path: '/inscription',       name: 'InscriptionView',        component: InscriptionView },
    // { path: '/composant',     name: 'ComponentView',      component: ComponentView },
    // { path: '/pocketbase01',  name: 'PocketBase01View',   component: PocketBase01View },
    // { path: '/pocketbase02',  name: 'PocketBase02View',   component: PocketBase02View },
  ]
})

export default router
