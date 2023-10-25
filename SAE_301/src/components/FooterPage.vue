<script setup>

import Logo_Blanc from './icons/Logo_Blanc.vue';
import Instagram from './icons/Instagram.vue';
import Facebook from './icons/Facebook.vue';
import Twitter from './icons/Twitter.vue';
import { RouterLink } from 'vue-router';

</script>





<template>
    <footer class="mt-16 p-6 bg-presque-noir text-blanc">

        <div class="grid grid-cols-5">


            <div class="mt-11 flex justify-self-center">
                <ul>
                    <li class="mb-5">
                        <RouterLink to="/">Modèles</RouterLink>
                    </li>
                    <li class="mb-5">
                        <RouterLink to="/">Personnaliser</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">Panier</RouterLink>
                    </li>
                </ul>
            </div>

            <div class="mt-3 flex items-center justify-self-center text-sm">
                <ul>
                    <li class="mb-2">
                        <RouterLink to="/">Mentions légales</RouterLink>
                    </li>
                    <li class="mb-2">
                        <RouterLink to="/">Conditions d’utilisation</RouterLink>
                    </li>
                    <li class="mb-2">
                        <RouterLink to="/">Politique d’expédition</RouterLink>
                    </li>
                    <li class="mb-2">
                        <RouterLink to="/">Politique de confidentialité</RouterLink>
                    </li>
                    <li class="mb-2">
                        <RouterLink to="/">Politique de remboursement</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">Conditions générales de vente</RouterLink>
                    </li>
                </ul>
            </div>

            <div class="flex items-center justify-self-center">
                <RouterLink to="/"><Logo_Blanc class="w-32" /></RouterLink>
            </div>

            <div class="flex gap-3 items-center justify-center">
                <Instagram />
                <Facebook />
                <Twitter />
            </div>

            <div class="flex items-center justify-center">
                <h5 class="font-normal">Copyright 2023 © <span class="font-semibold">TaVue</span></h5>
            </div>


        </div>




    </footer>
</template>