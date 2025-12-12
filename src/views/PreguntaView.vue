<template>
    <div class="container">
    <Pregunta />  
    </div>
</template>

<script>
import Pregunta from '../components/Pregunta.vue'
export default {
  components: {
    Pregunta,
  },
}
</script>

<style scoped>
.container {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
h2 {
  font-size: 50px;
}

body{
  background-color: black;
  color: black;
}
</style>