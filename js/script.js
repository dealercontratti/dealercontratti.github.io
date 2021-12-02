function toggleClass(){
    var menu__burger = document.getElementById("menu__burger");
    var menu = document.getElementById("menu");
    menu__burger.classList.toggle("active");
    menu.classList.toggle("active");
};
document.getElementById("menu__burger").addEventListener('click', toggleClass );


function removeClass(){
    var menu__burger = document.getElementById("menu__burger");
    var menu = document.getElementById("menu");
    menu__burger.classList.remove("active");
    menu.classList.remove("active");
};
document.getElementById("c_m_1").addEventListener('click', removeClass );
document.getElementById("c_m_2").addEventListener('click', removeClass );
document.getElementById("c_m_3").addEventListener('click', removeClass );
document.getElementById("c_m_4").addEventListener('click', removeClass );


const open = document.getElementById('open');
const open1 = document.getElementById('open1');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const open4 = document.getElementById('open4');
const open5 = document.getElementById('open5');
const open6 = document.getElementById('open6');
const open7 = document.getElementById('open7');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open1.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open2.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open3.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open4.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open5.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open6.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open7.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});


window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            modal_container.classList.add('show');
        },
        60000
    )
});

// Set the date we're counting down to
var countDownDate = new Date("Dec 10, 2021 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the correct element with id=""
  document.getElementById("days").innerHTML = days + "&nbspGiorni";
  document.getElementById("hours").innerHTML = hours + "&nbspOre ";
  document.getElementById("minutes").innerHTML = minutes + "&nbspMin ";
  document.getElementById("seconds").innerHTML = seconds + "&nbspSec ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "Esaurito";
    document.getElementById("hours").innerHTML = " ";
    document.getElementById("minutes").innerHTML = " ";
    document.getElementById("seconds").innerHTML = " ";
  }
}, 1000);
