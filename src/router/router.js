import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
        path: "/consultar",
        //component: BienvenidaPage
        component: () => import('../modules/estudiantes/pages/ConsultaEstudiante.vue') 
    },
    {
        path: "/guardar",
        //component: JuegoPage
        component: () => import('../modules/estudiantes/pages/GuardaEstudiante.vue')
    },
    {
        path: "/actualizar",
        //component: PremiosPage
        component: () => import('../modules/estudiantes/pages/ActualizarEstudiante.vue')
    },
    {
        path: "/eliminar",
        //component: PokemonPages
        component: () => import('../modules/estudiantes/pages/EliminarEstudiante.vue')
    },
]


const router=createRouter({
    history: createWebHashHistory(),
    routes
})

export default router 