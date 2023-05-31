<template>
  <div class="container">
    <NavbarMain/>
  <main class="panel__container">
   
        <div class="panel__box"> 
          <router-view/>
          <div class="panel__user">
            <div class="panel__user__details">
              <img class="panel__user__avatar" :src="userAvatar" alt="avatar.png">
              <h2 class="panel__user__name">{{ userName }}</h2>
              <h2 class="panel__user__title">{{ userTitle }}</h2>
            </div>
            <div class="panel__user__activity">
              <h3 class="panel__user__head">Aktywności</h3>
              <button class="panel__user__btn btn__main" >Dodaj produkt</button>
            </div>
          </div>
        </div>
  </main>
  </div>
</template>

<script>
  import NavbarMain from './components/NavbarMain.vue'
  export default{
    components: {
      NavbarMain
    },
    data() {
      return {
        userName: 'Admin',
        userTitle: 'dev admin stage',
        userAvatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1680632355~exp=1680632955~hmac=adba9051062203a4aa03d0d4947edf4cf98d75e7d5bd8976db9b12535b35f99b" 
      }
    },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container{
  display: flex;
  background: #d8cd99;
  height: 100vh;
}

.panel{
  &__container{
    width: 100%;
    overflow-y: hidden; 
    display: flex;
    align-items: center; 
  }
    &__user{
      min-width: 300px; 
      background: #46992C;
      border-radius: 0 20px 20px 0;

      &__avatar{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 20px;
    }
    }
  &__box{
    background-color: #FBFAF4;
    width: 100% ;
    height: 95%;
    margin: 50px;
    border-radius: 20px;
    text-align: left;

    box-shadow: 0px 38px 15px rgba(0, 19, 51, 0.01),
     0px 21px 13px rgba(0, 19, 51, 0.05), 0px 9px 9px rgba(0, 19, 51, 0.09), 
     0px 2px 5px rgba(0, 19, 51, 0.1), 0px 0px 0px rgba(0, 19, 51, 0.1);

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    
    & h1{
            margin: 50px 20px;
        }

    
  }
  
}
</style>
