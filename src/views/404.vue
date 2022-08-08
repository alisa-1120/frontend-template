<template>
    <div class="content_404 " >
         <div class="container">
            <h1>
                <span>{{$t("Sorry")}}</span>
                {{$t("not_found _message")}}
            </h1>
            <p class="message">{{$t("Please try back again shortly")}}</p>
            <div>
                <el-button type="primary" class="btn-wide" @click="backHome">{{$t("Back Home")}}</el-button>
            </div>
         </div>
         
    </div>
</template>

import {el-butt}

<script>
   export default {
    name:'page404',
    data(){
        return {

        }
    },
    methods:{
        backHome() {
            const that = this
            that.$router.push({ path:'/' })
        }
    }
   }
</script>

<style lang="less" scoped>
   
   .content_404{background:@bg_404;width: 100%; min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   }
   h1{font-size: 36px; color: @color_font1;
     span{font-weight: bold;}
   }
   .message{
    color: @color_font2;
    font-size: 24px;
    padding: 50px 0 30px;
   }
   .container{
     flex:1;
     height:auto;
     max-width: 600px;
     padding: 30px 20px;
   }
</style>
