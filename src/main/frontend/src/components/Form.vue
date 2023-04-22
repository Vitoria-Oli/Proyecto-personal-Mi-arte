<script setup>

</script>

<template>
<section class="aling">
<form action="">
    <div class="img-archive">
        <img src="../assets/imgs/Richard Bergh Tarde nórdica de verano (1).jpg" alt="">
    </div>
    <div class="inputs">
        <div class="box">
            <h1 class="title-form">Información:</h1>
            <input class="text-form" type="text">
        </div>
        <div class="box">
            <h1 class="title-form">Mi sentimiento:</h1>
            <input class="text-form" type="text">
        </div>
    </div>
    <div class="btns">
        <button class="btn-delete">Borrar</button>
        <router-link class="btn-post" to="/Recommendations" href="">Publicar</router-link>
    </div>
</form>
</section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/Variables.scss";
.aling{
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: 4%;
    margin-bottom: 4%;

    form{
        background-color: $Featured;
        box-sizing: border-box;
        border-radius: 30px;
        width: 60%;

        .img-archive{
            margin: 5%;
            justify-content: center;
            display: flex;
            align-items: center; 
            img{
                border: 5px solid black;
                width: 50%;
                max-width: 50%;
            }
        }
        .inputs{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .box{
                background-color: $Principal;                   
                box-sizing: border-box;
                border-radius: 20px;
                width: 80%;
                margin: 2%;
                .title-form{
                    color: $Red;
                    font-family: Title;
                    font-weight: bold;
                    font-size: 2vw;
                    margin: 2% 0 0 2%;
                }
                .text-form{
                    width: 90%;
                    min-height: 10vh;
                    background-color: $Principal;
                    border: none;
                    margin: 2%;
                }
            }
        }
        .btns{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin: 2%;
            width: 90%;

            .btn-delete{
                margin: 1% 2% 1% 0;
                width: 12vw;
                height: 6vh;
                background-color: $Principal;
                border: none;
                box-sizing: border-box;
                border-radius: 30px;
                font-family: Text;
                color: $Red;
                font-weight: bolder;
                font-size: 1.5vw;
                &:hover{
                    font-size: 1.8vw;
                    border: 2px solid $Red;
                }
            }
            .btn-post{
                margin: 1% 2% 1% 0;
                width: 12vw;
                height: 6vh;
                background-color: $Red;
                border: none;
                box-sizing: border-box;
                border-radius: 30px;
                font-family: Text;
                color: $Principal;
                font-weight: bolder;
                font-size: 1.5vw;
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
                &:hover{
                    font-size: 1.8vw;
                    border: 2px solid $Principal;
                }
            }
        }
    }
}
</style>