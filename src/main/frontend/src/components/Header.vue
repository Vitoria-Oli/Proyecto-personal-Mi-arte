<script setup>

</script>

<template>

<header>
    <img class="logo" src="../assets/imgs/logo.png" alt="logo">

    <nav>
        <router-link to="/" class="nav-bar__link" href="">Home</router-link>
        <router-link to="/Artworks" class="nav-bar__link" href="">Obras</router-link>
        <router-link to="/Recommendations" class="nav-bar__link" href="">Recomendaciones</router-link>
    </nav>
</header>

</template>

<style lang="scss" scoped>
@import "../assets/scss/Variables.scss";

header{
    background-color: $Details;
    height: 22%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        width: 20vw;
        margin-left: 2vw;
    }

    nav{
        border: none;
        display: flex;
        justify-content: end;
        a{
        color: white;
        font-family: Titles;
        font-size: 2.2vw;
        text-decoration: none;
        margin-right: 6%;

        &::selecter{
            background-color: $Red
        }
        }

    }
}

</style>