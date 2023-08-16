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

    .from([".mainTextContent",".mainTextContent2"], {
        opacity: 0,
        onStart: function () {
            $(".mainTextContent").textillate({
                in: {
                    effect: 'wobble'
                }
            })

            $(".mainTextContent2").textillate({
                in: {
                    effect: 'wobble'
                }
            })
        }
    })