<template>
    <div v-if="mostrar">
        
        <PokemonImagen v-if="pokemonGanador" :pokemonId="pokemonGanador" />
        
        <PokemonOpciones v-if="pokemonArr.length" @seleccionado="evaluarGanador($event)" :listaPokemons="pokemonArr"/>

        <div v-if="mensaje" class="resultado">
            <h2>{{ mensaje }}</h2>
        </div>

    </div>

    <div class="controles">
        <button @click="destruir()">Destruir Juego</button>
    </div>

</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';
import { obtenerVectorPokemonFachada, obtenerAleatorioFachada } from '../clients/PokemonClient.js';

export default {
    components: {
        PokemonImagen,
        PokemonOpciones,
    },
    data() {
        return {
            pokemonArr: [],
            pokemonGanador: null,
            mensaje: null,
            mostrar: true,
        };
    },
    /* === CICLO DE VIDA === */
    beforeCreate() { console.log("beforeCreate"); },
    created() { console.log("created"); },
    beforeMount() { console.log("beforeMount"); },
    mounted() {
        console.log('mounted');
        this.iniciarJuego();
    },
    beforeUpdate() { console.log("beforeUpdate"); },
    updated() { console.log("updated"); },
    beforeUnmount() { console.log("beforeUnmount"); },
    unmounted() { console.log("unmounted"); },

    methods: {
        async iniciarJuego() {
            this.pokemonArr = await obtenerVectorPokemonFachada();
            const idAleatorio = obtenerAleatorioFachada(0, 3);
            this.pokemonGanador = this.pokemonArr[idAleatorio].id;
            this.mensaje = null;
        },
        evaluarGanador(idGanador) {
            if (idGanador === this.pokemonGanador) {
                this.mensaje = "¡Correcto! Has ganado 🥳";
            } else {
                this.mensaje = "¡Incorrecto! Perdiste 😢";
            }
        },
        
        destruir() {
            this.mostrar = false;
        }
    },
};
</script>

<style>
.resultado {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    color: #333;
    font-weight: bold;
}

.controles {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

button {
    padding: 10px 20px;
    background-color: #ff4444;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}
button:hover {
    background-color: #cc0000;
}
</style>