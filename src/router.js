// on gère la partie routing

// on importe les fonctions de vue router depuis la dépendance vue-router
import { createRouter, createWebHistory } from 'vue-router';

// on récupère les composants à utiliser avec notre router
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projets from "./components/Projets.vue";
import Contact from "./components/Contact.vue";

// on définit des routes. C'est un array qui contient des objets sours la forme {path, component} (on ne choisit pes les noms de propriétés)
// chaque objet est une correspondance entre un chemin et un composant
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/skills', component: Skills },
    { path: '/projets', component: Projets },
    { path: '/contact', component: Contact },
]

// on instancie VueRouter avec la fonction createRouter
const router = createRouter({
    // on utilise le mode d'historique "HTML5" => urls classiques ex. /register
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

// on exporte l'instance de VueRouter créée
export default router;