<template>
<div>
    <h1>Pagina de usuario</h1>
    <hr>
    <p>ID pasado: {{ id }}</p>
    <hr>
    <router-view></router-view>
</div>

</template>
<script>
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    watch: {
        '$route'(to,from){
            this.id = to.params.id;
        }
    },
    methods: {

    }
}
</script>