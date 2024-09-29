export function headerColor(){
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        const scrollPosition = window.scrollY;
    
        const scrollVh = scrollPosition / window.innerHeight * 100;
        if (scrollVh < 90) { // Menos de 100vh
            header.style.backgroundColor = '#FAF7F0';
            header.style.color = '#0f0f0f';
        }else if(scrollVh>=90) {
            header.style.color = '#FAF7F0';
            header.style.backgroundColor = '#0f0f0f';
        }
    });
    
}
