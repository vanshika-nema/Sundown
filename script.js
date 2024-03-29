// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });
// 
// var a = document.querySelector("#elem1")
// console.log(a)

var a = document.querySelector(".container")
var pics = document.querySelector(".pictures")
a.addEventListener("mouseenter",function(){
    // alert("dekh gya")
    pics.style.display = "block"
})
a.addEventListener("mouseleave",function(){
    pics.style.display = "none"
})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
   e.addEventListener("mouseenter",function(){
       var image = e.getAttribute("data-image")
       pics.style.backgroundImage = `url(${image})`
   })
})

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
       
      });

}
swiper()

// var main = document.querySelector(".swiper-slide")

// var crs = document.querySelector(".cursor")

// main.addEventListener("mousemove",function(dets){
//     crs.style.left = dets.x+"px"

// })
// main.addEventListener("mouseleave",function(dets){

//     crs.style.display = "none"

// })