<script setup>

import Back from '@/components/icons/Back.vue';
import Logo_Noir from '@/components/icons/Logo_Noir.vue';

// Import éléments de vue
import { ref, onMounted } from 'vue';

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
const pb = new PocketBase("http://127.0.0.1:8090/");
// const pb = new PocketBase("https://tavue.yann-pernette.fr/");

import { useRouter } from 'vue-router';
const router = useRouter()

let isCreated = ref(false)

// Element de connexion
let email = ref('')
let name = ref('')
let username = ref('')
let password = ref('')
let passwordConfirm = ref('')

// User connecté
let avatar = ref(null)

const register = async () => {
    try {
        const authData = await pb.collection("users").create({
            email: email.value,
            name: name.value,
            username: username.value,
            password: password.value,
            passwordConfirm: passwordConfirm.value,
        })
        console.log("enregistré : ", authData)
        isCreated.value = true

    } catch (error) {
        console.log("erreur d'inscription' : ", error.message)
        email.value = ""
        name.value = ""
        username.value = ""
        password.value = ""
        passwordConfirm.value = ""
    }
}

const goBack = () => {
  window.history.back()
}

</script>



<template>
    <div class="grid grid-cols-4">

        <div v-if="isCreated == false" class="col-span-3 text-center">

            <RouterLink to="/">
                <Logo_Noir class="absolute w-24 h-24 left-2" />
            </RouterLink>

            <button @click="goBack()">
                <Back class="w-14 ml-44" />
            </button>

            <h1 class="mt-2 mb-8 text-xl uppercase">S'inscrire</h1>

            <form class="flex flex-col">

                <div class="grid grid-cols-5 mb-6 gap-6">

                    <input class="col-start-2 col-span-3 mx-5 py-2 pl-3 bg-[#F9F9F9] border-2 border-bleu-ciel rounded-sm"
                        type="email" v-model="email" placeholder="Adresse mail">

                    <input class="col-start-2 col-span-3 mx-5 py-2 pl-3 bg-[#F9F9F9] border-2 border-bleu-ciel rounded-sm"
                        v-model="name" placeholder="Nom">

                    <input class="col-start-2 col-span-3 mx-5 py-2 pl-3 bg-[#F9F9F9] border-2 border-bleu-ciel rounded-sm"
                        v-model="username" placeholder="Nom d'utilisateur (affiché)">

                    <input class="col-start-2 col-span-3 mx-5 py-2 pl-3 bg-[#F9F9F9] border-2 border-bleu-ciel rounded-sm"
                        type="password" v-model="password" placeholder="Mot de passe">

                    <input class="col-start-2 col-span-3 mx-5 py-2 pl-3 bg-[#F9F9F9] border-2 border-bleu-ciel rounded-sm"
                        type="password" v-model="passwordConfirm" placeholder="Confirmer votre mot de passe">

                </div>

                <div class="grid grid-cols-5 mt-6 mb-4">
                    <button
                        class="col-start-2 col-span-3 mx-32 py-3 bg-bleu-foncé text-blanc rounded-full shadow-style-bouton-1"
                        type="button" @click.prevent="register()">
                        Continuer
                    </button>
                </div>

                <RouterLink to="/connexion" class="mb-10 text-bleu-foncé text-sm">Vous avez déjà un compte ? <span
                        class="underline">Connectez-vous ici</span></RouterLink>

                <div class="grid grid-cols-5 mb-4">
                    <button
                        class="col-start-2 col-span-3 mx-44 py-3 bg-[#F9F9F9] text-[#474747] font-medium border-2 border-[#C5C5C5] rounded-sm shadow-style-bouton-1"
                        type="button" @click.prevent="connectGoogle">
                        S'inscrire avec Google
                    </button>
                </div>

            </form>
        </div>


        <div v-if="isCreated == true" class="col-span-3 text-center">

            <RouterLink to="/">
                <Logo_Noir class="absolute w-24 h-24 left-2" />
            </RouterLink>

            <button @click="goBack()">
                <Back class="w-14 ml-44" />
            </button>

            <h1 class="mt-36 mb-8 text-xl uppercase">Le compte a été créé avec succès</h1>

        </div>


        <div class="col-start-4 flex bg-gradient-to-tl from-bleu-foncé to-bleu-ciel">
            <div class="min-h-screen flex flex-col justify-center text-center text-blanc">
                <h2 class="text-4xl">Bonjour et bienvenue,</h2>
            </div>
        </div>

    </div>
</template>