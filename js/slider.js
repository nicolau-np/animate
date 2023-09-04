var active = 0;
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var sliderItems = document.querySelectorAll('.sliders .slider-item')

var numeroItems = sliderItems.length -1;

showSlider();
time();

prev.addEventListener('click', function(){
prevSlider();
})

next.addEventListener('click', function(){
nextSlider();
})

function showSlider(){
    sliderItems.forEach((e)=>{
        e.classList.remove('active')
    })
    sliderItems[active].classList.add('active')
}

function nextSlider(){
    if(active==numeroItems){
        active = 0;
    }else{
        active = active + 1;
    }
    showSlider();
}

function prevSlider(){
    if(active==0){
        active = numeroItems;
    }else{
        active = active -1;
    }
    showSlider();
}

function time(){
    setInterval(()=>{
        nextSlider();
    }, 5000);
}
