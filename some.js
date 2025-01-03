
var nav = gsap.timeline()

nav.from("#nav", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
})
nav.from(".img", {
    opacity:0,
    opacity: 0,
    duration: 0.8,
})
nav.from(".nav-item", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4,
})
nav.from(".center", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    scale: 0.2,
})

var main = document.querySelector("body")
var cursor = document.querySelector("#cursor")
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease:"circ.out"
    })
})