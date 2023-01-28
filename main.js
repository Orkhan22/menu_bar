const topx = document.querySelector(".menu-top");
const center = document.querySelector(".menu-center");
const bottom = document.querySelector(".menu-bottom");

const menu = document.querySelector(".menu-conta");

const hamburger = document.querySelector(".hamburger");

let say =0;
// hamburger.addEventListener("click",()=>{
// if(say==0){
//     menu.setAttribute("style","left:0%")
//     topx.setAttribute("style","transform:rotate(-46deg);margin-top:2px")
//     center.setAttribute("style","transform:rotate(45deg);    margin-top: -5px;")
//     bottom.setAttribute("style","transform:rotate(-45deg);opacity:0")

//     say++
// }else{
//     menu.setAttribute("style","left:-100%")
//     topx.setAttribute("style","transform:rotate(0deg)")
//     center.setAttribute("style","transform:rotate(0deg)")
//     bottom.setAttribute("style","transform:rotate(0deg);opacity:1")

//     say--
// }
// })


hamburger.addEventListener("click",()=>{
    if(say==0){
        menu.setAttribute("style","left:0%")
        topx.setAttribute("style","transform:rotate(-46deg);margin-top:2px")
        center.setAttribute("style","transform:rotate(45deg);margin-top:-5px")
        bottom.setAttribute("style","transform:rotate(-46deg);margin-top:-9px")
        say++
    }else{
        menu.setAttribute("style","left:-100%")
        topx.setAttribute("style","transform:rotate(0deg)")
        center.setAttribute("style","transform:rotate(0deg)")
        bottom.setAttribute("style","transform:rotate(0deg)")
        say--

    }
})