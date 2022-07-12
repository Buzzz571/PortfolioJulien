<template>
<div class="contact_container">
  <div class="title">
    <h1>Vous souhaitez prendre contact ?</h1>
  </div>
  <section class="contact">   
    <div class="localisation">
      <h2>Où suis-je ?</h2>      
      <img class="loc" src="../assets/images/loc(1).webp" alt="map">      
    </div> 
    <div class="mail">      
      <h2>Par Mail</h2>  
      <span class="logo">
      <i class="fa-solid fa-square-envelope"></i> 
      <p>julien.reisse@gmail.com</p> 
      </span>        
    </div>
    <div class="phone">      
      <h2>Par téléphone</h2>
      <span class="logo">
      <i class="fa-solid fa-square-phone"></i>
      </span>
    </div>
    <div class="CV">      
      <h2>Pour recupérer mon CV</h2>
      <span class="logo">
      <i class="fa-solid fa-download"></i>
      </span>
    </div>  
  </section>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
/* @import '../assets/scss/components/contact.scss'; */
/* CONTACT PAGE */

.contact_container{
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    
}
.logo{
  font-size: 60px;

  & p{
    font-size: 1.6rem;
  }
}


</style>