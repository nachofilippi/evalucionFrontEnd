<template>
  <div>
    <h3>Nuevo usuario</h3>
    <router-link tag="button" type="button" class="btn btn-secondary" :to="link">Crear nuevo</router-link>
    <div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            link:{ 
                name:'userEdit', 
                params: { id: this.$route.params.id }, 
                hash: '#data'
            },
            status: 'not_accepted'
        }
    },
}
</script>