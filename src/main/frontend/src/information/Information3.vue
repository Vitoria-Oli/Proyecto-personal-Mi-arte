<script setup>
import Header from '../components/Header.vue';
</script>
<template>
<Header/>
<div class="information">
    <div class="art">
        <img src="../assets/imgs/Uemura Shoen  Mujer hermosa leyendo un libro (2).jpg" alt="">
    </div>
    <div class="text">
        <div class="text-info">
            <h1>Información:</h1>
            <p>Mujer hermosa leyendo un libro de Uemura Shoen <br> Uemura Shōen, una pintora japonesa muy conocida por sus obras de bijinga (retratos de bellezas ukiyo-e). Se cree que dijo: "Ni una sola vez he dibujado mujeres pensando que solo debían ser 'bellas'. Mi deseo es pintar figuras que sean como gemas, transparentes, decorosas y sofisticadas, sin ningún elemento de vulgaridad". <br>
Shōen, que falleció en 1949, fue una figura inusual para su época al ser una mujer que trabajó en un campo dominado por hombres. Esta condición de "extraña" como mujer le permitió adquirir un conocimiento más profundo de sus modelos mujeres y emplear enfoques diferentes a los de los artistas hombres. Esta cualidad eleva sus pinturas, ya que retrata a las mujeres no solo como objetos creados a través de la lente de la mirada masculina, sino como sujetos pensantes y sentientes que nos invitan a admirar su belleza interior además de su atractivo exterior. <br>
En sus esfuerzos por mostrar la belleza femenina en lo que ella creía que era su forma más pura, las pinturas de Shōen se caracterizan tanto por su ligereza de tacto como por la profundidad de sus sentimientos, como en la pintura de hoy, donde una hermosa mujer japonesa está concentrada en la lectura de un libro.</p>
        </div>
        <div class="text-info">
            <h1>Mi sentimiento:</h1>
            <p>Cierto es que ente cuadro me gusta más el contexto que lo que siento, porque siento lo contrario del contexto. <br> Siento que cuando eres guapa ni siempre nos miran a nosotras como personas sino solo el atributo de la belleza. <br> es un sentimiento solitario dificil de manejar ya que muchas veces puede ser un privilegio y otras una maldición </p>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/Variables.scss";

.information{
    background-color: $Principal;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .art{
        width: 30%;
        img{
            box-sizing: content-box;
            width: 100%;
            border: 8px solid black;
        }
    }
    .text{
        width: 45%;
        display: flex;
        flex-direction: column;
        margin-top: 2%;
        margin-bottom: 2%;
        .text-info{
            background-color: $Featured;
            box-sizing: border-box;
            border-radius: 50px;
            margin: 2%;

            h1{
                color: $Principal;
                font-family: Titles;
                font-size: 3.5vw;
                margin-left: 5%;
            }
            p{
                color: white;
                font-family: Text;
                margin: 0 5% 5% 5%;
            }
        }
    }
}
</style>

