const UL= document.querySelector('.nav-links');
const list= document.querySelector('.lists');
const navi= document.querySelector('.navi');
const menu= document.querySelector('.burgur');
const cover= document.querySelector('.cover');

menu.addEventListener('click', function(){
    UL.classList.toggle('nav-linksActive');
    list.classList.toggle('listActive');
    navi.classList.toggle('naviActive');
    cover.classList.toggle('coverActive')
});