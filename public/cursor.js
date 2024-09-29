export function cursor(){

    document.addEventListener("mousemove", function (event) {
        const square = document.querySelector('.square');
        const dot = document.querySelector('.dot');
        const x = event.pageX;
        const y = event.pageY;
    
        square.style.left = `${x}px`;
        square.style.top = `${y}px`;
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
    
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const headerHeight = viewportHeight * 0.1; 
        const footerHeight = viewportHeight * 0.1; 
        const totalHeight = document.body.offsetHeight; 
    
    
        const isInHeader = y < (scrollY + headerHeight);
        const isInFooter = y > (totalHeight - footerHeight);
    
        function pointerBlack(){
            square.style.borderColor = '#0f0f0f'; 
            dot.style.backgroundColor = square.style.borderColor;
            
            
        }
        function pointerWhite(){
            square.style.borderColor = '#faf7f0'; 
            dot.style.backgroundColor = square.style.borderColor;
            
    
        }
    
        if (y < viewportHeight) {
            pointerWhite()
            if (isInHeader) {
                pointerBlack()
            }
        } else if (y >= viewportHeight) {
            pointerBlack()
            if (isInHeader) {
                pointerWhite()
            }
            if (isInFooter){
                pointerWhite()
            }
        }
    });
    
}
