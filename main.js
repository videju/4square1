console.log("hello")
const navMenu = document.getElementById("nav-menu"),
toggleMenu = document.getElementById('toggle-menu'),
closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener("click", () =>{
    navMenu.classList.toggle('show');
})

closeMenu.addEventListener("click", () =>{
    navMenu.classList.remove('show');
})




//making navbar sticky
header = document.querySelector(".header")

window.onscroll = function(){
    var top =  window.scrollY;
    console.log(top);
    if (top >= 10){
        header.classList.add("sticky")
    }else{
        header.classList.remove("sticky")
    }
    //owl-carousel script
    
}

var counter = 1 ;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 5000);