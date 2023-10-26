<script setup lang="ts">

import FooterPage from '../components/FooterPage.vue'
import HeaderPage from '../components/HeaderPage.vue'

import Artisanat from '../components/icons/Artisanat.vue';
import Durabilite from '../components/icons/Durabilite.vue';
import France from '../components/icons/France.vue';

</script>



<template>

    <HeaderPage />

    <div class="relative">
        <img src="../assets/img/banniere_accueil.webp" alt="Bannière d'Accueil">

        <h1 class="absolute pl-5 mt-[-240px] text-3xl text-blanc">Votre vision, votre style, votre choix</h1>
        <h2 class="absolute pl-5 mt-[-200px] text-2xl text-blanc font-medium">Découvrez l'Élégance de la Fabrication
            Française</h2>

        <div class="flex flex-row ml-5 mt-[-120px]">
            <div class="absolute flex px-7 py-3 bg-bleu-foncé shadow-style-bouton-1">
                <RouterLink class="font-normal text-blanc uppercase w-44 text-center" to="/">Explorer notre collection</RouterLink>
            </div>
            <div class="absolute flex ml-72 px-7 py-3 bg-blanc shadow-style-bouton-1">
                <RouterLink class="font-normal text-bleu-foncé uppercase w-44 text-center" to="/personnalisation">Personnaliser ma monture</RouterLink>
            </div>
        </div>

    </div>

    <h3 class="relative mt-44">Nos articles phares</h3>

    <div class="mt-10 grid grid-cols-5 content-center">

        <div class="col-start-2 w-48 ml-5 flex flex-col object-center">
            <img src="../assets/img/lunettes/Delicatesse_Distinguee.webp" alt="Modèle Délicatesse Distinguée">
            <p class="mt-3">Délicatesse Distinguée</p>
            <p class="font-bold text-lg">109 €</p>
        </div>

        <div class="col-start-3 w-48 ml-5 flex flex-col object-center">
            <img src="../assets/img/lunettes/Pure_Perfection.webp" alt="Modèle Délicatesse Distinguée">
            <p class="mt-3">Pure Perfection</p>
            <p><span class="font-bold text-lg text-[red]">149 €</span><span class="ml-2 line-through text-sm">179 €</span>
            </p>
        </div>

        <div class="col-start-4 w-48 ml-5 flex flex-col object-center">
            <img src="../assets/img/lunettes/Clarte_Classique.webp" alt="Modèle Délicatesse Distinguée">
            <p class="mt-3">Clarté Classique</p>
            <p class="font-bold text-lg">119 €</p>
        </div>

    </div>

    <h3>Qui sommes-nous ?</h3>

    <div class="mx-24 grid grid-cols-3 mb-28">
        <div class="col-span-2 text-sm">
            <p>Chez TaVue, nous croyons en l'union de l'élégance et de la simplicité, en créant des lunettes qui incarnent
                l'essence du raffinement à la française. Notre histoire débute au cœur des ateliers d'artisans de la
                lunetterie en France, où le savoir-faire traditionnel se marie à une vision contemporaine. Chaque paire de
                lunettes que nous créons est le fruit d'une passion dévouée pour l'artisanat, d'un souci méticuleux du
                détail et d'un amour pour le minimalisme.</p>
            <p class="mt-4">Notre engagement envers la qualité est indéfectible. Chaque monture est façonnée à la main par
                des artisans experts, utilisant des matériaux de la plus haute qualité. Nous croyons en une fabrication
                éthique et durable, préservant à la fois la tradition et l'environnement. Nous ne créons pas simplement des
                lunettes, nous créons des accessoires de style et de confiance. Nous sommes fiers de contribuer à votre
                expression personnelle en vous offrant des lunettes conçues pour durer et incarner une élégance
                intemporelle.</p>
            <p class="mt-4">Rejoignez-nous dans notre quête pour l'excellence et découvrez l'art de porter des lunettes qui
                allient la tradition française à un style minimaliste et sophistiqué. Bienvenue dans le monde de TaVue.</p>
        </div>
        <div class="ml-3 justify-center">
            <img src="../assets/img/illu_qui_sommes_nous.webp" alt="Illustration section 'Qui sommes-nous ?'">
        </div>
    </div>

    <div class="grid grid-cols-5 mb-28">
        <div>

        </div>
        <div class="col-start-3 col-span-2 text-sm">
            <p>Nous comprenons que chaque personne est unique, et c'est pourquoi nous offrons des options de
                personnalisation sur mesure pour vos lunettes. Choisissez parmi une large gamme de couleurs, pour créer une
                paire de lunettes qui reflète parfaitement votre style et votre personnalité. Faites de chaque détail une
                déclaration de mode personnelle et découvrez l'art de la personnalisation avec nos montures élégantes et
                minimalistes.</p>
        </div>
    </div>

    <div class="grid grid-cols-5">
        <div class="col-start-2 flex flex-col items-center">
            <Artisanat class="w-36" />
            <h4 class="uppercase text-xl">Artisanat</h4>
        </div>
        <div class="col-start-3 flex flex-col items-center">
            <Durabilite class="w-36" />
            <h4 class="uppercase text-xl">Durabilité</h4>
        </div>
        <div class="flex flex-col items-center">
            <France class="w-36" />
            <h4 class="uppercase text-xl">Fabrication Française</h4>
        </div>
    </div>

    <h3 class="text-center ml-0">Alors convaincu ?</h3>

    <div class="flex flex-row justify-center my-20">
        <div class="flex px-7 py-3 bg-blanc shadow-style-bouton-1 border-2 border-bleu-foncé">
            <RouterLink class="font-normal text-l text-bleu-foncé uppercase w-44 text-center" to="/">Découvrir notre gamme</RouterLink>
        </div>
        <div class="flex ml-20 px-7 py-3 bg-bleu-foncé shadow-style-bouton-1">
            <RouterLink class="font-normal text-l text-blanc uppercase w-44 text-center" to="/">Personnaliser mes lunettes</RouterLink>
        </div>
    </div>

    <FooterPage />

</template>