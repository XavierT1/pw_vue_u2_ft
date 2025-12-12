import axios from "axios";

const consumirApi = async () => {
    const respuesta = await axios.get("https://yesno.wtf/api").then(r => r.data);
    console.log(respuesta);
    return respuesta;
}   

export async function consumirAPIFachada() { 
    return await consumirApi();
}

export async function consumirAPIFachada2() { 
    return await consumirApi();
}
