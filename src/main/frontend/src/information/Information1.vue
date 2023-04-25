<script>
import Header1 from '../components/Header.vue';
</script>
<template>
<Header1/>
<div class="information">
    <div class="art">
        <img src="../assets/imgs/img-2022072962e3bd52543e2_ipad (1).jpeg" alt="">
    </div>
    <div class="text">
        <div class="text-info">
            <h1>Información:</h1>
            <p>Gerda Roosval-Kallstenius fue una pintora sueca que se especializó en paisajes y escenas con figuras. Hoy te ofrecemos una representación inusualmente sensual e íntima de la artista oliendo un jacinto. Sostiene la flor junto a su pecho con ambas manos y cierra los ojos para concentrarse por completo en su delicado olor. Este autorretrato fue realizado mientras Roosval-Kallstenius vivía en París con su marido Gottfrid Kallstenius, que también era pintor. En su cuaderno de bocetos de París, anotó: "El arte es una especie de actividad humana libre (=autodeterminada), que pretende reproducir o conservar una sensación percibida como 'bella'". Parece que en su autorretrato ha intentado conservar tanto la belleza del jacinto como su deliciosa fragancia.</p>
        </div>
        <div class="text-info">
            <h1>Mi sentimiento:</h1>
            <p>Esta obra me da la sensación de cuando te regalan flores o rosas y te detienes a mirar cada detalle de la planta, su color, el tipo y el aroma. son momentos magicos.</p>
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

