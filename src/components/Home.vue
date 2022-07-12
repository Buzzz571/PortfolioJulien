<template>

   <div class="main-container">
    <section class="home">
      <div class="me"><span class="me">Bonjour , je suis</span> <span class="name">Julien</span>
        <div class="typewriter">
          <h1>Développeur web.</h1>
        </div>
        <div class="text-info">
          <p>
            Développeur Front end & Wordpress
          </p>
        </div>
      </div>
    </section>
   </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import '../assets/scss/global.scss';
/* GENERAL CONTAINER */
.main-container{
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  }
  /* HOME WRITTER */
  /* DEMO-SPECIFIC STYLES */
  .me{
    margin-top: 8em;
    font-size: 45px;
    
  }
  .name{
    text-transform: uppercase;
    font-weight: bolder;
    font-style: italic;
  }
  .typewriter h1 {  
    color: #fff;
    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid #ED6906;; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
      typing 3.5s steps(30, end),
      blink-caret .5s step-end infinite;
  }
  
  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #ED6906; }
  }
  span.name{
    color: #ED6906;
  }
  /* HOME SECTION */
  #section-home {
    height: 100vh;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  /* TITLE*/
  h1 {
    font-size: 40px;
    font-style: italic;
  }
  .text-info {
    font-size: 18px;
  color: #ED6906;
  }
</style>