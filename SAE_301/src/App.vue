<script setup lang="ts">

// Import éléments de vue
import { ref, onMounted } from 'vue';
// Import éléments de routage
import { useRouter } from 'vue-router';
const router = useRouter()

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase

const pb = new PocketBase("http://127.0.0.1:8090/");
// const pb = new PocketBase("https://tavue.yann-pernette.fr/");

</script>

<template>
  <div class="container-fluid">

    <!-- <nav class="navbar navbar-expand-lg navbar-dark justify-content-between">
        <RouterLink class="navbar-brand" to="/">Vue3 - PocketBase</RouterLink>
        <button class="navbar-toggler" 
          type="button" data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">
    
            <ul class="navbar-nav" v-if="isConnected">              
                <li class="nav-item">
                  <RouterLink class="nav-link" to="/setup">Setup</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="/geoloc">Geoloc</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="/service">Services</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="/composant">Composants</RouterLink>
                </li>
               
                <li class="nav-item dropdown mr-0">                            
                    <a class="nav-link dropdown-toggle" 
                        href="#" 
                        id="dropdown01" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                      PocketBase
                    </a>
                      <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <RouterLink class="dropdown-item" to="/pocketbase01">Consultations/Maj 01</RouterLink>
                        <RouterLink class="dropdown-item" to="/pocketbase02">Consultations/Maj 02</RouterLink>
                      </div>
                </li>
            </ul >

            <div class="ml-auto">              
              <span v-if="isConnected"> 
                <img :src="avatar" class="img-fluid" style="max-width:60px;" />
                <button class="btn btn-light mr-2">
                  {{ currentUser.name }}
                </button>              
                <button class="btn btn-dark ml-auto" type="button" @click="deconnect">
                    <i class="fa fa-sign-out"></i>
                  </button>
              </span>

              <form v-else class="form-inline  input-group-sm ml-auto" >
                  <input class="form-control mr-2" placeholder="Login" v-model="user">
                  <input class="form-control mr-2" placeholder="Password" v-model="psw">
                  <button class="btn btn-dark ml-auto" 
                      type="button" @click.prevent="connect">
                      <i class="fa fa-power-off"></i>
                  </button>
                </form>
              </div>

        </div>

    </nav> -->

    <RouterView />

  </div>
</template>

<style scoped></style>
