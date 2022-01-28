<template>
    <div>
        <div class="shell">
            <div class="title">
                <h1>文章、问题的标题写在这里</h1>
            </div>
            <div class="userText">
                <div class="userTopHeader">
                    <div class="userMessage">
                        <div class="headerImg" href="#">
                            <img src="" alt="">                                                                                                                                     
                        </div>
                        <div class="nameTime">
                            <a href="#"><span>用户名称</span></a>
                            <span class="time">xx年xx月xx日 00:28</span>
                        </div>
                    </div>
                    <div class="userButton">
                        <div class="btn01">已关注</div>
                        <div class="btn02">关注</div>
                    </div>
                </div>
                <div class="contentText"></div>
                <div class="setting">
                    <a href="">标签：</a>
                    <a href="">咨询</a>
                    <a href="">语言</a>
                </div>
            </div>
        </div>
        <div class = "rightsidebar">
            <div class = "creatorcenter">
                <div class = "centerheader"> 
                    <img class = "centerheader-img" src = "./images/1.png">
                    <span class = "centerheader-text">创作者中心</span>
                </div>
                <div class = "centerbuttons">
                    <div class = "imagesline">
                        <img class = "centerbuttons-img">
                        <img class = "centerbuttons-img">
                        <img class = "centerbuttons-img">
                        <img class = "centerbuttons-img">
                    </div>
                    <div class = "fontsline">
                        <span class = "fontsline-font">你的回答</span>
                        <span class = "fontsline-font">你的提问</span>
                        <span class = "fontsline-font">你的收藏</span>
                        <span class = "fontsline-font">你的草稿</span>
                    </div>
                    <div class = "tips">
                        最近有很多你喜欢的文章和问答出现了哦
                    </div>
                    <div class = "buttonsline">
                        <button class = "buttonsline-button">+ 开始创作</button>
                        <button class = "buttonsline-button">? 提出问题</button>
                    </div>
                </div>
            </div>
            <div class = "excellentuser">
                <div class = "excellentuser-head">
                    <img class = "excellentuser-head-img" src = "./images/2.png">
                    <span class = "excellentuser-head-font">优秀用户</span>
                </div>
                <div class = "excellentuser-userlist">
                    <div class = "excellentuser-userlist-user">
                        <img class = "userlist-user-img" src = "">
                        <div class = "userlist-user-info">
                            <div class = "userlist-user-info-name">用户名称</div>
                            <div class = "userlist-user-info-goodat">擅长方面:前端</div>
                        </div>
                    </div>
                    <div class = "excellentuser-userlist-user">
                        <img class = "userlist-user-img" src = "">
                        <div class = "userlist-user-info">
                            <div class = "userlist-user-info-name">用户名称</div>
                            <div class = "userlist-user-info-goodat">擅长方面:前端</div>
                        </div>
                    </div>
                    <div class = "excellentuser-userlist-user">
                        <img class = "userlist-user-img" src = "">
                        <div class = "userlist-user-info">
                            <div class = "userlist-user-info-name">用户名称</div>
                            <div class = "userlist-user-info-goodat">擅长方面:前端</div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Home'
    }

</script>

<style lang="less">

    *{
        border: 0;
        margin: 0;
        text-decoration: none;
        color: #000;
    }

    html{
        background-color: rgb(209, 209, 209);
    }

    .shell{
        display : inline-block;
        vertical-align: top;
        // margin-top: 20px;
        margin-left: 80px;
        width: 65vw;
        height: 150vh;
        padding-top: 1px;
        background-color: #fff;
        .title{
            margin: 30px 0 0 30px;
        }
        .userText{
            height: 100%;
            width: 100%;
            .userTopHeader{
                height: 15%;
                width: 90%;
                display: flex;
                margin: 0 30px;
                .userMessage{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    .headerImg{
                        display: inline-block;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        background-color: rgb(138, 138, 138);
                    }
                    .nameTime{
                        display: flex;
                        flex-direction: column;
                        margin-left: 15px;
                        .time{
                            color: rgb(146, 146, 146);
                        }
                    }
                }
                .userButton{
                    width: 300px;
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    div{
                        width: 80px;
                        height: 30px;
                        background-color: #fff;
                        text-align: center;
                        line-height: 30px;
                        border-radius: 5px;
                    }
                    .btn01{
                        border: solid 1px rgb(184, 184, 184);
                    }
                    .btn02{
                        border: solid rgb(18, 141, 255) 1px;
                        background-color: rgba(18, 141, 255, .3);
                        color: blue;
                    }
                }
            }
            .contentText{
                height: 70vh;
            }
            .setting{
                width: 150px;
                display: flex;
                justify-content: space-around;
            }
        }
    }
    .rightsidebar
    {
        display : inline-block;
        width : 300px;
        height : 150vh;
        // border : red 1px solid;
        margin-left : 10px;
        background-color: white;
        .creatorcenter
        {
            width : 300px;
            height : 450px;
            // border : black 1px solid;
            .centerheader
            {
                width : 280px;
                height : 50px;
                // border : blue 1px solid;
                margin-left : auto;
                margin-right : auto;
                display : flex;
                .centerheader-img
                {
                    margin-top : auto;
                    margin-bottom : auto;
                }
                .centerheader-text
                {
                    line-height : 50px;
                    height : 50px;
                    font-size: 15px;
                }
            }
            .centerbuttons
            {
                // border : blueviolet 1px solid;
                width : 300px;
                height : 130px; 
                .imagesline
                {
                    // border : rgb(16, 184, 44) 1px solid;
                    width : 300px;
                    height : 60px;
                    display : flex;
                    justify-content :  space-around;
                    .centerbuttons-img
                    {
                        margin : auto;
                        width : 55px;
                        height : 55px;
                    }
                }
                .fontsline
                {
                    // border : rgb(4, 66, 124) 1px solid;
                    width : 300px;
                    height : 60px;
                    display : flex;
                    justify-content :  space-around;
                    .fontsline-font
                    {
                        margin : auto;
                        width : 55px;
                        height : 55px;
                        // border : rgb(218, 93, 10) 1px solid;
                        font-size : 20px;
                        text-align: center;
                    }
                }
                .tips
                {
                    margin-left : auto;
                    margin-right : auto;
                    margin-top : 50px;
                    border : rgb(168, 167, 167) 2px solid;
                    width : 260px;
                    height : 160px;
                    color : black;
                    background-color : #E6E6E6;
                }
                .buttonsline
                {
                    // border : rgb(21, 219, 103) 1px solid;
                    width : 300px;
                    height : 60px;
                    display : flex;
                    justify-content : space-around;
                    // height : 200px;
                    .buttonsline-button
                    {
                        margin : auto;
                        height : 40px;
                        width : 100px;
                        font-size: 15px;
                        color : white;
                        background-color: #1989FA;
                    }
                }
            }
        }
        .excellentuser
        {
            width : 300px;
            height : 400px;
            // border : purple 1px solid;

            .excellentuser-head
            {
                display : flex;
                // border : black 1px solid;
                height : 70px;
                .excellentuser-head-img
                {
                    height : 45px;
                    width : 45px;
                    margin-left : 15px;
                    margin-right : 30px;
                    margin-top : auto;
                    margin-bottom : auto;
                }
                .excellentuser-head-font
                {
                    height : 70px;
                    line-height : 70px;
                    font-size : 20px;
                    // color : #707070;
                }

            }
            .excellentuser-userlist
            {
                display : flex;
                height : 300px;
                width : 300px;
                // border : blue 1px solid;
                // justify-content :  center;
                flex-direction : column;
                .excellentuser-userlist-user
                {
                    height : 70px;
                    width : 300px;
                    // border : red 1px solid;
                    // margin-top : auto;
                    // margin-bottom : auto;
                    justify-content : flex-start;
                    display : flex;
                    .userlist-user-img
                    {
                        margin-top : auto;
                        margin-bottom : auto;
                        margin-left : 15px;
                        margin-right : 5px;
                        // border : black 1px solid;
                        width : 65px;
                        height : 65px;
                    }
                    .userlist-user-info
                    {
                        margin-top : auto;
                        margin-bottom : auto;
                        // border : black 1px solid;
                        width : 200px;
                        height : 65px;
                        display : flex;
                        // justify-content: flex-start;
                        align-items : flex-start;
                        flex-direction : column;
                        font-size: 15px;
                        line-height: 20px;
                        .userlist-user-info-name
                        {
                            // border : rgb(22, 173, 80) 1px solid;
                            width : 150px;
                            height : 20px;
                            color : #707070;
                            margin-top : auto;
                            margin-bottom : auto;
                        }
                        .userlist-user-info-goodat
                        {
                            // border : rgb(8, 22, 218) 1px solid;
                            width : 150px;
                            height : 20px;
                            color : #707070;
                            margin-top : auto;
                        }
                    }
                }
            }
        }
    }
</style>