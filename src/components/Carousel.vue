<template > 
    <div class='dudu'>
            <el-carousel indicator-position='outside'  height='520px'>
            <el-carousel-item v-for='item in car' :key='item'>
                 <img :src="require('../assets/img/snoycarouse'+item)" alt=''>
            </el-carousel-item>
            </el-carousel>
          <!-- <img :src='require('../assets/img/snoycarousel.jpg')' alt=''> -->
          <!-- <div v-for="ee of dudu">
              <img :src="ee" alt="">
          </div> -->
    </div>
</template>
<script>
export default {
    
    data(){
        return{
             car:['l.jpg',
                'l2.jpg',
                'l3.jpg',
                 'l4.jpg'],
                 dudu:["snoycarousel.jpg","snoycarousel2.jpg"]
        }
    },
}
</script>
<style scoped>
div.dudu{
    
width: 1210px;
height:520px;
margin: 0 auto;
padding-left: 50px;
overflow: hidden;
}
    .el-carousel__item{
    width:1210px;
    height: 520px;
    color: #475669;
    font-size: 18px;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
      width:1210px;
      height: 520px;
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>