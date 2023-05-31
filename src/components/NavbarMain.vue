<template lang="js">
      <nav class="nav__main">
      <h2>Makdolan</h2> 
      <ul>
        <li>
          <router-link to="/">Panel Główny</router-link>
        </li>
        <li>
          <router-link to="/stats">Statystyki</router-link>
        </li>
        <li>
          <router-link to="/settings">Ustawienia</router-link>
        </li>
      </ul>
      <router-link to="/logout">Logout</router-link>
  </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
 .nav{
  &__main{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    height: 90vh;
    width: 15%;
    min-width: 250px;

   & li {
    list-style: none;
    text-align: left;
    margin: 20px 0;

    & a{
       text-decoration: none;
      font-weight: bold;
      color: #000;
    }
   }
   & h2{
    font-size: 2rem;
    font-weight: bold; 
    color: #000;
    margin: 50px 0 -250px 0 ;
   }
    
    
  } 
 
}
</style>