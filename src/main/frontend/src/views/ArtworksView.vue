<script setup>
    import HeaderVue from "../components/Header.vue";
    import Gallery from "../components/GalleryArt.vue";
</script>

<template>
  <!-- <body> -->
    <HeaderVue />
    <Gallery />
  <!-- </body> -->
</template>

<style lang="scss" scoped>
@import "../assets/scss/Variables.scss";
body {
  background-color: $Principal;
}
</style>
