const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let datetoday = new Date();
    let hr = datetoday.gethours();
    let min = datetoday.getminutes();
    let s = datetoday.getseconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})