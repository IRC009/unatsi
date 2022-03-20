const dia = document.querySelector(".dia");
const hora = document.querySelector(".hora");
const minuto = document.querySelector(".minuto");
const segundo = document.querySelector(".segundo");
const dia2 = document.querySelector(".dia2");
const hora2 = document.querySelector(".hora2");
const minuto2 = document.querySelector(".minuto2");
const segundo2 = document.querySelector(".segundo2");

const contador = ()=>{
    const actualDate = new Date();
    const nextDate = new Date("Sat Mar 26 2022 14:30:00 GMT-0500 (hora estándar de Colombia)");
    const sec = Math.floor((nextDate-actualDate) / 1000);
    const seconds = sec % 60;
    const minutes = Math.floor((sec / 60)) % 60;
    const hour = Math.floor(sec / 3600) % 24;
    const days = Math.floor(sec / 3600 / 24);

    segundo.innerHTML = tiempoCero(seconds);
    minuto.innerHTML = tiempoCero(minutes);
    hora.textContent = tiempoCero(hour);
    dia.innerHTML = tiempoCero(days);
    
    segundo2.innerHTML = tiempoCero(seconds);
    minuto2.innerHTML = tiempoCero(minutes);
    hora2.textContent = tiempoCero(hour);
    dia2.innerHTML = tiempoCero(days);

}
const tiempoCero = (time)=>{
    if(time<10){
        return "0" + time
    }
    else{
        return time
    }
}

setInterval(contador,1000)