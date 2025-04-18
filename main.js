  document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.fixed-action-btn');
   var instances = M.FloatingActionButton.init(elems,{
      
   });
});

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.style.opacity = "1" - window.pageYOffset / 650;
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
    audio.volume = 0.2;
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
      iconoluna= document.querySelector('.activo');

      var CabioIcono = function() {
         if(document.body.classList.contains('modoluz')){
        iconoluna.classList.remove('fa-sun');
        iconoluna.classList.add('fa-moon');
      } else {
        iconoluna.classList.remove('fa-moon');
        iconoluna.classList.add('fa-sun');
      };
      }      

   noactivo.addEventListener("click", ()=> {
    document.body.classList.toggle('modoluz');
     CabioIcono();
  });
  
 