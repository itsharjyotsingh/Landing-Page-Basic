// Timeline ****************************************************************************************************

var tl = gsap.timeline();

    tl
    .to(".coverName", {
        opacity: 1,
        onStart: function () {
            $(".coverName").textillate({
                in: {
                    effect: 'bounceIn',
                }
            });
        }
    })

    .to(".coverTitle", {
        opacity: 1,
        onStart: function () {
            $(".coverTitle").textillate({
                in: {
                    effect: 'bounceIn',
                }
            });
        }
    })
    
    .to(".first", {
        opacity: 1,
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

    .to(".second", {
    opacity: 1,
    delay: 0.8,
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

    .to(".third", {
        opacity: 1,
        delay: 0.8,
        onStart: function () {
            $(".third").textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $(".third").textillate('out');
                    }
                },
                out: {
                    effect: 'fadeOutUp'
                }
            });
        }
    })

    .to(".fourth", {
        opacity: 1,
        delay: 0.8,
        onStart: function () {
            $(".fourth").textillate({
                in: {
                    effect: 'fadeInUp',
                },
            });
        }
    })
    
        .to([".coverName", ".coverTitle", ".fourth"], {
            delay: 0.4,
            opacity: 0,
    })

    .to("#cover", {
        y: "-100%",
        duration: 0.4
    })

    .to([".navLinks", ".creativeHeadline", ".developerHeadline"], {
        opacity: 1,
        duration: 0.5,
        y: 30,
        onStart: function () {
            $(".creativeHeadline").textillate({
                in: {
                    effect: 'flipInX',
                }
            })

            $(".developerHeadline").textillate({
                in: {
                    effect: 'flipInX',
                }
            })
        }
    })

    .to("#imageSpace", {
        width: "550px",
        duration: 0.5
    })


// Scroll Trigger ****************************************************************************************************

gsap.to([".one", ".two"], {
    scrollTrigger: {
        trigger: ".one",
        scroller: "body",
        start: "top 0%",
        end: "bottom -10%",
        scrub: 1,
    },
    fontSize: "30px"
})