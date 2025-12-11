<template>
  <!-- HTML, DIRECTIVAS, JAVASCIPT CON {{  }} -->
  <div>
    <!-- <ContadorView /> -->
    <!-- <DirectivasView /> -->
    <PreguntaView />
  </div>
</template>

<script>
//MANEJO DE COMPONENTES CON JAVASCRIPT, FUNCIONALIDADES Y ELEMENTOS DE VUE
import ContadorView from '../src/views/ContadorView.vue'
import DirectivasView from './views/DirectivasView.vue';
import PreguntaView from './views/PreguntaView.vue';
  
export default {
  components: {
    ContadorView,
    DirectivasView,
    PreguntaView,
  },
};
</script>


<style>
/* AQUI NO VAMOS A USAR CODIFIACION O ELEMENTOS DE VUE, SOLO VAMOS A USAR LOS ESTILOS */


</style>