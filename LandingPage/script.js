const animate = () => {
    gsap.to(".imageContainer", {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2,
        repeat: -1
    })
    
    gsap.to(".text", {
        ease: Expo.easeInOut,
        width: '40%',
        delay: 1,
    })
    
    gsap.to(".text h1", {
        ease: Expo.easeInOut,
        top: -50,
        stagger: 2,
    })
    
    gsap.to(".text h1", {
        ease: Expo.easeInOut,
        top: "-400",
        delay: 2,
        stagger: 2,
        onComplete: () => {
            gsap.delayedCall(0, animate);
        }
    });
}


animate();