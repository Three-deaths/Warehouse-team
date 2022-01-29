<template>
    <div>
        <div class = "drow">
            <h1>Welcome</h1>
            <div class = "submitfrom">
                <input type = "text" placeholder = "username" class = "inputcss" v-model = "userName">
                <input type = "password" placeholder = "password" class = "inputcss" ref = "pwdinput">
            </div>
            <button type = "submit" class = "submitbtn" v-on:click = "UserLogin()">Login</button>
        </div>
    </div>
</template>

<script>
    import md5 from "./script/md5";

    export default {
        name : "Login",
        data()
        {
            return {
                userName : "",
            };
        },
        mounted()
        {

        },
        methods : {
            UserLogin()
            {
                console.log("user:",this.userName);
                console.log("pwd:",md5(this.$refs["pwdinput"].value));
            }
        }
    }
</script>

<style scoped>
    
    .drow
    {
        margin-top : 15vh;
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        display : flex;
        flex-direction : column;
        height : 500px;
        align-items : center;
    }
    .drow h1{
        font-size : 40px;
        font-weight : 300;
        margin-top : 50px;
        margin-bottom : 30px;
    }
    .submitfrom{
        display : flex;
        flex-direction: column;
        align-items: center;
        margin-bottom : 20px;
        width : 250px;
        height : 90px;
    }
    .submitbtn{
        width: 250px;
        height : 30px;
        appearance: none;
        background-color: rgb(255, 255, 255);
        border : white 1px solid;
        color: #000000;
        border-radius: 3px;
        cursor: pointer;
        font-size: 18px;
    }
    .inputcss{
        /* 去除浏览器默认样式 */
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        height : 40px;
        width: 250px;
        margin-top : auto;
        margin-bottom : auto;
        border: 1px solid rgb(255, 255, 255);
        background-color: rgba(182, 0, 0, 0.2);
        text-align: center;
        font-size: 18px;
        font-weight: 300;
    }
    /* 默认的placeholder样式设置 */
    ::-webkit-input-placeholder{
        color: white;
    }
    /* input框的鼠标悬浮伪类选择器 */
    .inputcss:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
    /* input框的点击伪类选择器 */
    .inputcss:focus{
        background-color: white;
        width: 300px;
        color: #1989FA;
        -webkit-transition-duration: 0.25s;
        transition-duration: 0.25s;
    }
    
    @-webkit-keyframes square {
        0% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-700px) rotate(600deg);
                    transform: translateY(-700px) rotate(600deg);
        }
        }
        @keyframes square {
        0% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-700px) rotate(600deg);
                    transform: translateY(-700px) rotate(600deg);
        }
    }
</style>