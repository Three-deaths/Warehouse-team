<template>
    <div>
        <div class = "header" v-if = "this.$route.meta.isheadershow">
            <div class = "logo"><span style = "margin:auto;color:red">LOGO</span></div>
            <div class = "headermenu">
                <div class = "headfont">首页</div>
                <div class = "headfont">问答</div>
                <div class = "headfont">资讯</div>
            </div>
            <input type = "text" class = "searchinput" placeholder="Search for .. ">
            <div class = "headrightsize">
                <div class = "userbuttons">
                    <a class = "userbutton" v-on:click = "clicka()"><img src = "./images/1.png"></a>
                </div>
                <div class = "usershowinfo">
                    <div class = "userhead"></div>
                    <div class = "username">name</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default
    {
        name : "Header",
        data()
        {
            return {
                
            };
        },

        methods : {
            clicka()
            {
                let lalala = 123;
                // console.log(123);
            }
        }
    }
</script>

<style scoped>
    .header
    {
        width : 1200px;
        height : 100px;
        display : flex;
        justify-content : space-between;
        /* border : black 1px solid; */
        margin-bottom : 5px;
        background-color : white;
    }
    .headermenu
    {
        width : 350px;
        height : 100px;
        display : flex;
        /* border : red 1px solid; */
    }
    .searchinput
    {
        border : #1989FA 1px solid;
        border-radius : 5px 5px 5px 5px;
        margin: auto;
        /* margin-top : 30px; */
        height : 40px;
        width : 300px;
    }
    .logo
    {
        display : flex;
        margin-top : 15px;
        margin-left : 25px;
        margin-right : 25px;
        opacity : 0.3;
        background-color : black;
        width : 75px;
        height : 65px;
    }
    .headrightsize
    {
        display : flex;
        height : 45px;
        width : 400px;
        /* margin-top : 30px; */
        margin : auto;
        justify-content : flex-start;
        /* border : purple 1px solid; */
    }
    .userbuttons
    {
        height : 45px;
        width : 100px;
        display : flex;
        justify-content : space-around;
        /* border : blue 1px solid; */
    }
    .usershowinfo
    {
        display: flex;
        height : 45px;
        width : 150px;
        justify-content :  space-around;
        /* border : black 1px solid; */
    }
    .headfont  
    {
        margin : auto;
        font-size : 23px;
        line-height : 38px;
    }
    .username
    {
        margin : auto;
        font-size: 21px;
    }
    .userhead
    {
        height : 40px;
        width : 40px;
        border-radius : 20px 20px 20px 20px;
        background-color : black;
        margin : auto;
        opacity : 0.3;
    }
    .usersize>a
    {
        width: 50px;
        height : 40px;
    }
    .userbuttons > .userbutton
    {
        /* margin : auto; */
        margin-top:auto;
        margin-bottom: auto;
        /* vertical-align:middle; */
    }
</style>