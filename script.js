function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





}
loco();




var itag= document.querySelector("#nav-prt i")
var menu=document.querySelector("#nav-menu")
var nav=document.querySelector("#nav")

var flag=0

itag.addEventListener("click",function(){
if(flag==0){
    menu.style.top="0%"
    nav.style.color="#222"    
    nav.style.backgroundColor="#dadada"    
    flag=1;
     
}
else{
    menu.style.top="-100%"
    nav.style.color="#dadada"
    nav.style.backgroundColor="transparent"
    flag=0;
}
})

gsap.from("#nav",{
    opacity:.5,
    duration:1.5,
    x:-30,
})

var t1=gsap.timeline();
t1.from("#page1 h1" ,{
    y:70,
    opacity:0,
    duration:0.6
})
t1.from("#page1 h2" ,{
    delay:-0.4,
    y:50,
    opacity:0,
    duration:0.6
})
t1.from("#page1 h3" ,{
    delay:-0.4,
    y:50,
    opacity:0,
    duration:0.6
})

gsap.to("#page2 img",{
    scale:1,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"#main",
        start:"top 80%",
        end:"top 10%",
        scrub:3
    }
})
gsap.from("#page2 h1",{
    opacity:0,
    y:50,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"#main",
        start:"top 90%",
        end:"top 80%",
        scrub:5
    }
})
gsap.from("#ele1 h1",{
    opacity:0,
    y:50,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#ele1 h1",
        scrub:5,
        start:"top 80%",
        end:"top 50%",
    }
})
gsap.from("#ele2 h1",{
    opacity:0,
    y:50,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#ele1 h1",
        scrub:5,
        start:"top 80%",
        end:"top 50%",
    }
})

gsap.from("#page5ele h1",{
    opacity:0,
    y:50,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page5ele h1",
        scrub:5,
        start:"top 80%",
        end:"top 50%",
    }
})
gsap.from("#page5ele h4",{
    opacity:0,
    y:50,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page5ele h1",
        scrub:5,
        start:"top 55%",
        end:"top 30%",
    }
})

gsap.from("#page5ele img",{
    opacity:1,
    rotate:360,
    repeat:-1,
    duration:1,
    ease: "none"
})

var slide1=document.querySelectorAll("#page6 .slide1 h1")
slide1.forEach(function(ele){
    gsap.to(ele,{
        transform:'translateX(-100%)',
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:3
        }
    
    })
})
var slide2=document.querySelectorAll("#page6 .slide2 h1")
slide2.forEach(function(ele){
    gsap.to(ele,{
        transform:'translateX(0)',
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:3
        }
    
    })
})

document.querySelector("#elem1").addEventListener("mouseover" ,function(ele){
    document.querySelector("#elem1 img").style.opacity=1
    document.querySelector("#elem1 img").style.left=`${ele.x -100}px`//usko mouse ka sath move karana ka lia 
    document.querySelector("#elem1 img").style.top=`${ele.y -350}px`//usko mouse ka sath move karana ka lia
})
document.querySelector("#elem1").addEventListener("mouseleave" ,function(ele){
    document.querySelector("#elem1 img").style.opacity=0
})

document.querySelector("#elem2").addEventListener("mouseover" ,function(ele){
    document.querySelector("#elem2 img").style.opacity=1
    document.querySelector("#elem2 img").style.left=`${ele.x -300}px`//usko mouse ka sath move karana ka lia 
    document.querySelector("#elem2 img").style.top=`${ele.y -400}px`//usko mouse ka sath move karana ka lia 
})
document.querySelector("#elem2").addEventListener("mouseleave" ,function(ele){
    document.querySelector("#elem2 img").style.opacity=0
})




gsap.from("#page8 h1",{
    opacity:0,
    y:50,
    ease:Expo.easeInOut,
    duration:1  ,
    scrollTrigger:{
        trigger:"#page8 h1",
        scroller:"#main",
        start:"top 100%",
        end:"top 60%",
        scrub:5,
    }
})

gsap.from("#first img",{
    y:50,
    stagger:1,
    opacity:.5,
    duration:0.5,
    scrollTrigger:{
        trigger:"#first img",
        scroller:"#main",
        start:"top 100%",
        end:"top 60%",
        scrub:5,
    }
})

gsap.from("#second img",{
    y:50,
    stagger:1,
    opacity:.5,
    duration:0.5,
    scrollTrigger:{
        trigger:"#second img",
        scroller:"#main",
        start:"top 100%",
        end:"top 60%",
        scrub:5,
    }
})
gsap.from("#third img",{
    y:50,
    stagger:0.05,
    opacity:0,
    scrollTrigger:{
        trigger:"#third img",
        scroller:"#main",
        start:"top 100%",
        end:"top 60%",
        scrub:true,
    }
})
