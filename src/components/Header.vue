<template>
   <div class="main-menu">
    <a class="logo" rel="home" href="#">
      <img class="logo-j" src="../assets/images/j-letter-37776.png" alt="JR logo">
    </a>
    <nav class="main-menu_nav">
      <RouterLink to="/">
            <a>Home</a>
      </RouterLink>
      <RouterLink to="/about">
            <a>About</a>
      </RouterLink>
      <RouterLink to="/skills">
            <a>Skills</a>
      </RouterLink>
      <RouterLink to="/projets">
            <a>Projets</a>
      </RouterLink>
      <RouterLink to="/contact">
            <a>Contact</a>
      </RouterLink>    
           
    </nav>
    <ul class="social">
      <li>
        <a class="logo-social" rel="linkedin" href="#">
          <img class="logo-linkedin" src="../assets/images/linkedin.png" alt="linkedin-logo">
        </a>
      </li>
      <li><a class="logo-social" rel="github" href="#">
          <img class="logo-git" src="../assets/images/github.png" alt="github-logo">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/header.scss';

</style>