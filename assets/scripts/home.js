function animateCountUp(element, end, suffix = '', decimals = 0) {
    const duration = 2000; 
    const frameDuration = 1000/60; 
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const countTo = typeof end === 'string' ? parseFloat(end) : end;
    
    // Start the animation
    const counter = setInterval(() => {
        frame++;
        
        const progress = frame / totalFrames;
        const currentCount = countTo * progress;
        
        let formattedCount;
        if (decimals > 0) {
            formattedCount = currentCount.toFixed(decimals);
        } else {
            formattedCount = Math.floor(currentCount);
        }
        
        
        element.textContent = formattedCount + suffix;
        
       
        if (frame === totalFrames) {
            clearInterval(counter);
            element.textContent = countTo + suffix;
        }
    }, frameDuration);
}


function setupCountUpObserver() {
    const options = {
        root: null, // use viewport
        rootMargin: '0px',
        threshold: 0.1 
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const targetValue = element.getAttribute('data-target');
                
                if (element.id === 'traders-count') {
                    animateCountUp(element, targetValue, 'K');
                } else if (element.id === 'market-cap') {
                    animateCountUp(element, targetValue, 'M', 1);
                }
                
               
                observer.unobserve(element);
            }
        });
    }, options);
    
    
    document.querySelectorAll('.stat-number').forEach(element => {
        observer.observe(element);
    });
}


document.addEventListener('DOMContentLoaded', setupCountUpObserver);
document.addEventListener('DOMContentLoaded', navToggler);

// to toggle the nav

function navToggler() {
    
    document.querySelector('.going').addEventListener('click', (e)=> {
       
        // console.log(e);
        document.querySelector('.mobile-menu').classList.toggle('active');
        if (document.querySelector('.mobile-menu').classList.contains('active')){
            document.querySelector('.going').innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';   
        }else{
            document.querySelector('.going').innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';   
        }
        e.stopPropagation();
        
       
        // const bars = document.querySelectorAll('.bar');
        // bars.forEach(bar => {
        //     bar.classList.toggle('change');
            
        // });
    });
    document.querySelector('.gone').addEventListener('click', (e)=> {
        e.stopPropagation();
        document.querySelector('.going').style.display = "";
        document.querySelector('.gone').style.display = "none";
        document.querySelector('.mobile-menu').classList.toggle('active');
        
       
        // const bars = document.querySelectorAll('.bar');
        // bars.forEach(bar => {
        //     bar.classList.toggle('change');
            
        // });
    });
    
}

document.addEventListener('click',()=>{
    if (document.querySelector('.mobile-menu').classList.contains('active')) {
        document.querySelector('.mobile-menu').classList.remove('active');
        document.querySelector('.going').innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>'; 
    }
    

})


// for the date update


document.querySelector('#copyright-year').textContent = new Date().getFullYear();

new Swiper('.wrapper', {
  
    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });





