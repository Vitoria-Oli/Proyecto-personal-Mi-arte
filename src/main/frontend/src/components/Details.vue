<script setup>
import { ref, reactive, computed, onBeforeMount, onBeforeUpdate } from "vue";
import axios from "axios";
const props = defineProps({
	post: Object,
})
</script>
<template>
<div class="information">
    <div class="art">
        <img class="filePubli" v-if="post.image" :src="'http://localhost:8080/media/' + post.image" alt="imagen post" />
            <button class="btn-delete">Borrar</button>
            <button class="btn-edit">Editar</button>
    </div>
    <div class="text">
        <div class="text-info">
            <h1>Información:</h1>
            <p>{{ post.name }}</p>
        </div>
        <div class="text-info">
            <h1>Mi sentimiento:</h1>
            <p>{{ post.description }}</p>
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
    .art{
        margin-top: 1%;
        width: 30%;
        img{
            box-sizing: content-box;
            width: 100%;
            border: 8px solid black;
        }
            .btn-delete{
                margin: 1% 2% 1% 0;
                width: 10vw;
                height: 6vh;
                background-color: $Details;
                border: none;
                box-sizing: border-box;
                border-radius: 30px;
                font-family: Text;
                color: $Red;
                font-weight: bolder;
                font-size: 1.7vw;
                &:hover{
                    font-size: 1.8vw;
                    border: 3px solid $Red;
                }
            }
            .btn-edit{
                margin: 1% 2% 1% 0;
                width: 10vw;
                height: 6vh;
                background-color: $Red;
                border: none;
                box-sizing: border-box;
                border-radius: 30px;
                font-family: Text;
                color: $Details;
                font-weight: bolder;
                font-size: 1.7vw;
                &:hover{
                    font-size: 1.8vw;
                    border: 3px solid $Details;
                }
            }
    }
    .text{
        width: 45%;
        display: flex;
        flex-direction: column;
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