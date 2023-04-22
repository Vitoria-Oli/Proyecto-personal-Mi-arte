<script setup>

</script>
<template>
<div class="history">
<div class="context">
    <h1 class="title">¿Qué es Mi <samp class="logo">Arte</samp>?</h1>
    <p class="text">Es una página web personal donde subo obras de arte, y lo que ellas me hacen sentir.
    </p>
    <p class="text">El nombre hace referencia a que es una página personal y también
       a la expresión  española ¡Qué arte tienes! para halagar cuando nos gusta la acción que realiza una persona con éxito. Es una manera de halagar esa acción.
    </p>
</div>
</div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/Variables.scss";

.history{
    display: flex;
    align-items: center;
    justify-content: center;
.context{
    background-color: $Details;
    width: 50vw;
    border-top-right-radius: 5%;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
    border-top-left-radius: 5%;
    margin: 2vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-items: center;
    .title{
        font-family: Titles;
        font-size: 3.5vw;
        color: white;
        .logo{
        font-family: Titles;
        color: $Red;
        }
    }
    .text{
        font-family: Text;
        color: white;
        font-size: 1.8vw;
        margin-left: 2vw;

    }
}
}
</style>