<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-lg-10 col-xl-10">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Usuarios de la empresa</h1>
                        <p class="lead text-secondary">Se listarán los usuarios existentes en la empresa, modificarlos o crear nuevos</p>
                    </div>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script> 
import Header from './components/Header.vue'
    export default {
        components:{
            appHeader: Header
        },
        data: {
    
  },
 
    }
    
</script>

<style>
@import "./styles/_app.css";


</style>
