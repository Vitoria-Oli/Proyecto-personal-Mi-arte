<script setup>

</script>

<template>
<div class="information">
    <div class="art">
        <img src="../assets/imgs/Vincent van Gogh Un paseo al anochecer (1).jpg" alt="">
    </div>
    <div class="text">
        <div class="text-info">
            <h1>Información:</h1>
            <p>Un paseo al anochecer se pintó en el último año de vida del artista. Vemos un romántico paseo en la tranquila puesta de sol; la ferviente excitación se representa por la pincelada de colores puros que parecen incendiar la superficie del lienzo. Las pinceladas de la obra sugieren agitación y excitación, una extraña atmósfera en la que el cielo, las plantas y los personajes parecen moverse. El ritmo de las pinceladas cobra fuerza gracias a los colores fuertes y saturados, que vibran y crecen en luminosidad. El cielo, que Van Gogh veía desde la ventana del asilo de Saint-Remy, fue descrito por él en una carta a su hermano Theo como "un cielo nocturno con una luna aturdidora". Para algunos intérpretes de la obra, el hombre pelirrojo de este paseo romántico es el propio artista, pero ¿quién podrían ser la mujer que está a su lado?</p>
        </div>
        <div class="text-info">
            <h1>Mi sentimiento:</h1>
            <p>Esta pintura me trae recuerdos que cautivan mi alma y  corazón.  De aquellas las caminadas, los paseos y las conversaciones que tuve a su lado, no sé si duraron horas o un solo minuto, pero dentro de mi serán eternas.</p>
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