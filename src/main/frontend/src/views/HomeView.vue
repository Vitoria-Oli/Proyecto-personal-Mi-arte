<script setup>
import HeaderVue from '../components/Header.vue';
import History from '../components/History.vue';
import Poetry from '../components/Poetry.vue';
import FooterVue from '../components/Footer.vue'
</script>

<template>
<body>  
<HeaderVue/>
<History/>
<Poetry/>
<!-- <FooterVue/> -->
</body>
</template>

<style lang="scss" scoped>
@import "../assets/scss/Variables.scss";

body{
    background-color: $Principal;

 
}


</style>