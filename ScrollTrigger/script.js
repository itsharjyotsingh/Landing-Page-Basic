gsap.from("#box1", {
    scale: 1.5,
    duration: 2,
    delay: 1
})

gsap.to("#box2", {
    scrollTrigger: {
        trigger: "#box2",
        scroller: "body",
        markers: true,
        start: "top 50%",
        scrub: 3
    },
    rotate: 360,
})