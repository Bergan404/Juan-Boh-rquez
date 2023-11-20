import { TimelineMax, TweenLite, Power2, Power3 } from "gsap";

const grid: HTMLElement | null = document.querySelector(".m-grid");
const gridTop: HTMLElement | null = document.querySelector(".m-grid-top");
const gridRight: HTMLElement | null = document.querySelector(".m-grid-right");
const tl: TimelineMax = new TimelineMax();

TweenLite.set(grid, {
    transformPerspective: 400,
    transformOrigin: "50% 50%",
});

const anim2Props: gsap.TweenVars = {
    rotationX: 75,
    y: "0%",
    ease: Power2.easeIn,
    transformPerspective: 300,
    onComplete: () => {
        grid?.classList.add("is-animating");
        gridTop?.classList.add("is-animating");
        gridRight?.classList.add("is-animating");
    },
};

tl.to(grid, 1, { scaleY: 1.5, ease: Power3.easeIn })
    .to(grid, 1, anim2Props, "+=0.3")
    .to(".m-logo__wrap", 1, { scale: 1 });
