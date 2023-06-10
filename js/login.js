const envoltorio = document.querySelector('.envoltorio');
const loginlink = document.querySelector('.login-link');
const registrarselink = document.querySelector('.registrarse-link');
const btnPopup = document.querySelector('.btn-login-up');
const iconClose = document.querySelector('.cerrar-icono')

registrarselink.addEventListener('click', ()=>{
    envoltorio.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    envoltorio.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    envoltorio.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    envoltorio.classList.remove('active-popup');
});
