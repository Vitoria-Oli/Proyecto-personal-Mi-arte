<script setup>

</script>

<template>
  <div class="gallery">
    <div class="padding">
      <div class="box">
        <div class="grid">
          <div class="row">
          <a class="gallery-item" href="#">
            <img
              class="gallery-img"
              src="../assets/imgs/img-2022072962e3bd52543e2_ipad (1).jpeg"
              alt=""
            />
          </a>
          <a class="gallery-item" href="#">
            <img
              class="gallery-img"
              src="../assets/imgs/Christen+Dalsgaard.jpg"
              alt=""
            />
          </a>
          <a class="gallery-item" href="#">
            <img
              class="gallery-img"
              src="../assets/imgs/Dario Villares Barbosa A Moura (La mora) (2).jpg"
              alt=""
            />
          </a>
        </div>
        <div class="row">
          <a class="gallery-item" href="#">
            <img
              class="gallery-img"
              src="../assets/imgs/IMG_20230321_084548_493 (1).jpg"
              alt=""
            />
          </a>
          <a class="gallery-item" href="#">
            <img
              class="gallery-img"
              src="../assets/imgs/Sofia Levytska Beso (1).jpg"
              alt=""
            />
          </a>
          <a class="gallery-item" href="#">
            <img
              class="gallery-img"
              src="../assets/imgs/Richard Bergh Tarde nórdica de verano (1).jpg"
              alt=""
            />
          </a>
        </div>
        <div class="row">
          <a class="gallery-item" href="#">
            <img
              class="gallery-img"
              src="../assets/imgs/Uemura Shoen  Mujer hermosa leyendo un libro (2).jpg"
              alt=""
            />
          </a>
          <a class="gallery-item" href="#">
            <img
              class="gallery-img"
              src="../assets/imgs/Vincent van Gogh Terraza De Café De Noche (Place du Forum).jpg"
              alt=""
            />
          </a>
          <a class="gallery-item" href="/Information" to="/Information" >
            <img
              class="gallery-img"
              src="../assets/imgs/Vincent van Gogh Un paseo al anochecer (1).jpg"
              alt=""
            />
          </a>
          <a class="gallery-item" href="#">
            <img
              class="gallery-img"
              src="../assets/imgs/Yamamura Toyonari (Kôka) Fuegos artificiales del festival (2).jpg"
              alt=""
            />
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/Variables.scss";
.gallery {
  background-color: $Principal;
  margin-top: 2%;
  margin-bottom: 2%;
  box-sizing: border-box;

   .padding {
        padding-inline: 40px;

        .box{
          box-sizing: border-box;

          .grid{
            display: grid;
            gap: 24px;
            grid-column-gap: 24px;
            align-items: start;
            grid-template-columns: repeat( 3, minmax(0,1fr));
            
            .row{
              display: grid;
              grid-template-columns: minmax(0,1fr);
              row-gap: 24px;
              .gallery-item {
                --column-gutter: 24px;
                --columns: 3;
              .gallery-img{
                width: 100%;
                border: 3px solid black;
            }
          }
        }
      }
    }
  }
}
</style>
