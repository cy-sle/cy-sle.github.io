//TODO: animate on scroll using scrollmagic

var h_anim = anime.timeline({
    easing: 'easeOutQuad'
});

var link_anim = anime.timeline({
    easing: 'easeOutQuad'
});

var bg_anim = anime.timeline({
    easing: 'linear'
});

window.addEventListener('load',() => {
    h_anim.add({
        targets: ['.pfp', '.header-details > h1', '.header-details > p'],
        translateY: [-35, 0],
        opacity: [0, 1],
        delay: anime.stagger(250, {start: 200}),
        duration: 750
    })
    link_anim.add({
        targets: '.soc-links > a',
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(150, {start: 1000}),
        duration: 700
    })
    bg_anim.add({
        targets: '.background',
        opacity: [0, 1],
        duration: 1500
    })
});