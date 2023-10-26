<script setup>
// import éléments de vue
import { ref, onMounted } from 'vue'
// import Leaflet
import * as Leaflet from 'leaflet'
// CSS Leaflet
import 'leaflet/dist/leaflet.css'

// Canva pour la carte
let tileLayer = Leaflet.tileLayer
// Initialisation de la carte sous forme d'une ref
let map = ref()

const GotoBoutique = () => {
    map.setView([46.74784315469115, 5.9151824237471615], 17)
}

const GotoUsine = () => {
    map.setView([46.68292086456152, 5.581505899279473], 17)
}

// Lorsque le composant est monté dans la vue
onMounted(async () => {
    //Caractéristiques de la carte
    tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
    );

    // Création de la carte sur la div ayant l'id = 'map'
    map = Leaflet.map('map',
        {
            zoomControl: true, // Contrôle du zoom
            layers: [tileLayer], // Canevas pour dessiner la carte
            maxZoom: 18, // Zoom maximum
            minZoom: 6 // Zoom minimum
        })
        // projection de la carte avec centrage aux coordonnées indiquées, avec facteur d'agrandissement
        .setView([46.74784315469115, 5.9151824237471615], 17)
    // Creation d'un icone 
    let myIcon = Leaflet.icon({
        iconUrl: '/assets/marker-icon.png', //Image de l'icone
        shadowUrl: '/assets/marker-shadow.png', //Ombre de l'icone
        iconSize: [25, 41], //Taille de l'icone
        shadowSize: [25, 41], //Taille de l'ombre de l'icone
        iconAnchor: [-10, -10], //Ancrange de l'icone
        shadowAnchor: [-10, -10], //Ancrage de l'ombre de l'icone
        popupAnchor: [22, 10] // Point de position de la popup si elle existe
    })

    // Ajout d'un marqueur
    let markerBoutique = Leaflet.marker([46.74784315469115, 5.9151824237471615], { icon: myIcon }).addTo(map)
    let markerUsine = Leaflet.marker([46.68292086456152, 5.581505899279473], { icon: myIcon }).addTo(map)

    // Ajouter une popup /infobulle
    markerBoutique.bindPopup('Boutique 1 !')
    markerUsine.bindPopup('Boutique 2 !')

})

</script>


<template>
    <div>

        <h3 class="mb-12">Découvrez notre point de vente physique</h3>

        <div class="flex justify-center gap-10 mx-10">
            <button class="px-4 py-1 font-rubik font-semibold border-2 border-bleu-ciel rounded-sm focus:bg-bleu-ciel" @click="GotoBoutique()">Emplacement de la boutique</button>
            <button class="px-4 py-1 font-rubik font-semibold border-2 border-bleu-ciel rounded-sm focus:bg-bleu-ciel" @click="GotoUsine()">Emplacement de l'usine</button>
        </div>

        <div class="mt-6 mx-48">
            <div id="map">

            </div>
        </div>

    </div>
</template>

<style scoped>
#map {
    width: 100%;
    height: 70vh;
}
</style>