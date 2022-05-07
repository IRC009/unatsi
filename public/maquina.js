const letter = document.querySelector(".p-header");
const animacion1 = document.querySelector(".animacion1") //para animacion de caja
const animacion2 = document.querySelector(".animacion2");
const animacion3 = document.querySelector(".animacion3")
let i = 1;
let sumar = true;
let velocidad = 100;

const ejecutar = ()=>{
        let letra = "#EL arte de aprender";

        let intervalo1 = setInterval(()=>{
            letter.textContent = letra.slice(0,i);
            if(sumar == true && i <= letra.length + 10){
              i++
            }
            if(i > letra.length + 10){
                sumar = false;
                
            }
            if(sumar == false){
                i--
               
            }
            
            if(i < 1){
                clearInterval(intervalo1)
                i = 1;
                sumar = true
                ejecutar2()
                
                
            }
           
        },velocidad)

}
const ejecutar2 = ()=>{
    let letra = "#De emprender";

    let intervalo1 = setInterval(()=>{
        letter.textContent = letra.slice(0,i);
        if(sumar == true && i <= letra.length + 7){
          i++
        }
        if(i > letra.length + 7){
            sumar = false;
            
        }
        if(sumar == false){
            i--
           
        }
        
        if(i < 1){
            clearInterval(intervalo1)
            i = 1;
            sumar = true
            ejecutar3()
            
            
        }
       
    },velocidad)

}
const ejecutar3 = ()=>{
    let letra = "#De soñar";

    let intervalo1 = setInterval(()=>{
        letter.textContent = letra.slice(0,i);
        if(sumar == true && i <= letra.length + 7){
          i++
        }
        if(i > letra.length + 7){
            sumar = false;
            
        }
        if(sumar == false){
            i--
           
        }
        
        if(i < 1){
            clearInterval(intervalo1)
            i = 1;
            sumar = true
            ejecutar4()
            
            
        }
       
    },velocidad)

}
const ejecutar4 = ()=>{
    let letra = "#Unatsi";

    let intervalo1 = setInterval(()=>{
        letter.textContent = letra.slice(0,i);
        if(sumar == true && i <= letra.length + 35){
          i++
        }
        if(i > letra.length + 35 ){
            sumar = false;
            
        }
        if(sumar == false){
            i--
           
        }
        
        if(i < 1){
            clearInterval(intervalo1)
            i = 1;
            sumar = true
            ejecutar()
            
            
            
            
        }
       
    },velocidad)
}

ejecutar()
const animar = (animacion)=>{
    document.addEventListener("scroll", e=>{
        let distancia = animacion.getBoundingClientRect().top //nos permite ver la distancia que hay del elemento al borde superior del comento
        let pantalla = window.innerHeight/3; // esto nos da el tamaño de la pantalla. más info en https://www.youtube.com/watch?v=wGrizsgNIPM&t=645s, el /3 es para que se active a la tercera parte de la pantalla, pero como quiero que lo haga apenas entre a la pantalla, lo múltiplico por 3 después
        if(distancia < pantalla * 3){
            animacion.style.animation = `animacion1 1s forwards`
        }
        if(distancia > pantalla * 3){
            animacion.style.animation = "none"
        }
})
}
animar(animacion1);


