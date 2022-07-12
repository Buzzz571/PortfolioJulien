<template>
<div>
<Header></Header>
<RouterView></RouterView>

</div>

</template>

<script>

import Header from "./components/Header.vue"

export default {
  data() {
    return {};
  },
  // declaration of external components using in current components
  components: {
    
    Header,   
   
  },
}
</script>

<style lang="scss">
  // on importe les styles dans le style du composant
  @import "./assets/scss/main.scss";
</style>