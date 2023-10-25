<script setup lang="ts">

import Logo_Blanc from './icons/Logo_Blanc.vue';
import Panier from './icons/Panier.vue';
import User from './icons/User.vue';

import { isConnected } from '../views/ConnexionView.vue';
import { currentUser } from '../views/ConnexionView.vue';
import { RouterLink } from 'vue-router';

</script>



<template>
    <header>

        <div v-if="isConnected == false" class="grid grid-cols-2 bg-presque-noir font-rubik"> 

            <div class="flex flex-row items-center text-blanc uppercase text-xl">

                <RouterLink to="/"><Logo_Blanc class="w-24 h-fit p-3" /></RouterLink>

                <ul class="flex pl-8">
                    <li>
                        <RouterLink to="/modeles">Modèles</RouterLink>
                    </li>
                    <li class="pl-8">
                        <RouterLink to="/personnalisation">Personnalisation</RouterLink>
                    </li>
                </ul>
            </div>

            <div class="flex flex-row items-center justify-end uppercase text-lg">
                <ul class="flex pl-8 mr-4">
                    <li class="mr-4 px-6 py-2 text-bleu-ciel border-2 border-bleu-ciel rounded-sm">
                        <RouterLink to="/inscription">S'inscrire</RouterLink>
                    </li>
                    <li class="px-6 py-2 text-noir bg-bleu-ciel border-2 border-bleu-ciel rounded-sm">
                        <RouterLink to="/connexion">Se connecter</RouterLink>
                    </li>
                </ul>
            </div>

        </div>


        <div v-if="isConnected == true" class="grid grid-cols-2 bg-presque-noir font-rubik">

            <div class="flex flex-row items-center text-blanc uppercase text-xl">

                <RouterLink to="/"><Logo_Blanc class="w-24 h-fit p-3" /></RouterLink>

                <ul class="flex pl-8">
                    <li>
                        <RouterLink to="/modeles">Modèles</RouterLink>
                    </li>
                    <li class="pl-8">
                        <RouterLink to="/personnalisation">Personnalisation</RouterLink>
                    </li>
                </ul>
            </div>

            <div class="flex flex-row items-center justify-end text-blanc text-lg">
                <RouterLink to="panier"><Panier class="w-16 h-fit p-3 mr-1" /></RouterLink>
                <RouterLink class="flex items-center" to="/connexion">
                    <User class="w-16 h-fit p-3" />
                    <p class="mr-6">{{ currentUser.name }}</p>
                </RouterLink>

            </div>

        </div>

    </header>
</template>