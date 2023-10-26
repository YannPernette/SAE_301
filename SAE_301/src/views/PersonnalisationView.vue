<script setup>

import HeaderPage from '../components/HeaderPage.vue'
import FooterPage from '../components/FooterPage.vue'

import { useRouter } from 'vue-router';
const router = useRouter()

import Lunettes from '../components/icons/Lunettes.vue'

import { ref, onMounted } from 'vue'

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
// const pb = new PocketBase("http://127.0.0.1:8090/");
const pb = new PocketBase("https://tavue.yann-pernette.fr/");

var materiau = ref(0)
var solaire = ref(false)

let styleCadre = ref('')
let styleBranches = ref('')
let styleVerres = ref('')
let leMateriau = ref('')

const styleLunettes = async () => {
    try {
        const authData = await pb.collection("Lunette").create({
            cadre: styleCadre.value,
            branches: styleBranches.value,
            verres: styleVerres.value,
            materiau: leMateriau.value,
            prix: 139,
            relationUser: pb.authStore.model.id,
        })
        console.log("lunettes crées : ", authData)
        router.push({ name: "PanierView" })

    } catch (error) {
        console.log("erreur d'enregistrement des lunettes' : ", error.message)
        alert("Veuillez vous connecter ou créer un compte pour personnaliser chez TaVue")
        styleCadre.value = ""
        styleBranches.value = ""
        styleVerres.value = ""
        leMateriau.value = ""
    }
}

</script>


<template>
    <HeaderPage />

    <div class="grid grid-cols-5">

        <div class="col-span-3 bg-presque-blanc">
            <h3 class="text-center ml-0 mb-5">créez les lunettes de vos rêves</h3>
            <p class="text-center">Adoptez un style qui vous correspond, toujours avec une personnalisation 100% française
            </p>

            <Lunettes class="w-[900px] h-fit my-[-80px]" />

            <div class="grid grid-cols-5 mb-4 items-center">
                <p class="col-start-2 justify-self-center font-rubik text-4xl font-medium">139 €</p>
                <button class="col-start-3 col-span-2 py-3 bg-bleu-foncé text-blanc rounded-full shadow-style-bouton-1"
                    type="button" @click.prevent="styleLunettes()">
                    Ajouter au Panier
                </button>
            </div>

        </div>


        <div class="col-start-4 col-span-2">

            <h3 class="ml-16 mt-10">Choississez votre matériau</h3>

            <div v-if="materiau == 0" class="flex items-center">
                <button class="flex ml-8 px-10 py-3 border-2 border-bleu-ciel rounded-xs"
                    @click="materiau = 1; leMateriau = 'métal'">
                    <h5 class="font-medium uppercase text-lg">Métal</h5>
                </button>
                <button class="flex ml-8 px-10 py-3 border-2 border-bleu-ciel rounded-xs"
                    @click="materiau = 2; leMateriau = 'carbone'">
                    <h5 class="font-medium uppercase text-lg">Carbone</h5>
                </button>
                <button class="flex ml-8 px-10 py-3 border-2 border-bleu-ciel rounded-xs"
                    @click="materiau = 3; leMateriau = 'titane'">
                    <h5 class="font-medium uppercase text-lg">Titane</h5>
                </button>
            </div>

            <div v-if="materiau == 1" class="flex items-center">
                <button class="flex ml-8 px-10 py-3 bg-bleu-ciel border-2 border-bleu-ciel rounded-xs">
                    <h5 class="font-medium uppercase text-lg">Métal</h5>
                </button>
                <button class="flex ml-8 px-10 py-3 border-2 border-bleu-ciel rounded-xs"
                    @click="materiau = 2; leMateriau = 'carbone'">
                    <h5 class="font-medium uppercase text-lg">Carbone</h5>
                </button>
                <button class="flex ml-8 px-10 py-3 border-2 border-bleu-ciel rounded-xs"
                    @click="materiau = 3; leMateriau = 'titane'">
                    <h5 class="font-medium uppercase text-lg">Titane</h5>
                </button>
            </div>

            <div v-if="materiau == 2" class="flex items-center">
                <button class="flex ml-8 px-10 py-3 border-2 border-bleu-ciel rounded-xs"
                    @click="materiau = 1; leMateriau = 'métal'">
                    <h5 class="font-medium uppercase text-lg">Métal</h5>
                </button>
                <button @click="leMateriau = 'carbone'"
                    class="flex ml-8 px-10 py-3 bg-bleu-ciel border-2 border-bleu-ciel rounded-xs">
                    <h5 class="font-medium uppercase text-lg">Carbone</h5>
                </button>
                <button class="flex ml-8 px-10 py-3 border-2 border-bleu-ciel rounded-xs"
                    @click="materiau = 3; leMateriau = 'titane'">
                    <h5 class="font-medium uppercase text-lg">Titane</h5>
                </button>
            </div>

            <div v-if="materiau == 3" class="flex items-center">
                <button class="flex ml-8 px-10 py-3 border-2 border-bleu-ciel rounded-xs"
                    @click="materiau = 1; leMateriau = 'métal'">
                    <h5 class="font-medium uppercase text-lg">Métal</h5>
                </button>
                <button class="flex ml-8 px-10 py-3 border-2 border-bleu-ciel rounded-xs"
                    @click="materiau = 2; leMateriau = 'carbone'">
                    <h5 class="font-medium uppercase text-lg">Carbone</h5>
                </button>
                <button @click="leMateriau = 'titane'"
                    class="flex ml-8 px-10 py-3 bg-bleu-ciel border-2 border-bleu-ciel rounded-xs">
                    <h5 class="font-medium uppercase text-lg">Titane</h5>
                </button>
            </div>

            <h3 class="ml-16 mt-14">Cadre</h3>

            <div class="flex">

                <button @click="styleCadre = 'gris'" class="ml-14 mr-3" onclick="cadre.style.fill='#575757';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #575757; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleCadre = 'blanc'" class="mr-3" onclick="cadre.style.fill='#FFFFFF';">
                    <svg id="couleur cadre 2" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #FFFFFF; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleCadre = 'jaune'" class="mr-3" onclick="cadre.style.fill='#DDDF7B';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #DDDF7B; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleCadre = 'vert'" class="mr-3" onclick="cadre.style.fill='#009367';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #009367; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleCadre = 'bleu'" class="mr-3" onclick="cadre.style.fill='#000F93';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #000F93; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleCadre = 'rouge'" class="mr-3" onclick="cadre.style.fill='#AB0000';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #AB0000; stroke: black;" />
                    </svg>
                </button>

            </div>


            <h3 class="ml-16 mt-14">Branches</h3>

            <div class="flex">

                <button @click="styleBranches = 'gris'" class="ml-14 mr-3" onclick="branches.style.fill='#575757';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #575757; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleBranches = 'blanc'" class="mr-3" onclick="branches.style.fill='#FFFFFF';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #FFFFFF; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleBranches = 'jaune'" class="mr-3" onclick="branches.style.fill='#DDDF7B';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #DDDF7B; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleBranches = 'vert'" class="mr-3" onclick="branches.style.fill='#009367';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #009367; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleBranches = 'bleu'" class="mr-3" onclick="branches.style.fill='#000F93';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #000F93; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleBranches = 'rouge'" class="mr-3" onclick="branches.style.fill='#AB0000';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #AB0000; stroke: black;" />
                    </svg>
                </button>

            </div>


            <h3 class="ml-16 mt-14 relative flex items-center p-2">

                Monture solaire
                <button type="button" @click="solaire = !solaire; styleVerres = ''" onclick="verres.style.fill='#FFFFFF';">
                    <input type="checkbox" class="absolute cursor-pointer left-0 top-0 w-full h-full peer appearance-none">
                    <span
                        class="bg-presque-noir cursor-pointer w-11 h-7 ml-6 rounded-full flex flex-shrink-0 items-center after:bg-blanc after:w-5 after:h-5 after:rounded-full p-1 peer-checked:bg-bleu-ciel peer-checked:after:translate-x-4 ease-in-out duration-300 after:duration-300">
                    </span>
                </button>
            </h3>


            <div v-if="solaire == true" class="flex mt-[-15px]">

                <button @click="styleVerres = 'gris'" class="ml-14 mr-3" onclick="verres.style.fill='#1D1D1B';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #1D1D1B; opacity: 70%; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleVerres = 'jaune'" class="mr-3" onclick="verres.style.fill='#D8D853';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #D8D853; opacity: 70%; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleVerres = 'vert'" class="mr-3" onclick="verres.style.fill='#3BAF40';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #3BAF40; opacity: 70%; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleVerres = 'bleu'" class="mr-3" onclick="verres.style.fill='#474597';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #474597; opacity: 70%; stroke: black;" />
                    </svg>
                </button>

                <button @click="styleVerres = 'rouge'" class="mr-3" onclick="verres.style.fill='#D84F4F';">
                    <svg id="couleur cadre 1" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px">
                        <circle id="circle1" r="25" cx="34" cy="34" style="fill: #D84F4F; opacity: 70%; stroke: black;" />
                    </svg>
                </button>

            </div>

        </div>
    </div>

    <FooterPage />
</template>