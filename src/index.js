// console.log('hello')

// function toggle(){
//       let select = document.querySelector('.belarus-pop'),
//           compStyle = window.getComputedStyle(select);
          
//       if (compStyle.getPropertyValue('display') == 'none'){
//         select.style.display = 'block';
//       } else {
//         select.style.display = 'none';
//       }
//     }
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function toggle(wrap){
      let select = document.querySelector(wrap),
          compStyle = window.getComputedStyle(select);
          
      if (compStyle.getPropertyValue('display') == 'none'){
        select.style.display = 'block';
      } else {
        select.style.display = 'none';
      }
    }

    // document.querySelector(".open-belarus").addEventListener("click", toggle);
    // document.querySelector(".close-belarus").addEventListener("click", toggle);


    document.querySelector(".open-belarus").addEventListener("click", () => toggle('.belarus-pop'));
    document.querySelector(".close-belarus").addEventListener("click", () => toggle('.belarus-pop'));


    document.querySelector(".open-moto").addEventListener("click", () => toggle('.moto-pop'));
    document.querySelector(".close-moto").addEventListener("click", () => toggle('.moto-pop'));

    document.querySelector(".open-shop").addEventListener("click", () => toggle('.shop-pop'));
    document.querySelector(".close-shop").addEventListener("click", () => toggle('.shop-pop'));


    document.querySelector(".open-work").addEventListener("click", () => toggle('.work-pop'));
    document.querySelector(".close-work").addEventListener("click", () => toggle('.work-pop'));


    // document.querySelector(".pop-to-form").addEventListener("click", () => toggle('.work-pop'));

    document.querySelector(".open-prices-1").addEventListener("click", () => toggle('.prices-1'));
    document.querySelector(".close-prices-1").addEventListener("click", () => toggle('.prices-1'));



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// $(window).on('load resize', function() {
//   if ($(window).width() < 748) {
//     $('.prices-table-slider:not(.slick-initialized)').slick({
//       centerMode: true,
//       dots: true,
//       infinite: true,
//       speed: 100,
//       slidesToShow: 1
//     });
//   } else {
//     $("#items.slick-initialized").slick("unslick");
//   }
// });


