gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
scrollTrigger: {
    trigger: "#footer",
    start: "top center",
    end: "center bottom",
    scrub: true,
    //markers: true
}
});
tl.add('start')
tl.to(".next", {right: -300}, 'start')
tl.to(".prev", {left: -300}, 'start')


document.querySelector('.second-button').addEventListener('click', function () {
    document.querySelector('.animated-icon2').classList.toggle('open');
});

document.querySelector('.sidebar-btn').addEventListener('click', function () {
    document.querySelector('.work-wrapper').classList.toggle('show-sidebar');
});

