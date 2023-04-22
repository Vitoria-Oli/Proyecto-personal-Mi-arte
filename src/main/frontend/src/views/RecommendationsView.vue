<script setup>
import Header from '../components/Header.vue';

</script>
<template>
<Header/>
<div class="x">
<router-link class="btn-r"  to="/Form" href="">Recomendar</router-link>
</div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/Variables.scss";

.x{
display: flex;
justify-content: flex-end;
margin: 2%;
    .btn-r{
        width: 14vw;
        height: 8vh;
        background-color: $Red;
        border: none;
        box-sizing: border-box;
        border-radius: 30px;
        font-family: Text;
        font-weight: bolder;
        color: white;
        font-size: 1.5vw;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            border: 4px solid $Red;
            background-color: white;
            color: $Red;
        }
    }
}
</style>