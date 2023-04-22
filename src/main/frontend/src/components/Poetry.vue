<script setup>

</script>
<template>
<div class="poems">
    <div class="card">
    <img class="background" src="../assets/imgs/fondo.jpg" alt="">
    <div class="text">
        <p>
        El arte nace en la oscuridad más profunda de nuestra soledad, en esa que se puede sentir, porque es en el silencio más íntimo, que el alma comienza a crear.<br>
        -Eduardo Ramirez.
        </p>
    </div>
    </div>
    <div class="card">
    <img class="background" src="../assets/imgs/fondo.jpg" alt="">
    <div class="text">
        <p>
        El mundo no es artístico, Van, porque las personas ya no son capaces de amar de verdad a nadie <br>
        -Carta escrita por Charlie Barkley a Vincent Van Gogh
        </p>
    </div>
    </div>
    <div class="card">
    <img class="background" src="../assets/imgs/fondo.jpg" alt="">
    <div class="text">
        <p>
        El objetivo del arte no es representar la apariencia externa de las cosas, sino su significado interior.<br>
        -Aristóteles.
        </p>
    </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/Variables.scss";

.poems{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2vw;
    margin-bottom: 8vw;
    
    .card{
        position: relative;
        display: inline-block;
        text-align: center;
        .background{
            width: 25vw;
            opacity: 80%;
            box-sizing: border-box;
            border-radius: 10px;

        }
        .text{
            background-color: rgba(91, 87, 87, 0.5);
            box-sizing: border-box;
            border-radius: 5px;
            width: 80%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-family: Text;
            font-weight: 500;
            font-size: large;
        }
    }
}

</style>