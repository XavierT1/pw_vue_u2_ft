<template>
    <div class="pokemon-container">
    <img :src="srcImagen" 
    alt="No se puede renderizar">
    </div>
</template>

<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            required: true,
        },
    },
    computed: {
        srcImagen() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    }
}
</script>

<style>
img{
    position: relative;
    height: 200px;
    left: 37%;
}
.pokemon-container{
    height: 200px;
}
</style>