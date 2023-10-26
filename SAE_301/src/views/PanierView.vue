<script setup>
// Import éléments de vue
import { ref, onMounted } from 'vue'

// Import pocketbase
import PocketBase from 'pocketbase'
import HeaderPage from '../components/HeaderPage.vue';
import FooterPage from '../components/FooterPage.vue';
// Objet pocketBase
const pb = new PocketBase("http://127.0.0.1:8090");

let currentUser = pb.authStore.model

// Liste des lunettes
let listeLunettes = ref()

let nombreLunettes = ref(0)

// Création d'une nouvelle lunette
// Attention même structure que celle de PocketBase
let newLunette = ref({
    cadre: "",
    branches: "",
    verres: "",
    materiau: "",
    prix: 0
})

// Au montage du composant
onMounted(async () => {
    refresh()
}) // Fin de onMounted

const refresh = async () => {
    listeLunettes.value = await pb.collection('Lunette').getFullList(
        // définir un filtre qui fait en sorte qu'il n'y a que les lunettes de l'utilisateur dont l'id est relationUser
        { relationUser: currentUser.id }
        
    )
    nombreLunettes.value = listeLunettes.value.length
}

// const update = async (item) => {
//     let result = await pb.collection('film').update(item.id, {
//         titre: item.titre,
//         annee: item.annee
//     })
//     console.log("result update", result)
//     refresh()
// }

// const del = async (item) => {
//     let result = await pb.collection('film').delete(item.id)
//     console.log("result delete", result)
//     refresh()
// }

</script>




<template>
    <HeaderPage />

    <h3 class="text-center text-2xl ml-0 mt-20 mb-20">Votre panier</h3>

    <div class="grid grid-cols-4 mx-20">

        <div class="col-span-3">
            <table>

                <thead>
                    <tr class="flex mb-6 text-[#8C8C8C] uppercase font-rubik text-xl">
                        <th class="font-medium mr-36">Produit</th>
                        <th class="font-medium mr-10">Prix</th>
                        <th class="font-medium mr-10">Matériau</th>
                        <th class="font-medium mr-10">Cadre</th>
                        <th class="font-medium mr-10">Branches</th>
                        <th class="font-medium">Verres</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="flex gap-8" v-for="item in listeLunettes" :key="item.id">
                        <td class="font-semibold mb-6 mr-2">Lunettes personnalisées</td>
                        <td class="font-semibold mr-3">{{ item.prix }} €</td>
                        <td class="mr-16">{{ item.materiau }}</td>
                        <td class="mr-10">{{ item.cadre }}</td>
                        <td class="mr-24">{{ item.branches }}</td>
                        <td>{{ item.verres }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="col-start-4">
            <div class="p-4 border-2 bg-[#E9E9E9] border-[#D5D5D5]">
                <h4 class="mb-8 text-xl font-semibold">Résumé de la commande</h4>

                <div class="flex justify-between">
                    <p>Sous-total</p>
                    <p class="font-semibold">{{ nombreLunettes * 139 }} €</p>
                </div>

                <div class="flex justify-between">
                    <p>Livraison</p>
                    <p class="font-semibold">10 €</p>
                </div>
                <p class="text-bleu-foncé text-sm">Ajouter un code de réduction</p>

                <div class="mt-8 flex justify-between">
                    <h5>Total</h5>
                    <p class="font-semibold">{{ nombreLunettes * 139 + 10}} €</p>
                </div>
            </div>

            <div class="mt-4 flex items-center justify-center p-4 bg-bleu-foncé text-blanc text-xl">
                <button class="uppercase">
                    Acheter
                </button>
            </div>
        </div>

    </div>


    <!-- <pre>
      {{ listeLunettes }}
    </pre> -->

    <FooterPage />
</template>

