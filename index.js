const card = document.querySelector(".card");
const container = document.querySelector('.container');

const description = document.querySelector(".description");
const title = document.querySelector(".shoeName");
const sizes = document.querySelector(".size-info");
const buttons = document.querySelectorAll(".size-info button");
const size_22 = document.querySelector(".size22");
const size_23 = document.querySelector(".size23");
const size_24 = document.querySelector(".size24");

const purchase = document.querySelector(".purchase");
const sneaker = document.querySelector(".sneaker img");





$(".size-info  button").on('click', function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});



// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 625px)');

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
        container.addEventListener("mousemove" , (e)=>{
        let xAxis = (window.innerWidth/2 - e.pageX)/20;
        let yAxis = (window.innerHeight/2 - e.pageY)/20;
    
        card.style.transform = `rotateY(${xAxis}deg)  rotateX(${yAxis}deg)`;
        console.log('Media Query Matched!');
        });

        
container.addEventListener("mouseenter" , (e)=>{
    card.style.transition = "none";
    title.style.transform = "translateZ(120px)";
    description.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(110px)";
    sneaker.style.transform = "translateZ(150px) rotate(-40deg)";

});

container.addEventListener("mouseleave" , (e)=>{
    card.style.transition = "all 0.5s ease-out";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    title.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotate(0deg)";

});
}
}


// Register event listener
mediaQuery.addEventListener("change" , handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);



container.addEventListener("mouseenter" , (e)=>{
    
    sneaker.style.transform = "translateZ(150px) rotate(-40deg)";

});

container.addEventListener("mouseleave" , (e)=>{
    
    sneaker.style.transform = "translateZ(0px) rotate(0deg)";

});