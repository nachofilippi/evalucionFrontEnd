<template>
<div>
    <h3>Edicion Usuario</h3>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">Confirmar</button>
    <br><br>
    <p id="data">Informacion extra</p>
</div>
</template>
<script>
export default {
    data(){
        return {
            confirmed: false
        }
    },
}
</script>