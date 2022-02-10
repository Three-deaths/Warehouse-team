<template>
    <div>
        <div class = "header" v-if = "this.$route.meta.isheadershow">
            <div class = "logo" v-show = "showLogo"><span style = "margin:auto;color:red">LOGO</span></div>
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
                showLogo : true,
            };
        },
        mounted()
        {
            // const that = this;
            // window.onresize = function()
            // {
            //     console.log(22);
            //     const width = document.documentElement.clientWidth;
            //     if(800 > width)
            //     {
            //         that.showLogo = false;
            //     }
            //     else
            //     {
                    
            //         that.showLogo = true;
            //     }
            // }
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
        width : 100vw;
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
        margin : auto 25px;
        /* margin-top : 15px;
        margin-left : 25px;
        margin-right : 25px; */
        opacity : 0.3;
        background-color : black;
        width : 75px;
        height : 65px;
        flex-shrink : 0;
        flex-grow : 0;
    }
    .headrightsize
    {
        display : flex;
        height : 45px;
        width : 400px;
        /* margin-top : 30px; */
        margin : auto 20px auto 50px;
        justify-content : flex-end;
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

    @media screen and (max-width : 1200px) and (min-width : 1000px)
    {
        .headermenu{
            display : flex;
        }
        .headrightsize{
            width : 350px;
        }
    }
    @media screen and (max-width : 1000px)
    {
        .headermenu{
            display : none;
        }
        .headrightsize{
            width : 200px;
        }
        .username{
            display : flex;
        }
    }
    @media screen and (max-width : 800px)
    {
        .username{
            display : none;
        }
        .userbuttons{
            display : flex;
        }
        .userhead{
            margin-right : auto;
        }
        .headrightsize{
            width : 100px;
        }
    }
    @media screen and (max-width : 700px)
    {
        .userbuttons{
            display : none;
        }
        .userhead{
            margin-right : 15px;
        }
        .searchinput{
            display : flex;
        }
    }
    @media screen and (max-width : 460px)
    {
        .searchinput{
            display : none;
        }
        .lalala{
            display : none;
        }
    }
</style>