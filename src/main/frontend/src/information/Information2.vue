<script setup>
import Header from '../components/Header.vue';
</script>
<template>
<Header/>
<div class="information">
    <div class="art">
        <img src="../assets/imgs/IMG_20230321_084548_493 (1).jpg" alt="">
    </div>
    <div class="text">
        <div class="text-info">
            <h1>Información:</h1>
            <p>El beso de Francesco Hayez <br>La pintura representa una pareja de la Edad Media que se abraza mientras se besa. Es una de las representaciones más apasionadas e intensas de un beso en la historia del arte occidental. La muchacha se inclina hacia atrás, mientras que el hombre dobla la pierna izquierda para sostenerla, colocando al mismo tiempo un pie en el escalón de al lado, como si estuviera preparado para irse en cualquier momento. La pareja, aunque está en el centro de la pintura, no es reconocible, ya que Hayez quería que la acción del beso estuviera en el centro de la composición. <br>
Esta pintura no es solo la representación de un beso apasionado. A un nivel más profundo, la pintura simboliza los ideales románticos, nacionalistas y patrióticos del Risorgimento, el movimiento de consolidación de diferentes estados de la península italiana en un solo estado: el Reino de Italia. Esta interpretación está avalada por varios elementos iconográficos. <br>
La inminente despedida entre los enamorados está sugerida por el pie del hombre apoyado temporalmente en el escalón y el fuerte abrazo con el que su amada le sujeta. Esto representa la necesidad de que él debe marcharse, al tiempo que muestra el peligro de ser un patriota. Otros elementos son la daga escondida en el manto, un signo de la inminente rebelión contra los Habsburgo invasores, y la fecha de la pintura (1859), el año de la segunda guerra de la independencia de Italia.</p>
        </div>
        <div class="text-info">
            <h1>Mi sentimiento:</h1>
            <p>Este cuadro me da un sentimiento de pasión y de perdida, como aquel beso que das sabiendo que tal vez no exista otro. <br> También me recuerda a un amor clandestino, que apesar de todo se unen a escondidas.</p>
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

