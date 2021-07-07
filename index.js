let position = -000;
    
    const nextSlide = function () { 
        const nextSlide = document.getElementById('nextSlide');
        
        position -= 200; 
            
        nextSlide.style.transform = `translateX(${position}px)`;
    }; 
        
    const previousSlide = function () {
        const previousSlide = document.getElementById('previousSlide');
        
        position += 200;
            
        previousSlide.style.transform = `translateX(${position}px)`;
    };