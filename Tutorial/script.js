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
        
        .to("#mainTextContainer", {
            height: "100%",
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
        height: "225px",
        duration: 0.5
    })


tl.to(["#firstProjectName", "#firstProjectDetails"],    {
        opacity: 1,
        onStart: function () {
            $("#firstProjectName").textillate({
                in: {
                    effect: "fadeInUp",
                },
            });

            $("#firstProjectDetails").textillate({
                in: {
                    effect: "fadeInUp",
                }
            });
        },
        scrollTrigger: {
            trigger: ".firstProject",
            scroller: "body",
            start: "top 40%",
            end: "bottom 20%",
        }
    });

tl.to(["#secondProjectName", "#secondProjectDetails"], {
        opacity: 1,
        onStart: function () {
            $("#secondProjectName").textillate({
                in: {
                    effect: "fadeInUp",
                },
            });

            $("#secondProjectDetails").textillate({
                in: {
                    effect: "fadeInUp",
                }
            });
        },
        scrollTrigger: {
            trigger: ".secondProject",
            scroller: "body",
            start: "top 40%",
            end: "bottom 20%"
        }
    });

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
});

gsap.to(".paras", {
    y: 20,
    stagger: 0.5,
    opacity: 1,
    scrollTrigger: {
        trigger: "#top",
        scroller: "body",
        start: "top 70%",
        end: "bottom 50%",
    },
});

gsap.to("#firstProjectImage", {
    y: -50,
    scrollTrigger: {
        trigger: "#firstProjectImage",
        scroller: "body",
        start: "top 70%",
        end: "bottom 20%",
        scrub: 1,
    }
})

gsap.to("#firstProjectImage img", {
    y: -400,
    scrollTrigger: {
        trigger: "#firstProjectImage img",
        scroller: "body",
        start: "top 70%",
        end: "bottom 40%",
        scrub: 1
    }
})

gsap.to("#secondProjectImage", {
    y: -50,
    scrollTrigger: {
        trigger: "#secondProjectImage",
        scroller: "body",
        start: "top 70%",
        end: "bottom 20%",
        scrub: 1,
    }
})

gsap.to("#secondProjectImage img", {
    y: -400,
    scrollTrigger: {
        trigger: "#secondProjectImage img",
        scroller: "body",
        start: "top 70%",
        end: "bottom 40%",
        scrub: 2,
    }
})