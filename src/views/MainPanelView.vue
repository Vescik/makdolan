<template lang="js">
    <div class="main__panel">
        <h1>Lista produktów</h1>
        <ul>
            <li>Nazwa</li>
            <li>Cena</li>
            <li>Rozmiar</li>
            <li>Typ</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
                   
        }
    }
}
</script>
<style scoped lang="scss">
    .main__panel{
    width: 100%;
        & ul{
            display: flex;
            justify-content: space-between;
            & li{
                list-style: none;
                font-weight: bold;
                font-size: 1.1rem;
                color: grey;
                margin: 0 50px 0 50px
            }
        }
    }
</style>