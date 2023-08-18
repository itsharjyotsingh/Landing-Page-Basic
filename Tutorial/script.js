var tl = gsap.timeline();

var string = "";
var navItems = document.querySelectorAll(".navLinks");


// navItems.forEach(element => {
//     element.textContent = element.textContent.split("").join(`<span>${element}</span>`);
// });

console.log(navItems)

    tl
    .from(".coverName", {
        opacity: 0,
        onStart: function () {
            $(".coverName").textillate({
                in: {
                    effect: 'bounceIn',
                }
            });
        }
    })

    .from(".coverTitle", {
        opacity: 0,
        onStart: function () {
            $(".coverTitle").textillate({
                in: {
                    effect: 'bounceIn',
                }
            });
        }
    })
    
    .from(".first", {
        opacity: 0,
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

    .from(".third", {
        opacity: 0,
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

    .from(".fourth", {
        opacity: 0,
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
            delay: 0.5,
            opacity: 0,
    })

    .to("#cover", {
        y: "-100%",
        duration: 1
    })

    .to([".navLinks", "#creativeHeadline", "#developerHeadline"], {
        opacity: 1,
        duration: 0.5,
        y: 30,
        onStart: function () {
            $("#creativeHeadline").textillate({
                in: {
                    effect: 'flipInX',
                }
            })

            $("#developerHeadline").textillate({
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