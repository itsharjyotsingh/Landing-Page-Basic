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
        duration: 0.1
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


tl.to(["#firstProjectName", "#firstProjectDetails"], {
    opacity: 1,
    onStart: function () {
        $("#firstProjectName").textillate({
            in: {
                effect: "fadeInUp",
                delayScale: 0.3
            },
        });

        $("#firstProjectDetails").textillate({
            in: {
                effect: "fadeInUp",
                delayScale: 0.3
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
                delayScale: 0.3
            },
        });

        $("#secondProjectDetails").textillate({
            in: {
                effect: "fadeInUp",
                delayScale: 0.3
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
        scrub: 3,
    },
    fontSize: "1.4em"
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
    y: -50,
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
    y: -50,
    scrollTrigger: {
        trigger: "#secondProjectImage img",
        scroller: "body",
        start: "top 70%",
        end: "bottom 40%",
        scrub: 1,
    }
})

gsap.to("#aeromodelling", {
    opacity: 1,
    scrollTrigger: {
        trigger: "#aeromodelling",
        scroller: "body",
        start: "top 40%",
        end: "bottom 30%",
    },
    onStart: function () {
        $("#aeromodelling").textillate({
            in: {
                effect: "fadeInUp",
            }
        })
    }
})

gsap.to("#guitar", {
    opacity: 1,
    scrollTrigger: {
        trigger: "#guitar",
        scroller: "body",
        start: "top 40%",
        end: "bottom 30%",
    },
    onStart: function () {
        $("#guitar").textillate({
            in: {
                effect: "fadeInUp",
            }
        })
    }
})

gsap.to(["#games", "#thisone"], {
    opacity: 1,
    scrollTrigger: {
        trigger: "#games",
        scroller: "body",
        start: "top 40%",
        end: "bottom 30%",
    },
    onStart: function () {
        $("#games").textillate({
            in: {
                effect: "fadeInUp",
            }
        })
        $("#thisone").textillate({
            in: {
                effect: "flipInY",
                delayScale: .5
            }
        })
    }
})

// Click handlers ****************************************************************************************************


var text1 = $("#aboutme").textillate({
    in: {
        effect: 'fadeInUp',
        callback: function () {
            $("#aboutme").textillate('out');
        }
    },
    out: {
        effect: 'flipOutY'
    },
    type: "char",
    autoStart: "false"
})


document.querySelector("#moreAboutMeClick").addEventListener("click", () => {
    tl
        .to("#blackClickCover", {
            y: "-100%",
        })
        .to("#blackClickCover", {
            backgroundColor: "#080808",
        })

        .to("#aboutme", {
            opacity: 1,
            function () {

                document.querySelector("#aboutMePage").classList.remove('none');
                document.querySelector("#homePageLink").classList.remove('none');

                document.querySelector("#stickyContainer").classList.toggle("none");
                
                text1.textillate('in');
            }
        })

        .to("#blackClickCover", {
            delay: 2.5,
            duration: 1,
            y: "100%",
        })
    
        .to("#myName", {
            opacity: 1,
            duration: 0.4,
            onstart: function () {
                $("#myName").textillate({
                    in: {
                        effect: 'flipInY',
                    }
                })
            }
        })

        .to("#myImage", {
            height: "450px",
            opacity: 1,
            duration: 0.4,
            delay: -0.4,
        })
})

document.querySelector("#homePageLink").addEventListener("click", () => {

    document.querySelector("#aboutme").textContent = "Home Page"

    tl
        .to("#blackClickCover", {
            y: "-100%",
        })
        
        .to("#blackClickCover", {
            backgroundColor: "#080808",
        })

        .to("#aboutMePage", {
            top: "0%",
        })

        .to("#aboutme", {
            opacity: 1,
            function () {

                document.querySelector("#aboutMePage").classList.add('none');

                document.querySelector("#homePageLink").classList.add('none');
        
                document.querySelector("#stickyContainer").classList.toggle("none");
            
                text1.textillate('in');
            }
        })

        .to("#blackClickCover", {
            delay: 2.5,
            duration: 1,
            y: "100%",
        })
})