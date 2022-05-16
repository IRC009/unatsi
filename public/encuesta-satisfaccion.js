const opcion1 = document.querySelector(".opcion1");
const opcion2 = document.querySelector(".opcion2");
const opcion3 = document.querySelector(".opcion3");
const opcion4 = document.querySelector(".opcion4");
const formulario = document.querySelector(".formulario-encuesta");

opcion1.innerHTML = `Excelente`;
opcion2.innerHTML = `Buena`;
opcion3.innerHTML = `Regular`;
opcion4.innerHTML = `Mala`;

const enviarDatos = async (e)=>{
    try {
        const res = await fetch("/encuesta/enviar",{
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                opcion1 : e.target.opcion1.checked, //usamos el e del parametro
                opcion2 : e.target.opcion2.checked,
                opcion3 : e.target.opcion3.checked,
                opcion4 : e.target.opcion4.checked

            })
        });
        const data = await res.json()
        formulario.reset(); //reiniciamos el formulario
        alert(data.mensaje);
    } catch (error) {
        console.log(error);
    }
}

formulario.addEventListener("submit",  (e)=>{
    enviarDatos(e); //enviamos el parametro e para usarlo en el envio de datos
    
});