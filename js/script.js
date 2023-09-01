var about = document.querySelector('.about');


window.addEventListener('scroll', ()=>{
    const distanciaTop = about.getBoundingClientRect().top;

    if(distanciaTop==273){
        about.style.backgroundColor="green";
    }
});