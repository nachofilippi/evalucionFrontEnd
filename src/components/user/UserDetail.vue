<template>
    <div>
        <h3>Detalles</h3>
        <router-link tag="button" 
                    type="button" 
                    class="btn btn-secondary" 
                    :to="link"
        >Editar usuario</router-link>
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
            }
        }
    },
}
</script>