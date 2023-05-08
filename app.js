//<![CDATA[
    (() => {
        const sliderPrev = document.querySelector('.prev')
        const sliderNext = document.querySelector('.next')

        const dotFirst = document.querySelector('.es-dot--first')
        const dotSecond = document.querySelector('.es-dot--second')
        const dotThird = document.querySelector('.es-dot--third')
        const dotFourth = document.querySelector('.es-dot--fourth')


        const secondSliderPrev = document.querySelector('.prev2')
        const secondSliderNext = document.querySelector('.next2')

        const secondDotFirst = document.querySelector('.es-dot2--first')
        const secondDotSecond = document.querySelector('.es-dot2--second')
        const secondDotThird = document.querySelector('.es-dot2--third')
        const secondDotFourth = document.querySelector('.es-dot2--fourth')

        const linkFirst = document.querySelector('.es-info__link--first')
        const linkSecond = document.querySelector('.es-info__link--second')
        const linkThird = document.querySelector('.es-info__link--third')
        const linkFourth = document.querySelector('.es-info__link--fourth')

        let slideIndex = [1,1];
        let slideId = ["es-mySlides", "es-mySlides2"]
        let dotId = ["es-dot", "es-dot2"]
        
        function plusSlides(n, no) {
          showSlides(slideIndex[no] += n, no);
        }
        function currentSlide(n, no) {
          showSlides(slideIndex[no] = n, no);
        }
        function showSlides(n, no) {
          let i;
          let x = document.getElementsByClassName(slideId[no]);
          let dots = document.getElementsByClassName(dotId[no]);
          
          if (n > x.length) {slideIndex[no] = 1}
          if (n < 1) {slideIndex[no] = x.length}
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
           for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          x[slideIndex[no]-1].style.display = "block";
          dots[slideIndex[no]-1].className += " active";
        }
        
        showSlides(1, 0);
        showSlides(1, 1);


    
sliderNext.addEventListener('click', ()=> plusSlides(1,0) )
sliderPrev.addEventListener('click', ()=> plusSlides(-1,0) )

dotFirst.addEventListener('click', ()=> currentSlide(1,0) )
dotSecond.addEventListener('click', ()=> currentSlide(2,0) )
dotThird.addEventListener('click', ()=> currentSlide(3,0) )
dotFourth.addEventListener('click', ()=> currentSlide(4,0) )


secondSliderNext.addEventListener('click', ()=> plusSlides(1,1) )
secondSliderPrev.addEventListener('click', ()=> plusSlides(-1,1) )

secondDotFirst.addEventListener('click', ()=> currentSlide(1,1) )
secondDotSecond.addEventListener('click', ()=> currentSlide(2,1) )
secondDotThird.addEventListener('click', ()=> currentSlide(3,1) )
secondDotFourth.addEventListener('click', ()=> currentSlide(4,1) )


linkFirst.addEventListener('click', ()=> currentSlide(1,1) )
linkSecond.addEventListener('click', ()=> currentSlide(2,1) )
linkThird.addEventListener('click', ()=> currentSlide(3,1) )
linkFourth.addEventListener('click', ()=> currentSlide(4,1) )

    const hiddenContent = document.querySelector('.es-comp__hiddenCtn');
    const toggleBtn = document.querySelector('.es-comp__btn');
    const hiddenDosage = document.querySelector('.es-dosage__mainCtn');
    const toggleBtnDosage = document.querySelector('.es-dosage__btn');
    const toggleContent = (ctn)=> {
      ctn.classList.toggle('es-hide');
    }
    toggleBtn.addEventListener('click',()=> toggleContent(hiddenContent));
    toggleBtnDosage.addEventListener('click',()=> toggleContent(hiddenDosage));
        
          })()
    //]]>