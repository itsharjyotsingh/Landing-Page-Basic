var tl = gsap.timeline();

tl
    .from(".first", {
    onStart: function () {
        $(".first").textillate({
            in: {
                effect: 'fadeInUp',
                callback: function () {
                    $(".first").textillate('out');
                }
            },
            out: {
                effect: 'fadeOutUp'
            }
        });
    }
})

    .from(".second", {
    opacity: 0,
    delay: 1,
    onStart: function () {
        $(".second").textillate({
            in: {
                effect: 'fadeInUp',
                callback: function () {
                    $(".second").textillate('out');
                }
            },
            out: {
                effect: 'fadeOutUp'
            }
        });
    }
    })

    .to("#cover", {
        delay: '2',
        y: "-100%",
        duration: 1
    })

    .from("#mainTextContainer", {
        scale: 0.5,
        opacity: 0,
        duration: 0.3
    })

    .from([".mainTextContent",".mainTextContent2"], {
        opacity: 0,
        onStart: function () {
            $(".mainTextContent").textillate({
                in: {
                    effect: 'fadeInUp'
                }
            })

            $(".mainTextContent2").textillate({
                in: {
                    effect: 'fadeInUp'
                }
            })
        }
    })

gsap.to("#mainTextContainer", {
    scrollTrigger: {
        trigger: "#mainTextContainer",
        scroller: "body",
        start: "top 50%",
        end: "bottom 40%",
        scrub: 2,
    },
    width: "100%",
    height: "100%",
    top: "0%",
    left: "0%",
});



gsap.from(".mainTextContent3", {
    scrollTrigger: {
        trigger: ".mainTextContent3",
        scroller: "body",
        start: "top 50%",
        end: "bottom 30%",
        markers: true,
        scrub: 1,
    },
    opacity: 0,
    y: 100,
})