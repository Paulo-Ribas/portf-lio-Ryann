<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div class="logo-container">
        <RouterLink to="/">
          <img src="./assets/img/Logo.png">
        </RouterLink>
      </div>
      <ul>
        <li>
          <routerLink to="/Home">
            home
            <div class="animation-bar"></div>
          </routerLink>
        </li>
        <li>
          <routerLink to="/About">
            sobre mim
            <div class="animation-bar"></div>
          </routerLink>
        </li>
        <li>
          <routerLink to="/Projects">
            projetos
            <div class="animation-bar"></div>
          </routerLink>
        </li>
        <li>
          <routerLink to="/Contact">
            contato
            <div class="animation-bar"></div>
          </routerLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua');
  @import url('https://fonts.googleapis.com/css2?family=Inter');
  @import url('https://fonts.googleapis.com/css2?family=Roboto');

  

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
header {
  height: 80px;
  background-color: #181818;
  width: 100%;
}
:deep(.shadow) {
  background-color: #181818;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  position: absolute;
  z-index: 0;
}
:deep(.container) {
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 1425px;
    z-index: 1;
    position: relative;
}

.logo-container {
  width: 100%;
  height: 100%;
  max-width: 85px;
  position: relative;
  margin: 0px 25px;
}
.logo-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%)
}

nav {
  width: 100%;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
}

nav ul {
  width: 100%;
  max-width: 520px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
nav li {
  list-style: none;
}
nav li a {
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: 'Roboto';
  position: relative;
  display: inline-block;
  padding: 0;
}
.animation-bar {
  width: 0%;
  transition: 0.5s;
  background-color: white;
  position: absolute;
  bottom: 0;
  height: 0.5px;
}
nav li a:hover > .animation-bar {
  width: 100%;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
