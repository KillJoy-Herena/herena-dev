 //Aqui codigo para el efecto del scroll (scrollReval)
  ScrollReveal().reveal('.aboutme');
  ScrollReveal().reveal('.skills', { delay: 500 });
  ScrollReveal().reveal('.hobbies', { delay: 500 });


 //metodo inicacion materialize boton fijo
 document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.fixed-action-btn');
   var instances = M.FloatingActionButton.init(elems,{
      
   });
});
// iniciacion materialize carousel
document.addEventListener('DOMContentLoaded', ()=> {
   const elementosCarousel = document.querySelectorAll('.carousel');
   M.Carousel.init(elementosCarousel, {
      duration: 150,
   
   });
});
//    METODOS VARIABLES Y CONSTANTES PARA EL REPRODUCTOR DE AUDIO
   var audio = document.getElementById("audio");
   const reproduce = document.getElementById("reproduce");
  const duracion = document.getElementById("timeCompleto"),
        Actual = document.getElementById("timeActual");
 const activo = document.querySelector('.play'),
       desactivo = document.querySelector('.enable');

   var playpause = function () {
      if (audio.paused) {
        audio.play();
        activo.style.display = "none";
        desactivo.style.display = "inline";

      } else {
        audio.pause();
        activo.style.display = "inline";
        desactivo.style.display = "none";
     }
    }
    const calculaTiempo = (secs) => {
      const minutos = Math.floor(secs / 60),
            segundos = Math.floor(secs %60),
            retornaSegundos = segundos < 10 ? `0${segundos}` : `${segundos}`;
            return `${minutos}:${retornaSegundos}`;
    }
     const vistaDuracion = () =>{
       duracion.innerHTML = calculaTiempo(audio.duration)
     }

    if (audio.readyState > 0){
      vistaDuracion();
      Actual.innerHTML = calculaTiempo(audio.currentTime);
      }else{
        audio.addEventListener('loadedmetadata', () =>{
          vistaDuracion();
        })
     }
     audio.ontimeupdate = function(){
       Actual.innerHTML = calculaTiempo(audio.currentTime);
       setProgress();
     }

    function setProgress(){
    let porcentaje =(audio.currentTime / audio.duration) * 100;
    document.querySelector('.progress').style.width = porcentaje + "%";
    }
// metodo del boton play
    reproduce.addEventListener("click", playpause);
    
    
//metodos botones adelantar y atrazar 
    const atrazar = document.querySelector('.atras'),
          adelantar = document.querySelector('.delante');

    adelantar.addEventListener('click', ()=>{
      audio.currentTime +=10;
    })  
    atrazar.addEventListener('click', ()=>{
      audio.currentTime -=10;
    })  
// FUNCIONES Y CONSTANTES PARA EL METODO MODO NOCTURNO
const noactivo = document.querySelector('.noactivo'),
      activono = document.querySelector('noactivo'),
      active= document.querySelector('active'),
       nombreClss = document.querySelector('modoluz');

   noactivo.addEventListener("click", ()=> {
    document.body.classList.toggle('modoluz');

   })
   
