<template>
    <header id="header">
      <div class="header-title">
        <div><img src="../assets/img/sonylog.jpg" alt=""></div>
        <div><img src="../assets/img/snontitle.jpg" alt=""> <i>索尼中国</i></div>
      </div>
      <div class="header-nav">
        <ul>
          <li>索尼产品
            <div class="nav-div">
              <div class="nav-title">
                <div class="">
                  <div>消费电子产品</div>
                  <div class="store">
                  <div>  前往Sony Store 在线商城</div> <div>-></div>
                    
                  </div>
                </div>
                 <div class="store-right">
                   <div >专业产品</div>
                   <div  >前往索尼专业系统 --></div>
                 </div>
              </div>
              <div class="box">
                <el-row>
                  <el-col :span="4">
                    <div class="grid-content bg-purple">
                      <ul>
                        <li v-for="(ele,i) of dudu" :key="i" class="ele">· {{ ele}}</li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :span="4"><div class="grid-content bg-purple-light">
                    <ul>
                        <li v-for="(ele,i) of dudu1" :key="i" class="ele">· {{ ele}}</li>
                      </ul>
                    </div>
                    </el-col>
                  <el-col :span="4"><div class="grid-content bg-purple">
                    <ul>
                        <li v-for="(ele,i) of dudu2" :key="i" class="ele">· {{ ele}}</li>
                      </ul>
                    </div></el-col>
                  <el-col :span="4"><div class="grid-content bg-purple-light">
                    <ul>
                        <li v-for="(ele,i) of dudu3" :key="i" class="ele">· {{ ele}}</li>
                      </ul></div></el-col>
                  <el-col :span="4"><div class="grid-content bg-purple">
                    <ul>
                        <li v-for="(ele,i) of dudu4" :key="i" class="ele">· {{ ele}}</li>
                      </ul></div></el-col>
                  <el-col :span="4"><div class="grid-content bg-purple-light">
                    <ul>
                        <li v-for="(ele,i) of dudu5" :key="i" class="ele">· {{ ele}}</li>
                      </ul>
                    </div></el-col>
                  </el-row>
              </div>
            </div>
          </li>
          <li>服务于支持</li> 
          <li>企业社会责任</li>
          <li>人才招聘</li>
          <li>新闻中心</li>
          <li>关于索尼</li>
        </ul>
        <div>
          <input type="text" :class="{'input':isinput}" @blur="input2"   @focus="input1">
        </div>
      </div>
      
    </header>
</template>

<script>
export default {
  name: 'my-header',
  data(){
    return{
      isinput:false,
      dudu:[
              "PlayStation®4 Pro",
              "PlayStation®4",
              "PlayStation®VR",
              "PlayStation®Vita",
              "PlayStation®游戏",
              "PlayStation® 配件",
              "智能手机",
              "智能手机配件",
            ],
            dudu1:["电视机",
                    "4K/2K播放器",
                    "投影机",
                    "家庭影音系统",
                    "无线扬声器",
                    "MP4 / MP3播放器"],

          dudu2:["数码录音棒",
                    "闹钟收音机",
                    "数码摄像机",
                    "运动相机"
                    ],
         dudu3:["数码影像产品配件",
                    "索尼存储卡",
                    "数码产品配件",
                    "手机产品配件",
                    "音频产品配件"
                    ],
          dudu4:["高解析度音频设备",
                    "光学记录媒体",

                    "碱性电池",
                    "广播和制作"
                    ],
          dudu5:["投影机/放映机",
                    "专业摄像机",
                    "视频安防",
                    "半导体器件",
                    "工业摄像机模组",
                    "专业记录媒体",
                    "数据存储媒体"
                    ]
    }
  },
  methods: {
    input1(){
      this.isinput=true
    },
    input2(){
      this.isinput=false
    }
  },
  
}
</script>

<style>
@import url("../assets/css/reset.css");
</style>
<style scoped>
#header{
  width: 100%;
  height: 105px;
  background-color: black;
}
.header-title{
  width: 992px;
  display: inline-block;
  height: 49%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size:15px;
  font-weight: 400;
  color:blanchedalmond;
}
 .header-title>div:last-child>img:first-child{
 margin-right:20px;
  opacity: 0.9;
  height: 15px;
  height: 14px;
  padding-top:3px;
}
/* 设置标签低光效果 */
 .header-title>div:last-child>img:first-child:hover{
opacity: 0.7;
}
.header-nav{
  width: 992px;
  height: 49%;
  display: flex;
   justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size:14px;
  font-family: 'Segoe UI';
  font-weight: 800;
  color:blanchedalmond;


}
.header-nav>ul{
width: 80%;
display: flex;
  height: 100%;

}
.header-nav>ul>li{
text-align: left;
margin-right: 46px;
height: 97%;
line-height: 47px;
}
.header-nav>ul>li:hover{
  color:#bac5c5;
  border-bottom: 4px solid lightseagreen;
  
}
.header-nav>ul>li:first-child{
position: relative;
}
.header-nav>ul>li:first-child:hover .nav-div{
display: block;
}
/* 绝对定位的框 */
.header-nav>ul>li:first-child>div.nav-div{
position: absolute;
width: 960px;
height: 485px;
top: 55px;
left:0px;
color:#000;
background-color: #fff;
box-shadow: 2px 6px 7px 1px #bbb;
z-index: 10000;
display: none;
overflow: hidden;
}

.nav-div>div.nav-title{
width: 100%;
height: 60px;
display: flex;
 background: #f0f1f2;
}
.nav-div>div.nav-title>div{
  display: flex;
  justify-content: space-between;
  
}
.nav-div>div.nav-title>div:first-child{
  padding-left: 20px;
  width: 640px;
  font-size:16px;
  font-weight: 400;
  line-height: 60px;
}
.store{
  font-size:10px;
  display: flex;
  width: 180px;
  height: 100%;
  justify-content: space-around;
  color: #827b7b;
}
.store>div:first-child:hover{
  color:#000;
}
.store>div:last-child{
  width: 20px;
  height: 20px;
 border-radius: 50%; 
}
.nav-div>div.nav-title>div:last-child{
  width: 320px;
  padding-right: 20px;
  background-color:#e6e6e8
}
.header-nav>div{
width: 20%;
}
.header-nav>div>input{
width:100%;
height: 34px;
background-color: black;
border-color: rgb(66, 66, 66);
border-width: 2px 2px 2px 2px;
border-style: solid;
}
.input{
  background-color: #fff !important;
}
.store-right{
  line-height: 60px;
  font-weight: 400;
}

.store-right>:last-child{
  color:#827b7b;
 font-size:10px;

}
.store-right>div:last-child:hover{
 color:#000;
}
 .el-row {
    margin-bottom: 20px;
   
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

.box{
padding-top: 10px;
}
.ele:hover{
  color: lightseagreen;
}


</style>



