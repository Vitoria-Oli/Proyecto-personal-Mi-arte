<script setup>
</script>
<template>
 <div class="gallery">
    <div class="padding">
      <div class="box">
        <div class="grid">
          <div class="row">
          <a class="gallery-item" href="#">
            <img class="gallery-img" src="" alt=""/>
          </a>
        </div>
        <div class="row">
          <a class="gallery-item" href="#">
            <img class="gallery-img" src="" alt=""/>
          </a>
        </div>
        <div class="row">
          <a class="gallery-item" href="#">
            <img class="gallery-img" src="" alt=""/>
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
