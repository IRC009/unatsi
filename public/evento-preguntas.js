const ask = document.querySelector(".ask");

ask.addEventListener("click",(e)=>{
    if(e.target.classList.contains("evento")){
        let id = e.target.dataset.ask;
        validarClases(e)
    }
})

const validarClases = e =>{
    if(e.target.classList.contains("parrafo-validar") || e.target.classList.contains("flecha-validar")){
        let objeto = e.target.parentNode;
        cambiarClases(objeto);
        
    }else{
        let objeto = e.target;
        cambiarClases(objeto);
    }
    
}

const cambiarClases = (objeto)=>{
    let flecha = objeto.querySelector(".flecha-validar");
    let respuesta = objeto.parentNode.querySelector(".respuesta");
    let id = objeto.dataset.ask; // verificamos el id para poder usarlo en cerrar spans (respuestas)
    if(flecha.classList.contains("flecha-arriba")){
        flecha.classList.remove("flecha-arriba");
    }else{
        flecha.classList.add("flecha-arriba")
    }
    //con esto cerramos los otros span que esten abiertos
    const otrasRepuestas = document.querySelectorAll(".respuesta")
    for(let i = 0; i <4; i++){
        if(otrasRepuestas[i].dataset.ask != id && otrasRepuestas[i].classList.contains("open")){
            otrasRepuestas[i].classList.remove("open");
            otrasRepuestas[i].parentNode.querySelector(".flecha-validar").classList.remove("flecha-arriba");
        }
    }

    if(respuesta.classList.contains("open")){
        respuesta.classList.remove("open");
    }else{
        respuesta.classList.add("open")
    }

}