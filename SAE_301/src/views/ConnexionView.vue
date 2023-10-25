<script>
// user connecté ? au départ faux
export let isConnected = ref(false)
export let currentUser = ref()
</script>

<script setup>

import Back from '@/components/icons/Back.vue';
import Logo_Blanc from '@/components/icons/Logo_Blanc.vue';
import Logout from '@/components/icons/Logout.vue';

// Import éléments de vue
import { ref, onMounted } from 'vue';

// Import pocketbase
import PocketBase from 'pocketbase'

import { useRouter } from 'vue-router';
  const router = useRouter()

// Objet pocketBase
const pb = new PocketBase("http://127.0.0.1:8090");



// Au montage du composant
onMounted(async () => {
    // Vérifier que le user est déjà connecté
    refresh()

})

const refresh = () => {
    if (pb.authStore.isValid) {
        currentUser.value = pb.authStore.model
        isConnected.value = true

        // avatar.value =
        //   "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
        //   +currentUser.value.collectionId     // Id ou name de la collection concernée
        //   +"/"
        //   +currentUser.value.id               // Id de l'utilisateur connecté
        //   +"/"
        //   +currentUser.value.avatar           // Nom fichier image pocketbase
        //   +"?thumb=100x100"                   // Taille par défaut     

        //      console.log("image avatar utilisateur", avatar)
    }
}

// Element de connexion
let user = ref('')
let psw = ref('')

// User connecté
let avatar = ref(null)

const connect = async () => {
    try {
        const authData = await pb.collection('users')
            .authWithPassword(user.value, psw.value)
        console.log("connecté : ", authData)
        refresh()
    } catch (error) {
        console.log("erreur de connexion : ", error.message)
        alert("Erreur d'identification : mauvais login et/ou mot de passe")
        user.value = ""
        psw.value = ""
    }
}

const deconnect = () => {
    // Suppression utilisateur connecté
    pb.authStore.clear()
    isConnected.value = false
    router.push({ name: "HomeView" })
}

const goBack = () => {
  window.history.back()
}
</script>




<template>
    <div class="grid grid-cols-2">

        <div class="flex bg-gradient-to-tl from-bleu-foncé to-bleu-ciel">
            <RouterLink to="/">
                <Logo_Blanc class="absolute w-24 h-24 left-2" />
            </RouterLink>
            <div class="min-h-screen flex flex-col justify-center text-center text-blanc">
                <h2 class="ml-36 mb-6 text-4xl">Contents de vous revoir,</h2>
                <h4 class="ml-24">Nous sommes ravis de vous accueillir à nouveau</h4>
            </div>
        </div>

        <div v-if="isConnected == false" class="text-center">

            <button @click="goBack()">
                <Back class="w-14 ml-3" />
            </button>

            <h1 class="mt-28 mb-12 text-xl uppercase">Se connecter</h1>

            <form class="flex flex-col">

                <div class="grid grid-cols-5 mb-6">
                    <input class="col-start-2 col-span-3 mx-5 py-2 pl-3 bg-[#F9F9F9] border-2 border-bleu-ciel rounded-sm"
                        type="email" required v-model="user" placeholder="Adresse mail">
                </div>

                <div class="grid grid-cols-5 mb-12">
                    <input class="col-start-2 col-span-3 mx-5 py-2 pl-3 bg-[#F9F9F9] border-2 border-bleu-ciel rounded-sm"
                        type="password" required v-model="psw" id="passwd" placeholder="Mot de passe">
                </div>

                <div class="grid grid-cols-5 mb-4">
                    <button
                        class="col-start-2 col-span-3 mx-10 py-3 bg-bleu-foncé text-blanc rounded-full shadow-style-bouton-1"
                        type="button" @click.prevent="connect()">
                        Continuer
                    </button>
                </div>

                <RouterLink to="/inscription" class="mb-10 text-bleu-foncé text-sm">Vous n’avez pas encore de compte ? <span
                        class="underline">Inscrivez-vous gratuitement ici</span></RouterLink>

                <div class="grid grid-cols-5 mb-4">
                    <button
                        class="col-start-2 col-span-3 mx-20 py-3 bg-[#F9F9F9] text-[#474747] font-medium border-2 border-[#C5C5C5] rounded-sm shadow-style-bouton-1"
                        type="button" @click.prevent="connectGoogle">
                        Se connecter avec Google
                    </button>
                </div>
            </form>

        </div>


        <div v-if="isConnected == true">

            <button @click="goBack()">
                <Back class="w-14 ml-3" />
            </button>

            <div class="flex flex-col justify-center mt-64">
                <h1 class="justify-center text-center mt-0 mb-0 text-lg uppercase">Vous êtes maintenant
                    connecté en tant que {{ currentUser.name }}</h1>

                <button class="justify-center items-center" type="button" @click.prevent="deconnect()">
                    <Logout class="ml-24 w-12 h-fit m-4 p-3 bg-bleu-ciel rounded-sm" />
                </button>
            </div>

        </div>

    </div>
</template>