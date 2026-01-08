<template>
    <div>    
        <img v-if="imagen" :src="imagen" alt="No se puede ver la imagen">
        <div class="oscuro"></div>

        <div class="pregunta-container">
        <div class="datos">   
        <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
        </div>
        <p>Recuerda terminar con el signo de interrogación (?)</p>
        
        <h2>{{ pregunta }}</h2>
        <h1>{{ respuesta }}</h1>
        
    </div>
    
    </div>
</template>

<script>
import {consumirAPIFachada} from '@/clients/YesNoClient';    
export default {

    data() {
        return {
            pregunta:null,      
            respuesta:null,
            imagen:null,
        };
    },
    watch:{
        pregunta(value, oldValue){
            console.log('value',value);
            console.log('oldValue',oldValue);

            if(value.includes('?')){
                //llamar al API
                this.respuesta = "Pensando...";
                this.consumir();  
            }
        },
    },
    methods: {
      async consumir(){
        const resp = await consumirAPIFachada();
        console.log("Respuesta final");
        console.log(resp);
        console.log(resp.answer);
        this.respuesta = resp.answer;
        this.imagen = resp.image;
      }  
    },
};
</script>

<style scoped>
img, .oscuro{
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    
    position: fixed;
    left: 0px;
    top: 0px;
}
.oscuro{
    background-color: rgba(0,0,0,0.4);
}

.pregunta-container{
    position: relative;

    min-height: 100vh; /*altura de toda la pantalla 8*/
    display: flex;
    flex-direction: column; /*elementos uno debajo del otro 8*/
    justify-content: center; /*centrado vertical 8*/
    align-items: center; /*centrado horizontal 8*/
}

input{
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}

input:focus{
    outline: none;
}

h1,h2,p{
    color: white;
    font-size: 40px;
    text-shadow: 2px 2px 4px #000000; 
}
p{
    font-size: 20px;
}
h2{
    margin-top: 150px;
}

.datos{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

</style>