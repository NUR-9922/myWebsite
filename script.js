
// gsap section 
// home page section 1

gsap.from("nav,nav .logo,nav ul li,#searchBox,.slide-bar-section-2-icons",{
    opacity:0,
    y:-100,
    duration:0.7,
    stagger:0.1,
});
gsap.from(".side-bar-section-1,.side-bar-section-2,.side-bar-section-3",{
    dealy:1.2,
    opacity:0,
    x:-300,
    duration:1,
    stagger:0.2,
});
gsap.from(".main-container-left-site,.main-container-rite-site",{
    dealy:1.7,
    opacity:0,
    y:200,
    duration:1,
    stagger:0.4,
});
gsap.from(".line", {
    opacity: 0,
    delay: 1, 
    scale: 0,
    duration:0.5,
});

// home page section 2 

gsap.from(".home-page-section-2 h1,.section-2-box", {
    opacity: 0,
    y:100,
    duration:1,
    stagger:0.5,
    scrollTrigger: {
        trigger: ".home-page-section-2",
        start: "top 100%",
       
}});


// gsap section end