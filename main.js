 //metodo para efecto palanca en boton del menu en vista mobil
 document.querySelector('.palanca').addEventListener('click',() => {
   document.querySelector('.navMenu').classList.toggle('show');
});
// metodo palanca en el submenu
document.querySelector('.subMenu').addEventListener('click',() => {
   document.querySelector('.navMenu').classList.toggle('show');
});

