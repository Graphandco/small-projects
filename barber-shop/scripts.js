const tl = gsap.timeline({defaults: {ease: "power2.inOut", duration: .5}})

tl.from('.row-coordonnees', {
    x: '-10%', opacity: 0
})
tl.from('.row-logo', {
    x: '10%', opacity: 0
})
tl.from('.row-menu ul li', {
    y: '-10%', opacity: 0, stagger: .1
})
tl.from('.logo', {
    clipPath: 'inset(0 0 100% 0)', duration: 2
}, '-=.8')

gsap.from(".prestations", {
    scrollTrigger:{ 
        trigger: ".prestations", 
        start: 'center bottom',
    },
    x: -500,
    opacity: 0
});

gsap.from(".prestations .column", {
    scrollTrigger:{ 
        trigger: ".prestations .column", 
        start: 'center bottom',
    },
    opacity: 0,
    stagger: .5
});

gsap.from(".actualites img", {
    scrollTrigger:{ 
        trigger: ".actualites img", 
        start: 'center bottom',
    },
    x: -500,
    opacity: 0
});

gsap.from(".actualites article", {
    scrollTrigger:{ 
        trigger: ".actualites article", 
        start: 'bottom center',
    },
    x: 500,
    opacity: 0,
    stagger: .2
});

gsap.from(".partenaires", {
    scrollTrigger:{ 
        trigger: ".partenaires", 
        start: 'center bottom',
    },
    opacity: 0
});

gsap.from(".partenaires img", {
    scrollTrigger:{ 
        trigger: ".partenaires img", 
        start: 'center bottom',
    },
    x: 500,
    opacity: 0
});

gsap.from(".partenaires ul li", {
    scrollTrigger:{ 
        trigger: ".partenaires ul", 
        start: 'center bottom',
    },
    x: -500,
    opacity: 0,
    stagger: .2
});