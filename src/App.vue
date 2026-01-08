<template>
  <!-- HTML, DIRECTIVAS, JAVASCIPT CON {{  }} -->
  <div>
    <!-- <ContadorView /> -->
    <!-- <DirectivasView /> -->
    <!--<PreguntaView />-->
    <PokemonView />
  </div>
</template>

<script>
//MANEJO DE COMPONENTES CON JAVASCRIPT, FUNCIONALIDADES Y ELEMENTOS DE VUE
import ContadorView from '../src/views/ContadorView.vue'
import DirectivasView from './views/DirectivasView.vue';
import PreguntaView from './views/PreguntaView.vue';
import PokemonView from './views/PokemonView.vue'; 

export default {
  components: {
    ContadorView,
    DirectivasView,
    PreguntaView,
    PokemonView,
  },
};
</script>


<style>
/* AQUI NO VAMOS A USAR CODIFIACION O ELEMENTOS DE VUE, SOLO VAMOS A USAR LOS ESTILOS */


</style>