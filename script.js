const tl=gsap.timeline()
tl.
from('nav',{
    opacity:0,
    y:20,
    duration:1
})
.from('.firstInnerdiv ',{
    opacity:0,
    y:20,
    duration:1,
    stagger:0.3
})    
.from('.firstInnerdiv p,h2,button',{
    opacity:0,
    y:20,
    duration:2,
    stagger:0.2
})    
.from('.AboutRight',{
    scrollTrigger:{
        trigger:'.AboutRight',
        scroller:'body',
        scrub:0.25,
        
    },
opacity:0,
    x:-50
})
.from('.AboutLeft',{
    scrollTrigger:{
        trigger:'.AboutLeft',
        scroller:'body',
        scrub:0.25,
        
    },
opacity:0,
    x:50
})
.from('#Rooms div',{
    scrollTrigger:{
        trigger:'#Rooms div',
        scroller:'body',
        scrub:0.25,
    },
    opacity:0,
    y:20,
    stagger:.1
})    

.from('.Gallery img',{
    scrollTrigger:{
        trigger:'.Gallery img',
        scroller:'body',
        scrub:.25
    },
    x:20,
    opacity:0,
    stagger:.1,
})