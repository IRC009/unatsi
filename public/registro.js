const formulario = document.querySelector(".formulario");
const nombre = document.querySelector(".nombre");
const apellidos = document.querySelector(".apellidos");
const email = document.querySelector(".email");
const pais = document.querySelector(".pais");
const telefono = document.querySelector(".telefono");
const pNombre = document.querySelector(".p-nombre");
const pApellidos = document.querySelector(".p-apellidos");
const pEmail = document.querySelector(".p-email");
const pPais = document.querySelector(".p-pais");
const pTelefono = document.querySelector(".p-telefono");

formulario.addEventListener("submit",async (e)=>{
    e.preventDefault();
    limpiarClases(); // con esto limpiamos las clases
    try {
        const res = await fetch("/registro",{
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre : nombre.value,
                apellidos : apellidos.value,
                email : email.value,
                pais : pais.value,
                telefono : telefono.value

            })
        });
        const data = await res.json();
        console.log(data.error)
        mostrarError(data); // mostramos el error
    } catch (error) {
        console.log(error);
    }
});

const mostrarError = (data)=>{
    if(data.mensaje == "registro exitoso"){
        formulario.reset(); //reiniciamos el formulario
        return window.location.href = "/registro-exitoso"
    }

    if(data.error.includes("nombre")){
        nombre.classList.add("input-error");
        pNombre.classList.add("p-error-active"); 
    }
    if(data.error.includes("apellidos")){
        apellidos.classList.add("input-error");
        pApellidos.classList.add("p-error-active"); 
    }
    if(data.error.includes("email")){
        email.classList.add("input-error");
        pEmail.classList.add("p-error-active"); 
    }
    if(data.error.includes("pais")){
        pais.classList.add("input-error");
        pPais.classList.add("p-error-active"); 
    }
    if(data.error.includes("telefono")){
        telefono.classList.add("input-error");
        pTelefono.classList.add("p-error-active"); 
    }
    if(data.error.includes("Email ya registrado")){
        email.classList.add("input-error");
        pEmail.classList.add("p-error-active");
        pEmail.textContent = "Email ya registrado" 
    }
    
    
}

const limpiarClases = ()=>{
    nombre.classList.remove("input-error");
    pNombre.classList.remove("p-error-active");

    apellidos.classList.remove("input-error");
    pApellidos.classList.remove("p-error-active");
    
    email.classList.remove("input-error");
    pEmail.classList.remove("p-error-active");

    pais.classList.remove("input-error");
    pPais.classList.remove("p-error-active");

    telefono.classList.remove("input-error");
    pTelefono.classList.remove("p-error-active");
}