<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-lg-10 col-xl-10">
                <h1>App</h1>
                <hr>
                <router-view></router-view>
                <router-view name="header-bottom"></router-view>
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
