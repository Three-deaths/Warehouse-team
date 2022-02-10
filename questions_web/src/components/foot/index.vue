<template>
    <div class = "drow">

    </div>
</template>

<script>
    export default{
        name : "Foot",
        data()
        {
            return {

            };
        }
    }
</script>

<style scoped>
    .drow{
        width : 500px;
        height : 500px;
        border : 2px solid red;
    }
    @media screen and (max-width: 960px){
        .drow{
        background-color:#FF6699;
        }
    }

    @media screen and (max-width: 768px){
        .drow{
        background-color:#00FF66;
        }
    }

    @media screen and (max-width: 550px){
        .drow{
        background-color:#6633FF;
        }
    }

    @media screen and (max-width: 320px){
        .drow{
            background-color:#FFFF00;
        }
    }
</style>