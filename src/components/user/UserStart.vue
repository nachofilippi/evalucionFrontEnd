<template>
    <div>
        <p>Seleccione un usuario</p>
        <hr>
        <ul class="list-group">
            <router-link tag="li" to="/user/1" class="list-group-item" style="cursor: pointer">Nacho</router-link>
            <router-link tag="li" to="/user/2" class="list-group-item" style="cursor: pointer">Lucas</router-link>
            <router-link tag="li" to="/user/3" class="list-group-item" style="cursor: pointer">Matias</router-link>
        </ul>
    </div>
</template>