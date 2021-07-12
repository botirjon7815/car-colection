window.addEventListener('DOMContentLoaded', () => {
    const slideField = document.querySelector('.offer__slider-inner'),
    slides = document.querySelectorAll('.offer__slide'),
    slideWrapper = document.querySelector('.offer__slider-wrapper'),
    width = window.getComputedStyle(slideWrapper).width,
    next = document.querySelector('.offer__slider-next'),
    prev = document.querySelector('.offer__slider-prev'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total'),
    sliderr = document.querySelector('.offer__slider');

    slideField.style.width = 100 * slides.length + '%' ;

    slides.forEach(slid => {
        slid.style.width = width;
    })
    
    let sliedIndex = 1 ;
    let offset = 0 ;

    if(slides.length < 10 ){
        current.textContent = `0${sliedIndex}`;
        total.textContent = `0${slides.length}`;
    }else{
        current.textContent = sliedIndex;
        total.textContent = slides.length;
    }


    slideField.style.display = 'flex';
    slideField.transition = '.5 ease';
    slideWrapper.style.overflow = 'hidden';


    next.addEventListener('click', () => {

        if(offset == (+width.slice(0, width.length -2) * (slides.length -1))){
            offset = 0;
        }else {
            offset += +width.slice(0, width.length -2);
        }

        slideField.style.transform = `translateX(-${offset}px)`

        if( slides.length == sliedIndex){
           sliedIndex = 1;
        }else{
           sliedIndex++;
        }
        
        if(slides.length < 10){
            current.textContent = `0${sliedIndex}`;

        }else {
            current.textContent = sliedIndex;
        }


    dots.forEach(dot => dot.style.opacity = '.5')
    dots[sliedIndex -1].style.opacity = 1;

    } )


    sliderr.style.position = 'relative';
    let indicator = document.createElement('ol');
    dots=[];
    indicator.style.cssText = `
    
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right:15%;
    margin-left: 15%;
    list-style: none;

    `
    sliderr.append(indicator);
    for(let i = 0; i < slides.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slied-to', i + 1);
        dot.style.cssText = `
        
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color:#fff;
        background-clip: padding-box;
        border-top:10px solid transparent;
        border-bottom:10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;

        
        `

        if(i == 0){
            dot.style.opacity = 1;

        }

        indicator.append(dot);
        dots.push(dot)



    }

    prev.addEventListener('click', () => {

        if(offset == 0){
         offset = (+width.slice(0, width.length -2) * (slides.length -1))
        }else {
            offset -= +width.slice(0, width.length -2);
        }

        slideField.style.transform = `translateX(-${offset}px)`

        if( sliedIndex == 1){
            sliedIndex = slides.length;
         }else{
            sliedIndex--;
         }
         
         if(slides.length < 10){
             current.textContent = `0${sliedIndex}`;
 
         }else {
             current.textContent = sliedIndex;
         }

         dots.forEach(dot => dot.style.opacity = '.5')
         dots[sliedIndex -1].style.opacity = 1;

    } )

  
    dots.forEach(dot =>{
        dot.addEventListener('click', e =>{
            const slideTo = e.target.getAttribute('data-slied-to');

           sliedIndex = slideTo;
           offset = (+width.slice(0, width.length -2) * (slideTo -1))
           slideField.style.transform = `translateX(-${offset}px)`

            
         if(slides.length < 10){
            current.textContent = `0${sliedIndex}`
        }else {
            current.textContent = sliedIndex;
        }

        dots.forEach(dot => dot.style.opacity = '.5')
         dots[sliedIndex -1].style.opacity = 1;

        })
    })

   })

