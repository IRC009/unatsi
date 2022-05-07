//no estare usando este documento
const opcion1 = document.querySelector(".opcion1");
const opcion2 = document.querySelector(".opcion2");
const opcion3 = document.querySelector(".opcion3");
const opcion4 = document.querySelector(".opcion4");
const formulario = document.querySelector(".formulario-encuesta");

// const formData = new FormData(formulario); //objeto formData para enviar datos del formulario, más en https://developer.mozilla.org/es/docs/Web/API/FormData/Using_FormData_Objects, aqui no lo uso porque no pude enviar los datos
let respuestaIP; //guardar el ip


const actualDate = new Date();

//esto se ajustara a la hora que tenga el ordenador
const nextDate = new Date(Date.UTC(2022,03,16,19,30));

let dia = nextDate.getDate();
let mes = nextDate.getMonth();
let año = nextDate.getFullYear();
let hora = nextDate.getHours();
let minuto = nextDate.getMinutes();

opcion1.innerHTML = `${dia}/${mes + 1}/${año} ${hora}:${minuto}`;
opcion2.innerHTML = `${dia + 1}/${mes + 1}/${año} ${hora + 4}:${minuto}`;
opcion3.innerHTML = `${dia - 3}/${mes + 1}/${año} ${hora + 5}:${minuto}`;
opcion4.innerHTML = `${dia}/${mes + 1}/${año} ${hora + 6}:${minuto}`;


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
                opcion4 : e.target.opcion4.checked,
                ip : respuestaIP.ip

            })
        });
        const data = await res.json()
        formulario.reset(); //reiniciamos el formulario
        if(data.mensaje == "Selecione al menos una respuesta"){
            return alert("Selecione al menos una respuesta");
        }
        if(data.mensaje == "Ya usted votó"){
            return alert("Solo se puede votar una vez");
        }
        if(data.mensaje == "Votación exitosa"){
            return alert("Votación exitosa");
        }
    } catch (error) {
        console.log(error);
    }
}

//conocer el ip del cliente
const consultarIP = async (e)=>{
    //esto funciona para encontrar la dirección ip de los clientes
    try {
        const res = await fetch("https://api.ipify.org/?format=json"); //más información https://www.delftstack.com/es/howto/javascript/get-ip-address-javascript/
        const respuesta = await res.json();
        respuestaIP = respuesta;
        enviarDatos(e); // ejecutamos la funcion para enviar los datos

    } catch (error) {
        console.log(error);
        return alert("desactiva el adblock");
    }
}


formulario.addEventListener("submit",  (e)=>{
    e.preventDefault();
    consultarIP(e); //enviamos el parametro e para usarlo en el envio de datos
    
});