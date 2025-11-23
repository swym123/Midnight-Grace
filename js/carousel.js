

const carousels = [...document.querySelectorAll('.carousel')];
const images = document.querySelectorAll(".carousel");

let carousel_index = 0;


setTimeout(() => {
    carousels[0].classList.add('active');
    setIntervalForSlider();
}, 0);

const setIntervalForSlider = () => {
    setInterval(() => {

        carousels[carousel_index].classList.remove('active');

        if(carousel_index == carousels.length -1){
            carousel_index=0
        }
        else{
            carousel_index++;
        }
        images.forEach(img => {
            if (window.innerWidth < 800) {
                
                // img.src = "img/img1.png"; // Change this to the smaller image URL
                img.style.backgroundImage="url(img/img1.png)";
            }else{
    
                if (carousel_index==0){
                    img.style.backgroundImage="url(img/main.jpg)";
                }
                else if(carousel_index==1){
                    img.style.backgroundImage="url(img/main1.jpg)";
                }else if(carousel_index==2){
                    img.style.backgroundImage="url(img/main2.webp)";
                }
        
    
                // img.src = "img/main.jpg";
            }
        });
        carousels[carousel_index].classList.add('active');


    },3000);
}

// change image 

function updateImages() {
   
    images.forEach(img => {
        if (window.innerWidth < 800) {
            
            // img.src = "img/img1.png"; // Change this to the smaller image URL
            img.style.backgroundImage="url(img/img1.png)";
        }else{

            if (carousel_index==0){
                img.style.backgroundImage="url(img/main.jpg)";
            }
            else if(carousel_index==1){
                img.style.backgroundImage="url(img/main1.jpg)";
            }else if(carousel_index==2){
                img.style.backgroundImage="url(img/main2.webp)";
            }
    

            // img.src = "img/main.jpg";
        }
    });
}

// Run on load and resize
window.addEventListener("load", updateImages);
window.addEventListener("resize", updateImages);
