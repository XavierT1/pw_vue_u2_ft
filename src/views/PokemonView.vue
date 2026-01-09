<template>
    <PokemonImagen :pokemonId="pokemonGanador" />
    <PokemonOpciones @seleccionado="evaluarGanador($event)" :listaPokemons="pokemonArr"/>

    <div v-if="mensaje" class="resultado">
        <h2>{{ mensaje }}</h2>
    </div>

</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';
import {obtenerVectorPokemonFachada, obtenerAleatorioFachada} from '../clients/PokemonClient.js';

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mensaje: null // 1. Variable reactiva nueva
    };
  },
  async mounted() {
    console.log('Componente montado');
    this.iniciarJuego();
  },
  methods:{
    async iniciarJuego(){
      this.pokemonArr = await obtenerVectorPokemonFachada();
      const idAleatorio = obtenerAleatorioFachada(0,3);
      this.pokemonGanador = this.pokemonArr[idAleatorio].id;
      this.mensaje = null; // Reiniciamos el mensaje al iniciar
    },
    evaluarGanador(idGanador){
      // 2. Lógica para actualizar el mensaje en pantalla
      if(idGanador === this.pokemonGanador){
        this.mensaje = "¡Correcto! Has ganado";
      } else {
        this.mensaje = "¡Incorrecto! Perdiste";
      }
    }
  },
};
</script>

<style>
/* Opcional: Para que se vea centrado y bonito */
.resultado {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    color: #333;
    font-weight: bold;
}
</style>